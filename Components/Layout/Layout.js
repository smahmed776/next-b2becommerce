import React, { Fragment, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSession } from "next-auth/react";
import API from "../API";

const Layout = (props) => {
  const { data: session } = useSession();

  async function registerUser() {
    try {
      const data = {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image
      };
      await API.post("/signup", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "oauth"
        }
      });
    } catch (error) {
      console.log(error.response, error);
    }
  }

  useEffect(() => {
    if (session) {
      registerUser();
    }
  }, [session]);
  return (
    <Fragment>
      <Header>
        <main className="bg-light">{props.children}</main>
      </Header>
      <Footer />
    </Fragment>
  );
};

export default Layout;
