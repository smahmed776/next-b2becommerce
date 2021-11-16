import dbConnect from "../../../../server/db/dbconnect";
import jwt from "jsonwebtoken";
import Customer from "../../../../server/Schemas/Customer";
import cookie from "cookie";
import vendorprofile from "../../../../server/Schemas/vendorprofile";

const JWT_SECRET = "salksfhklaskdjfkshalkjfjlasdlfs";

export default async function getUser(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const isCookie = req.headers.cookie && cookie.parse(req.headers.cookie);
    const jsonToken = isCookie && isCookie.jwt;
    if (jsonToken) {
      let decode = {};
      await jwt.verify(jsonToken, JWT_SECRET, (err, data) => {
        if (err) {
          const options = {
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: "strict",
            path: "/",
            maxAge: 1 
          };
          res.setHeader(
            "set-cookie",
            cookie.serialize("jwt", "invalid token", options)
          );
          res.status(404).json({
            message: "invalid web token"
          });
        }
        decode = data;
      });

      if (decode?.type === "customer") {
        const getCustomer = await Customer.findById(decode.id);
        const user = {
          name: `${getCustomer.name.firstName} ${getCustomer.name.lastName}`,
          email: getCustomer.email,
          image: getCustomer.image,
          country: getCustomer.country,
          type: decode.type
        };
        res.status(200).json({
          type: decode.type,
          user,
          message: "User Found"
        });
      }
      if (decode?.type === "marchent") {
        const getMarchent = await vendorprofile.findById(decode.id);
        if (!getMarchent) {
          const options = {
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: "strict",
            path: "/",
            expired: true
          };
          res.setHeader(
            "set-cookie",
            cookie.serialize("jwt", "invalid token", options)
          );
          res.status(403).json({ message: "User does not exist on database!" });
        }
        const user = {
          id: decode.id,
          name: `${getMarchent.name.firstName} ${getMarchent.name.lastName}`,
          email: getMarchent.email,
          image: getMarchent.profile.image,
          coverImage: getMarchent.profile.coverImage,
          country: getMarchent.country,
          type: decode.type,
          username: getMarchent.username,
          phone: getMarchent.phone
        };
        res.status(200).json({
          type: decode.type,
          user,
          message: "Marchent Found!"
        });
      }
    } else {
      res.status(400).json({
        message: "No web token found!"
      });
    }
  } else {
    res.status(400).json({
      message: "Invalid request method!"
    });
  }
}
