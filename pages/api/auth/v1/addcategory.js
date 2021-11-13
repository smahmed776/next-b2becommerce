import dbConnect from "../../../../server/db/dbconnect";
import categories from "../../../../server/Schemas/categories";

export default async function getUser(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    try {
      const {
        name,
      } = req.body;
      const createCategory = await new categories({
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
