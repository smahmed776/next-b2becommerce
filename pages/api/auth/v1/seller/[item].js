import vendorprofile from "../../../../../server/Schemas/vendorprofile";
import dbConnect from "../../../../../server/db/dbconnect";

export default async function sellerproductHandler(req, res) {
  if (req.method === "GET") {
    dbConnect();
    const authHeader = req.headers["authorization"];
    const vendor = authHeader && authHeader.split(" ")[1];
    if (vendor) {
      const { item } = req.query;
      if (item === "home") {
        try {
          const getProducts = await vendorprofile.findOne({ username: vendor });
          if (getProducts) {
            const { image, coverImage, followers, level, Rating } =
              getProducts.profile;
            const home = {
              image,
              coverImage,
              followers,
              level,
              Rating,
              totalProducts: getProducts.profile.home.products.length,
              home: getProducts.profile.home
            };
            res.status(200).json({
              home,
              isFound: true,
              message: "ok"
            });
          }
        } catch (error) {
          console.log(error);
          res.status(400).json({
            error,
            message: "Internal server error!"
          });
        }
      } else if (item === "product") {
        try {
          const getProducts = await vendorprofile.findOne({ username: vendor });
          if (getProducts) {
            const { image, coverImage, followers, level, Rating } =
              getProducts.profile;
            const product = {
              image,
              coverImage,
              followers,
              level,
              Rating,
              totalProducts: getProducts.profile.home.products.length,
              product: getProducts.profile.home.products
            };
            res.status(200).json({
              product,
              isFound: true,
              message: "ok"
            });
          }
        } catch (error) {
          console.log(error);
          res.status(400).json({
            error,
            message: "Internal server error!"
          });
        }
      } else if (item === "about") {
        try {
          const getProducts = await vendorprofile.findOne({ username: vendor });
          if (getProducts) {
            const { image, coverImage, followers, level, Rating } =
              getProducts.profile;
            const about = {
              image,
              coverImage,
              followers,
              level,
              Rating,
              totalProducts: getProducts.profile.home.products.length,
              about: getProducts.profile.home.about
            };
            res.status(200).json({
              about,
              isFound: true,
              message: "ok"
            });
          }
        } catch (error) {
          console.log(error);
          res.status(400).json({
            error,
            message: "Internal server error!"
          });
        }
      } else if (item === "live") {
        try {
          const getProducts = await vendorprofile.findOne({ username: vendor });
          if (getProducts) {
            const { image, coverImage, followers, level, Rating } =
              getProducts.profile;
            const live = {
              image,
              coverImage,
              followers,
              level,
              Rating,
              totalProducts: getProducts.profile.home.products.length,
              live: getProducts.profile.home.live
            };
            res.status(200).json({
              live,
              isFound: true,
              message: "ok"
            });
          }
        } catch (error) {
          console.log(error);
          res.status(400).json({
            error,
            message: "Internal server error!"
          });
        }
      }
    }
  } else {
    res.status(400).json({
      message: "invalid request method!"
    });
  }
}
