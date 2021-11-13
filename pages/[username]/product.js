import { useContext } from "react";
import MarchentPage from "../../Components/Marchent/MarchentPage";
import { AuthContext } from "../../Components/GlobalContext/authContext";
import {Server_URL } from '../../config/config'

export default function product({ data }) {
  const { customerInfo, marchentInfo } = useContext(AuthContext);
  const [customer] = customerInfo;
  const [marchent] = marchentInfo;
  return (
    <MarchentPage
      data={data.product}
      isFound={data.isFound}
      user={customer.length > 0 ? customer[0] : marchent[0]}
      home={false}
      about={false}
      product={true}
      live={false}
    />
  );
}

export async function getStaticProps({ params: { username } }) {
  const res = await fetch(
    `${Server_URL}/api/auth/v1/seller/product`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${username}`
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
