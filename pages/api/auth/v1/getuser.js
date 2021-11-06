import dbConnect from "../../../../server/db/dbconnect";
import jwt from "jsonwebtoken";
import Marchent from "../../../../server/Schemas/Marchent";
import Customer from "../../../../server/Schemas/Customer";
import cookie from "cookie";

const JWT_SECRET = "salksfhklaskdjfkshalkjfjlasdlfs";

export default async function getUser(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    const isCookie = cookie.parse(req.headers.cookie);
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
        };
        res.status(200).json({
          type: decode.type,
          user,
          message: "User Found",
        });
      }
      if (decode?.type === "marchent") {
        const getMarchent = await Marchent.findById(decode.id);
        const user = {
          name: `${getMarchent.name.firstName} ${getMarchent.name.lastName}`,
          email: getMarchent.email,
          image: getMarchent.profile.image,
          coverImage: getMarchent.profile.coverImage,
          country: getMarchent.country,
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
