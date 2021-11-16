import dbConnect from "../../../../server/db/dbconnect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import vendorprofile from "../../../../server/Schemas/vendorprofile";
import Customer from "../../../../server/Schemas/Customer";
import cookie from "cookie";

const JWT_SECRET = "salksfhklaskdjfkshalkjfjlasdlfs";

const jwtToken = (id, type) => {
  return jwt.sign({ id, type }, JWT_SECRET);
};

const sendToken = (user, statusCode, type, req, res) => {
  const token = jwtToken(user._id, type);
  const options = {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  };
  res.setHeader("set-cookie", cookie.serialize("jwt", token, options));

  res.status(statusCode).json({
    message: "Logged in!"
  });
  res.end();
};

export default async function handleLogin(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const { email, password, type } = req.body;
    if (email && password && type) {
      if (type === "marchent") {
        try {
          const getUser = await vendorprofile.findOne({ email }).select("+password");
          if (!getUser)
            return res.status(400).json({ message: `User doesn't exist!` });
          const compare = await bcrypt.compare(password, getUser.password);

          if (compare) {
            sendToken(getUser, 200, type, req, res);
          } else {
            return res.status(405).json({ message: "Password invalid" });
          }
        } catch (error) {
          console.log(error);
          res.status(400).json({
            error,
            message: "internal server error",
          });
        }
      }

      if (type === "customer") {
        try {
          const getUser = await Customer.findOne({ email }).select("+password");
          if (!getUser)
            return res.status(400).json({ message: `User doesn't exist!` });
          const compare = await bcrypt.compare(password, getUser.password);

          if (compare) {
            sendToken(getUser, 200, type, req, res);
          } else {
            res.status(405).json({ message: "Password invalid" });
          }
        } catch (error) {
          res.status(400).json({
            error,
            message: "internal server error",
          });
        }
      }
    } else {
      return res.status(404).json({ message: "Missing Informations!" });
    }
  } else {
    return res.status(400).json({ message: "Invalid Request Method" });
  }
}
