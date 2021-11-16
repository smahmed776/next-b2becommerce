import dbConnect from "../../../../server/db/dbconnect";
import vendorprofile from "../../../../server/Schemas/vendorprofile";
import categories from "../../../../server/Schemas/categories";
import products from "../../../../server/Schemas/products";

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
        _id: vendor_id
      });
      const addNewProduct = await new products({
        name,
        product_category,
        product_information,
        pricing,
        listing_price,
        full_description,
        images,
        seller_id: vendor_id,
        seller_name: getvendorprofile.companyName,
        average_rating: 0
      });
      await addNewProduct.save();

      const newProduct = await products.findOne({ name: name });
      getvendorprofile.profile.home.products.push({
        name,
        product_category,
        product_information,
        pricing,
        listing_price,
        full_description,
        images,
        average_rating: 0,
        id: newProduct._id
      });
      await vendorprofile.findOneAndUpdate(
        { _id: vendor_id },
        {
          $set: {
            "profile.home.products": getvendorprofile.profile.home.products
          }
        },
        { new: true }
      );
      if (await categories.findOne({ name: product_category })) {
        const getNewVendor = await vendorprofile.findOne({
          _id: vendor_id
        });
        const getProductID = getNewVendor.profile.home.products.filter(
          (i) => i.name === name
        );
        await categories.findOneAndUpdate(
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
          _id: vendor_id
        });
        const getProductID = getNewVendor.profile.home.products.filter(
          (i) => i.name === name
        );
        const createCategory = await new categories({
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
        await createCategory.save();
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
