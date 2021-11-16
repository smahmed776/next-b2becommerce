import vendorprofile from "../../../../server/Schemas/vendorprofile";
import dbConnect from "../../../../server/db/dbconnect";

export default async function username(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const authHeader = req.headers["authorization"];
      const seller_id = authHeader && authHeader.split(" ")[1];
      if (seller_id) {
        const getVendorprofile = await vendorprofile.findOne({
          vendorId: seller_id
        });
        res.status(200).json({
          username: getVendorprofile.username
        });
      }
    } catch (error) {
      res.status(400).json({ message: "Internal server error!" });
    }
  }
}
