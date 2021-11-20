import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import DashboardPage from "../../Components/Dashboard/DashboardPage";
import { useUser } from "../../Components/GlobalContext/useuser";

export default function dashboard() {
  const { data, isError, isLoading } = useUser("user", "/getuser", "GET");

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5 vh-100">
        <div className="col-10 p-2 d-flex justify-content-center">
          <p>
            <span
              className="spinner-border spinner-border-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </p>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5 vh-100">
        <div className="col-10 p-2 d-flex flex-column justify-content-center">
          <p className="text-center">
            You are not eligible to access this page...
          </p>
          <p className="text-center">
            are you an admin of this page? <Link href="/login">Login</Link> as an
            admin with credentials!
          </p>
          <div className="d-flex justify-content-center">
            <Link href="/" passHref>
              <button className="btn btn-primary  ">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Fragment>
      <Head>
        <title>Dashboard - ImponExpo</title>
      </Head>
      <DashboardPage user={data.user} />
    </Fragment>
  );
}
