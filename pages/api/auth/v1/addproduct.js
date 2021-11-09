import dbConnect from "../../../../server/db/dbconnect";
import products from "../../../../server/Schemas/products";
import vendorprofile from "../../../../server/Schemas/vendorprofile";
import mongoose from "mongoose";

export default async function getUser(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const authHeader = req.headers["authorization"];
    const vendor_id = authHeader && authHeader.split(" ")[1];
    if (!vendor_id) res.status(401).json({ message: "vendor not found" });
    try {
      const {
        name,
        product_category,
        product_information,
        pricing,
        listing_price,
        full_description,
        images
      } = req.body;
      const getvendorprofile = await vendorprofile.findOne({
        vendorId: vendor_id
      });
      getvendorprofile.profile.home.products.push({
        name,
        product_category,
        product_information,
        pricing,
        listing_price,
        full_description,
        images,
        average_rating: 0,
        id: await mongoose.Types.ObjectId()
      });
      await vendorprofile.findOneAndUpdate(
        { vendorId: vendor_id },
        {
          $set: {
            "profile.home.products": getvendorprofile.profile.home.products
          }
        },
        { new: true }
      );
      if (await products.findOne({ name: product_category })) {
        const getNewVendor = await vendorprofile.findOne({
          vendorId: vendor_id
        });
        const getProductID = getNewVendor.profile.home.products.filter(
          (i) => i.name === name
        );
        await products.findOneAndUpdate(
          { name: product_category },
          {
            $push: {
              products: {
                name,
                product_category,
                product_information,
                pricing,
                listing_price,
                full_description,
                images,
                id: getProductID[0].id,
                seller_id: vendor_id,
                seller_name: getNewVendor.companyName,
                average_rating: 0
              }
            }
          },
          { new: true }
        );
      } else {
        const getNewVendor = await vendorprofile.findOne({
          vendorId: vendor_id
        });
        const getProductID = getNewVendor.profile.home.products.filter(
          (i) => i.name === name
        );
        const createCategory = await new products({
          name: product_category,
          products: [
            {
              name,
              product_category,
              product_information,
              pricing,
              listing_price,
              full_description,
              images,
              id: getProductID[0].id,
              seller_id: vendor_id,
              seller_name: getNewVendor.companyName,
              average_rating: 0
            }
          ]
        });
        createCategory.save();
      }
      res.status(200).json({ message: "product Added" });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(400).json({
      message: "Invalid request method!"
    });
  }
}
