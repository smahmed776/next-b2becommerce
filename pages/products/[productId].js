import products from "../../server/Schemas/products";
import Head from "next/head";
import ProductsPage from "../../Components/Product/ProductsPage";
import dbConnect from "../../server/db/dbconnect";
import { Fragment } from "react";

export default function productsHandler({ data }) {
  const title = (data) => {
    if(data.name.length > 45){
      const text = data.name.substr(0, 45)
      return `${text}...`;
    }
    if(data.name.length <= 45){
      return data.name;
    }
  }
  return (
    <Fragment>
      <Head>
        <title>{title(data)} - ImponExpo</title>
      </Head>
      <ProductsPage product={data} />
    </Fragment>
  );
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
