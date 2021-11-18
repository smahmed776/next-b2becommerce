import { useContext } from "react";
import MarchentPage from "../../Components/Marchent/MarchentPage";
import { AuthContext } from "../../Components/GlobalContext/authContext";
import dbConnect from "../../server/db/dbconnect";
import vendorprofile from "../../server/Schemas/vendorprofile";


export default function product({ data }) {
  const { customerInfo, marchentInfo } = useContext(AuthContext);
  const [customer] = customerInfo;
  const [marchent] = marchentInfo;
  return (
    <MarchentPage
      data={data}
      user={customer.length > 0 ? customer[0] : marchent[0]}
      home={false}
      about={false}
      product={true}
      live={false}
    />
  );
}

export async function getStaticProps({ params: { username } }) {
  await dbConnect();
  const getProducts = await vendorprofile.findOne({ username });

  const { companyName, country } = getProducts;

  const { image, coverImage, followers, level, Rating } = getProducts.profile;
  const product = JSON.stringify({
    image,
    country,
    companyName,
    coverImage,
    followers,
    level,
    Rating,
    totalProducts: getProducts.profile.home.products.length
  });
  const data = JSON.parse(product);
  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 10
  };
}

export async function getStaticPaths(context) {
  await dbConnect();
  console.log(context.query);
  const getVendors = await vendorprofile.find();
  const vendors = getVendors.map((vendor) => vendor.username);

  const paths = vendors.map((item) => ({ params: { username: item } }));

  return {
    paths,
    fallback: "blocking" // will be passed to the page component as props
  };
}
