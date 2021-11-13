import MarchentPage from "../../Components/Marchent/MarchentPage";
import { Server_URL } from "../../config/config";
import dbConnect from "../../server/db/dbconnect";
import vendorprofile from "../../server/Schemas/vendorprofile";

export default function about({ data }) {

  return (
    <MarchentPage
      data={data}
      home={false}
      about={true}
      product={false}
      live={false}
    />
  );
}

export async function getStaticProps({ params: { username }, query }) {
  console.log(username)
  const getProducts = await vendorprofile.findOne({
    username: 'admin'
  });

  const { image, coverImage, followers, level, Rating } = getProducts.profile;
  const about = JSON.stringify({
    image,
    coverImage,
    followers,
    level,
    Rating,
    totalProducts: getProducts.profile.home.products.length,
    about: getProducts.profile.home.about || ""
  });
  const data = JSON.parse(about)
  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data } // will be passed to the page component as props
  };
}

export async function getStaticPaths(context) {
  dbConnect();
  const getVendors = await vendorprofile.find();
  const vendors = getVendors.map((vendor) => vendor.username);

  const paths = vendors.map((item) => ({ params: { username: item } }));

  return {
    paths,
    fallback: "blocking" // will be passed to the page component as props
  };
}
