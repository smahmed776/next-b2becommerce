import vendorprofile from "../../../../../server/Schemas/vendorprofile";
import dbConnect from "../../../../../server/db/dbconnect";

export default async function sellerproductHandler(req, res) {
  if (req.method === "GET") {
    dbConnect();

    try {
      const getVendors = await vendorprofile.find();
      const vendors = getVendors.map((vendor) => vendor.username);
      res.status(200).json({
        vendors,
        message: "ok"
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error,
        message: "Internal server error!"
      });
    }
  } else {
    res.status(400).json({
      message: "invalid request method!"
    });
  }
}
