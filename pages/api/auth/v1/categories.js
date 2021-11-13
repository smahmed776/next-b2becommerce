import categories from "../../../../server/Schemas/categories";

export default async function categoryHandler(req, res) {
  if (req.method === "GET") {
    try {
      const getCategories = await categories.find()
      let categoriesArr = [];
      getCategories.map(category => (
        categoriesArr.push(category.name)
      ))
      res.status(200).json({
        categoriesArr
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error
      });
    }
  } else {
    res.status(400).json({
      message: "invalid request method"
    });
  }
}
