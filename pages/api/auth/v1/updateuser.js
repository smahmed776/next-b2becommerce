import cookie from "cookie";
import jwt from "jsonwebtoken";
import dbConnect from "../../../../server/db/dbconnect";
import Customer from "../../../../server/Schemas/Customer";
import vendorprofile from "../../../../server/Schemas/vendorprofile";

const JWT_SECRET = "salksfhklaskdjfkshalkjfjlasdlfs";

export default async function handleLogOut(req, res) {
  if (req.method === "PUT") {
    await dbConnect();
    const isCookie = cookie.parse(req.headers.cookie);
    const jsonToken = isCookie && isCookie.jwt;
    if (jsonToken) {
      let decode;
      await jwt.verify(jsonToken, JWT_SECRET, (err, data) => {
        if (err)
          return res.status(404).json({
            message: "invalid web token"
          });
        decode = data;
      });
      const { image } = req.body;

      if (decode.type === "customer") {
        await Customer.findOneAndUpdate(
          { _id: decode.id },
          {
            $set: {
              image: image
            }
          },
          { new: true }
        );
        res.status(200).json({
          message: "Profile Picture changed!"
        });
      }
      if (decode.type === "marchent") {
        await vendorprofile.findOneAndUpdate(
          { _id: decode.id },
          {
            $set: {
              "profile.image": image
            }
          },
          { new: true }
        );
        res.status(200).json({
          message: "Profile Picture changed!"
        });
      }
    } else {
      res.status(400).json({
        message: "No web token found!"
      });
    }
  } else {
    return res.status(400).json({ message: "Invalid Request Method" });
  }
}
