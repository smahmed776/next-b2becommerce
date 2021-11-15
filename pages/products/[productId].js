import products from "../../server/Schemas/products";
import ProductsPage from "../../Components/Product/ProductsPage";
import dbConnect from "../../server/db/dbconnect";

export default function productsHandler({ data }) {
  return <ProductsPage product={data} />;
}

export async function getServerSideProps(context) {
  await dbConnect();
  const getProduct = await products.findOne({ _id: context.query.productId });
  const jsonformat = await JSON.stringify(getProduct);
  const data = JSON.parse(jsonformat);
  if (!data) {
    return {
      notFound: true
    };
  }
  return {
    props: { data }
  };
}
