import { useRouter } from "next/router";
import MarchentPage from "../../Components/Marchent/MarchentPage";
import { Server_URL } from "../../config/config";
import dbConnect from "../../server/db/dbconnect";
import vendorprofile from "../../server/Schemas/vendorprofile";

export default function home({ data }) {
  // const router = useRouter();
  // const { item } = router.query;
  // if (item === "about") {
  //   return (
  //     <MarchentPage
  //       data={data.about}
  //       home={false}
  //       about={true}
  //       product={false}
  //       live={false}
  //     />
  //   );
  // }

  return (
    <MarchentPage
      data={data}
      home={true}
      about={false}
      product={false}
      live={false}
    />
  );
  // if (item === "product") {
  //   return (
  //     <MarchentPage
  //       data={data.product}
  //       home={false}
  //       about={false}
  //       product={true}
  //       live={false}
  //     />
  //   );
  // }
  // if (item === "live") {
  //   return (
  //     <MarchentPage
  //       data={data.live}
  //       home={false}
  //       about={false}
  //       product={false}
  //       live={true}
  //     />
  //   );
  // }
}

export async function getStaticProps({ params: { username } }) {
  await dbConnect()
  const getProducts = await vendorprofile.findOne({ username });

  const { image, coverImage, followers, level, Rating } = getProducts.profile;
  const home = JSON.stringify({
    image,
    coverImage,
    followers,
    level,
    Rating,
    totalProducts: getProducts.profile.home.products.length,
    home: getProducts.profile.home || {}
  });
  const data = JSON.parse(home);
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
  await dbConnect();
  const getVendors = await vendorprofile.find();
  const vendors = getVendors.map((vendor) => vendor.username);

  const paths = vendors.map((item) => ({ params: { username: item } }));

  return {
    paths,
    fallback: "blocking" // will be passed to the page component as props
  };
}
