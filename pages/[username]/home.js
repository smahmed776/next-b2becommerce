import { useRouter } from "next/router";
import MarchentPage from "../../Components/Marchent/MarchentPage";
import { Server_URL } from "../../config/config";

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
      data={data.home}
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
  const res = await fetch(
    `${Server_URL}/api/auth/v1/seller/home`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${username}`
      }
    }
  );
  const data = await res.json();

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
  const res = await fetch(`${Server_URL}/api/auth/v1/seller`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();

  const paths = data.vendors.map((item) => ({ params: { username: item } }));

  return {
    paths,
    fallback: "blocking" // will be passed to the page component as props
  };
}
