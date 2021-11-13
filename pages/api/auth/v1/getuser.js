import dbConnect from "../../../../server/db/dbconnect";
import jwt from "jsonwebtoken";
import Marchent from "../../../../server/Schemas/Marchent";
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
      let decode= {};
      await jwt.verify(jsonToken, JWT_SECRET, (err, data) => {
        if (err)
          res.status(404).json({
            message: "invalid web token",
          });
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
          message: "User Found",
        });
      }
      if (decode?.type === "marchent") {
        const getMarchent = await Marchent.findById(decode.id);
        const getvendorprofile = await vendorprofile.find({vendorId: decode.id})
        const user = {
          id: decode.id,
          name: `${getMarchent.name.firstName} ${getMarchent.name.lastName}`,
          email: getMarchent.email,
          image: getvendorprofile[0].profile.image,
          coverImage: getvendorprofile[0].profile.coverImage,
          country: getMarchent.country,
          type: decode.type,
          username: getMarchent.username
        };
        res.status(200).json({
          type: decode.type,
          user,
          message: "Marchent Found!",
        });
      }
    } else {
      res.status(400).json({
        message: "No web token found!",
      });
    }
  } else {
    res.status(400).json({
      message: "Invalid request method!",
    });
  }
}
