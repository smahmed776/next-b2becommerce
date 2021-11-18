import MarchentPage from "../../Components/Marchent/MarchentPage";
import dbConnect from "../../server/db/dbconnect";
import vendorprofile from "../../server/Schemas/vendorprofile";

export default function home({ data }) {
  return (
    <MarchentPage
      data={data}
      home={true}
      about={false}
      product={false}
      live={false}
    />
  );
}

export async function getStaticProps({ params: { username } }) {
  await dbConnect();
  const getProducts = await vendorprofile.findOne({ username });
  const {companyName, country} = getProducts;

  const { image, coverImage, followers, level, Rating } = getProducts.profile;
  const home = JSON.stringify({
    image,
    coverImage,
    followers,
    level,
    Rating,
    country,
    totalProducts: getProducts.profile.home.products.length,
    home: getProducts.profile.home || {},
    companyName
  });
  const data = JSON.parse(home);
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
