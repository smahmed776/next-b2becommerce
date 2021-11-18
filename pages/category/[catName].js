import categories from "../../server/Schemas/categories";
import Head from "next/head";
import dbConnect from "../../server/db/dbconnect";
import { Fragment } from "react";
import CategoryPage from "../../Components/CategoryPage";

export default function productsHandler({ data }) {
  return (
    <Fragment>
      <Head>
        <title>{data[0].product_category} - ImponExpo</title>
      </Head>
      <CategoryPage data={data} />
    </Fragment>
  );
}


export async function getStaticProps({params: {catName}}) {
    await dbConnect();
    const name = catName.toString().replace('-', ' ').trim()
    const getCategories =await categories.findOne({ name });
    const home = await getCategories && JSON.stringify(getCategories);
    const data = await home && JSON.parse(home);
    if (!data) {
      return {
        notFound: true
      };
    }
  
    return {
      props: { data: data.products },
      revalidate: 1
    };
  }
  
  export async function getStaticPaths(context) {
    await dbConnect();
    const getCategories = await categories.find();
    const category = getCategories.map((category) => category.name);
  
    const paths = category.map((item) => ({ params: { catName: item } }));
  
    return {
      paths,
      fallback: "blocking" // will be passed to the page component as props
    };
  }