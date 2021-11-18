import MarchentPage from "../../Components/Marchent/MarchentPage";
import dbConnect from "../../server/db/dbconnect";
import vendorprofile from "../../server/Schemas/vendorprofile";

export default function live({ data }) {
  return (
    <MarchentPage
      data={data}
      home={false}
      about={false}
      product={false}
      live={true}
    />
  );
}

export async function getStaticProps({ params: { username } }) {
  await dbConnect();
  const getProducts = await vendorprofile.findOne({ username });
  const { companyName, country } = getProducts;

  const { image, coverImage, followers, level, Rating } = getProducts.profile;
  const live = JSON.stringify({
    image,
    companyName,
    country,
    coverImage,
    followers,
    level,
    Rating,
    totalProducts: getProducts.profile.home.products.length,
    live: getProducts.profile.home.live || []
  });
  const data = JSON.parse(live);
  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data },
    revalidate: 5
  };
}

export async function getStaticPaths(context) {
  await dbConnect();
  const getVendors = await vendorprofile.find();
  const vendors = getVendors.map((vendor) => vendor.username);

  const paths = vendors.map((item) => ({ params: { username: item } }));

  return {
    paths,
    fallback: "blocking" // will be passed to the page component as props
  };
}
