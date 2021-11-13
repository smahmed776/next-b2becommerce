export default async function sellerproductHandler(req, res) {
  if (req.method === "GET") {
    dbConnect();
    const { productId } = req.query;
    if (productId) {
      try {
        const getProduct = await products.findOne({ _id: productId });
        res.status(200).json({
          product: getProduct,
          message: "ok"
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({
          error,
          message: "Internal server error!"
        });
      }
    }
  }
}
