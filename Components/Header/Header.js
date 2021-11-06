import React, { useContext, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import freeLogo from "../img/mlogo.png";
import Link from "next/link";
import { subHeaders, topHeaders } from "../dummydata/dummydata";
import Navigation from "./Navigation";
import API from "../API";
import { useRouter } from "next/dist/client/router";
import { AuthContext } from "../GlobalContext/authContext";

const Header = ({ children, customer, marchent }) => {
  const { requestUser } = useContext(AuthContext);
  const { data: session } = useSession();
  const [headerClass, setHeaderClass] = useState(
    "container-fluid  bg-white border-bottom py-0 px-2 px-md-5 sticky-top"
  );
  const Router = useRouter();
  const logOut = async () => {
    try {
      await API.delete("/logout", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      requestUser();
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const makeSticky = () => {
    if (
      window.scrollY > window.innerHeight / 7 &&
      window.scrollY < window.innerHeight / 2
    ) {
      document.getElementById("fixedHeader").style.opacity = "0";
      setHeaderClass(
        "container-fluid  bg-white border-bottom py-0 px-2 px-md-5 makefixed"
      );
    } else if (window.scrollY > window.innerHeight / 2) {
      // document.getElementById('fixedHeader').classList.add('makefixed')
      document.getElementById("fixedHeader").style.opacity = "1";
      setHeaderClass(
        "container-fluid  bg-white border-bottom py-0 px-2 px-md-5 makefixed"
      );
    } else {
      // document.getElementById('fixedHeader').classList.remove("makefixed")
      document.getElementById("fixedHeader").style.opacity = "1";
      setHeaderClass(
        "container-fluid  bg-white border-bottom py-0 px-2 px-md-5 "
      );
    }
  };
  useEffect(() => {
    if (document !== "undefined") {
      document
        .getElementById("fixedHeader")
        .addEventListener("scroll", makeSticky);
    }
  }, []);

  return (
    <header>
      <div className="bg-dark d-flex justify-content-center">
        <nav className="navbar navbar-dark px-0 px-md-2 top-header">
          <div className="row row-cols-3 row-cols-sm-5 gx-0 m-0 justify-content-center align-items-center w-100">
            {topHeaders.map((header) => (
              <div className="col">
                <ul className="navbar-nav flex-row justify-content-evenly w-100">
                  <li className="nav-item">
                    <Link href={header.path} passHref>
                      <a className="nav-link">{header.name}</a>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div id="fixedHeader" className={headerClass}>
        <nav className="navbar navabar-light py-0">
          <div className="navbar-brand rounded-pill">
            <a href="/">
              <img src={freeLogo.src} alt="" height="55px" width="55px" />
            </a>
          </div>
          <div className="nav-search">
            <form action="">
              <input
                type="search"
                className="form-control bg-primary text-white"
                placeholder="Search for your Products..."
              />
            </form>
          </div>

          <button
            className="btn btn-transparent d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNav"
            aria-controls="offcanvasNav"
          >
            <span className="bi bi-justify "></span>
          </button>

          <div className="navbar navbar-expand-md navbar-light bg-white d-none d-lg-flex py-0">
            <Navigation
              mobile={true}
              session={session}
              user={customer ? customer : marchent}
            />
          </div>
        </nav>
        <NavOffcanvas />
      </div>

      <div className="bg-white container-fluid px-2 px-xl-5 mt-2">
        <nav className="navbar navbar-light w-100">
          <ul className="navbar-nav flex-row flex-wrap justify-content-evenly w-100 ps-3">
            <li className="nav-item flex-fill me-2 p-1">
              <a href="/" className="nav-link">
                <span className="bi bi-justify pe-3"></span> Categories
              </a>
            </li>

            {subHeaders.map((header) => (
              <li className="nav-item flex-fill me-2 p-1">
                <Link href={header.path} passHref>
                  <a className="nav-link">{header.name}</a>
                </Link>
              </li>
            ))}

            {customer && (
              <li className="nav-item flex-fill me-2 p-1">
                <button className="btn btn-danger" onClick={() => logOut()}>
                  Log Out
                </button>
              </li>
            )}
            {marchent && (
              <li className="nav-item flex-fill me-2 p-1">
                <button className="btn btn-danger" onClick={() => logOut()}>
                  Log Out
                </button>
              </li>
            )}
            {session && (
              <li className="nav-item flex-fill me-2 p-1">
                <button
                  className="btn btn-danger"
                  onClick={() => signOut("google")}
                >
                  Log Out
                </button>
              </li>
            )}
            {!session && !marchent && !customer && (
              <li className="nav-item flex-fill me-2 p-1">
                <Link href="/login" passHref>
                  <a className="nav-link">Login</a>
                </Link>
              </li>
            )}
            {!session && !marchent && !customer && (
              <li className="nav-item flex-fill me-2 p-1">
                <Link href="/signup" passHref>
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </header>
  );
};

const NavOffcanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-start d-lg-none bg-light"
      tabIndex="-1"
      id="offcanvasNav"
      aria-labelledby="offcanvasNavLabel"
    >
      <div className="offcanvas-header border-bottom bg-white justify-content-center">
        <button
          type="button"
          className="btn-close text-reset text-center"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body justify-content-center align-items-center">
        <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button
              className="btn"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <Link className="nav-link" href="/profile">
                <div className="row m-0">
                  <div className="col-2 m-0 ">
                    <img
                      className="d-inline rounded-pill"
                      height="35px"
                      width="35px"
                      alt=""
                    />
                  </div>
                  <div className="col-10 m-0">
                    <p className="d-inline text-dark ps-2"></p>
                    <p className="text-muted">See your profile</p>
                  </div>
                </div>
              </Link>
            </button>
          </li>
          <hr />
          <div className="row row-cols-2 gx-3 gy-3 my-2 px-3">
            <div className="col">
              <Link
                href="#"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex flex-column align-items-center bg-white border p-2">
                  <span className="bi bi-bookmark"></span>
                  <p>Saved</p>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link
                href="#"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex flex-column align-items-center bg-white border p-2">
                  <span className="bi bi-collection"></span>
                  <p>Videos</p>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link
                href="#"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex flex-column align-items-center bg-white border p-2">
                  <span className="bi bi-flag"></span>
                  <p>Pages</p>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link
                href="#"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex flex-column align-items-center bg-white border p-2">
                  <span className="bi bi-shop"></span>
                  <p>Marketplace</p>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link
                href="#"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex flex-column align-items-center bg-white border p-2">
                  <span className="bi bi-people"></span>
                  <p>Groups</p>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link
                href="#"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex flex-column align-items-center bg-white border p-2">
                  <span className="bi bi-person"></span>
                  <p>Friends</p>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link
                href="#"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex flex-column align-items-center bg-white border p-2">
                  <span className="bi bi-calendar"></span>
                  <p>Events</p>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link
                href="#"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex flex-column align-items-center bg-white border p-2">
                  <span className="bi bi-gear"></span>
                  <p>Settings</p>
                </div>
              </Link>
            </div>
          </div>

          <button type="button" className="btn btn-secondary w-100 ">
            {" "}
            Log Out{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
