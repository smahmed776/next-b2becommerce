import dbConnect from "../../../../server/db/dbconnect";
import products from "../../../../server/Schemas/products";

export default async function getUser(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    try {
      const {
        name,
      } = req.body;
      const createCategory = await new products({
        name
      })
      await createCategory.save()
      res.status(200).json(
       {message: "product Added"}
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(400).json({
      message: "Invalid request method!"
    });
  }
}
