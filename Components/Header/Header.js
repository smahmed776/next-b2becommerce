import React, { Fragment, useContext, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import freeLogo from "../img/mlogo.png";
import Link from "next/link";
import { subHeaders, topHeaders } from "../dummydata/dummydata";
import Navigation from "./Navigation";
import { AuthContext } from "../GlobalContext/authContext";
import { useRouter } from "next/router";
import API from "../API";
import useSWR from "swr";
import { useUser } from "../GlobalContext/useuser";

const Header = ({ children }) => {
  const { data, isLoading, isError } = useUser("user", "getuser");
  const { data: session } = useSession();
  const [headerClass, setHeaderClass] = useState(
    "container-fluid  bg-white border-bottom py-0 px-2 px-md-5 sticky-top"
  );

  const { requestUser } = useContext(AuthContext);

  const Router = useRouter();
  const logOut = async () => {
    try {
      await API.delete("/logout", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      requestUser();
      Router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const navbar = [
    {
      "category name": "Most Popular",

      items: [
        {
          name: "Web development",
          id: "WebDevelopment",
          items: [
            "Javascript",
            "AngularJs",
            "React",
            "Css",
            "Node Js",
            "Vue Js",
            "Django"
          ]
        },
        {
          name: "Mobile development",
          id: "Mobiledevelopment",
          items: [
            "Andriod developnemt",
            "Ios development",
            "Google flutter",
            "Swift",
            "React native",
            "Kotlin"
          ]
        },
        {
          name: "Game development",
          id: "Gamedevelopment",
          items: [
            "Unity",
            "Unreal engine",
            "C#",
            "Java",
            "C++",
            "2D Mobile game development"
          ]
        },
        {
          name: "Enterpreneurship",
          id: "Enterpreneurship",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        },
        {
          name: "Business Analytics & Intelligence",
          id: "BusinessAnalytics&Intelligence",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        },
        {
          name: "Digital marketing",
          id: "Digitalmarketing",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        },
        {
          name: "Graphic design & illustration",
          id: "Graphicdesign&illustration",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        },
        {
          name: "IT certification",
          id: "ITcertification",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        },
        {
          name: "Personal Transformation",
          id: "PersonalTransformation",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        },
        {
          name: "All categories",
          id: "Allcategories",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        }
      ]
    },
    {
      "category name": "More on VideoTube",
      items: [
        {
          name: "VideoTube Business",

          items: ["Business", "Freelancing", "Startup", "Blogging"]
        },
        {
          name: "Get the app",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        },
        {
          name: "Invite friends",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        },
        {
          name: "Help",
          items: ["Business", "Freelancing", "Startup", "Blogging"]
        }
      ]
    }
  ];

  const handleClick = (e) => {
    // document.getElementById('mainCat').style.visibility= "hidden";
    document.getElementById("mainCat").style.transform = "translate(-100%)";
    document
      .getElementById(e.target.dataset.mainId)
      .classList.add("subCatShow");
    document.getElementById(e.target.dataset.mainId).style.visibility =
      "visible";
    // console.log(e.target.dataset)
  };
  const backToCat = (e) => {
    // document.getElementById('mainCat').style.visibility= "visible";
    document.getElementById("mainCat").style.transform = "none";
    document
      .getElementById(e.target.dataset.mainId)
      .classList.remove("subCatShow");
    document.getElementById(e.target.dataset.mainId).style.visibility =
      "hidden";
    // console.log(e.target.dataset)
  };
  if (isError) {
    return (
      <header>
        <div className="bg-dark d-flex justify-content-center">
          <nav className="navbar navbar-dark px-0 px-md-2 top-header">
            <div className="row row-cols-3 row-cols-sm-5 gx-0 m-0 justify-content-center align-items-center w-100">
              {topHeaders.map((header, index) => (
                <div className="col" key={index}>
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
              <Navigation mobile={true} session={session} user={false} />
            </div>
          </nav>
          <NavOffcanvas user={false} logOut={logOut} />
        </div>

        <div className="bg-white container-fluid px-2 px-xl-5 mt-2">
          <nav className="navbar navbar-light w-100">
            <ul className="navbar-nav flex-row flex-wrap justify-content-evenly w-100 ps-3">
              <li className="nav-item flex-fill me-2 p-1">
                <a
                  role="button"
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCollapse"
                  aria-controls="offcanvasCollapse"
                >
                  <span className="bi bi-justify pe-3"></span> Categories
                </a>
              </li>
              <CategoryOffcanvas navbar={navbar} />

              {subHeaders.map((header) => (
                <li className="nav-item flex-fill me-2 p-1" key={header.name}>
                  <Link href={header.path} passHref>
                    <a className="nav-link">{header.name}</a>
                  </Link>
                </li>
              ))}

              <li className="nav-item flex-fill me-2 p-1">
                <Link href="/login" passHref>
                  <a className="nav-link">Login</a>
                </Link>
              </li>

              <li className="nav-item flex-fill me-2 p-1">
                <Link href="/signup" passHref>
                  <button className="btn btn-primary">Sign Up</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>{children}</div>
      </header>
    );
  }
  if (isLoading) {
    return (
      <header>
        <div className="bg-dark d-flex justify-content-center">
          <nav className="navbar navbar-dark px-0 px-md-2 top-header">
            <div className="row row-cols-3 row-cols-sm-5 gx-0 m-0 justify-content-center align-items-center w-100">
              {topHeaders.map((header, index) => (
                <div className="col" key={index}>
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
              <Navigation mobile={true} session={session} user={user} />
            </div>
          </nav>
          <NavOffcanvas user={user} isLoading={isLoading} logOut={logOut} />
        </div>

        <div className="bg-white container-fluid px-2 px-xl-5 mt-2">
          <nav className="navbar navbar-light w-100">
            <ul className="navbar-nav flex-row flex-wrap justify-content-evenly w-100 ps-3">
              <li className="nav-item flex-fill me-2 p-1">
                <a
                  role="button"
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCollapse"
                  aria-controls="offcanvasCollapse"
                >
                  <span className="bi bi-justify pe-3"></span> Categories
                </a>
              </li>
              <CategoryOffcanvas navbar={navbar} />

              {subHeaders.map((header) => (
                <li className="nav-item flex-fill me-2 p-1" key={header.name}>
                  <Link href={header.path} passHref>
                    <a className="nav-link">{header.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>{children}</div>
      </header>
    );
  }

  return (
    <header>
      <div className="bg-dark d-flex justify-content-center">
        <nav className="navbar navbar-dark px-0 px-md-2 top-header">
          <div className="row row-cols-3 row-cols-sm-5 gx-0 m-0 justify-content-center align-items-center w-100">
            {topHeaders.map((header, index) => (
              <div className="col" key={index}>
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
            <Navigation mobile={true} session={session} user={data.user} />
          </div>
        </nav>
        <NavOffcanvas user={data.user} logOut={logOut} />
      </div>

      <div className="bg-white container-fluid px-2 px-xl-5 mt-2">
        <nav className="navbar navbar-light w-100">
          <ul className="navbar-nav flex-row flex-wrap justify-content-evenly w-100 ps-3">
            <li className="nav-item flex-fill me-2 p-1">
              <a
                role="button"
                className="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasCollapse"
                aria-controls="offcanvasCollapse"
              >
                <span className="bi bi-justify pe-3"></span> Categories
              </a>
            </li>
            <CategoryOffcanvas navbar={navbar} />

            {subHeaders.map((header) => (
              <li className="nav-item flex-fill me-2 p-1" key={header.name}>
                <Link href={header.path} passHref>
                  <a className="nav-link">{header.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </header>
  );
};

const CategoryOffcanvas = ({ navbar }) => {
  const { data, isLoading, isError } = useUser("categories", "categories");
  if (isError) {
    return (
      <div
        className="offcanvas offcanvas-start nav-offcanvas"
        id="offcanvasCollapse"
        tabIndex="-1"
        aria-labelledby="offcanvasCollapseLabel"
        style={{ zIndex: "2000" }}
      >
        <div className="bg-white rounded-pill offcanvas-close">
          <button
            className="btn-close text-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          className="overflow-hidden w-100 h-100 position-relative"
          style={{ overflowX: "scroll" }}
        >
          <ul className="navbar-nav ps-3 py-3 mainCat" id="mainCat">
            {navbar.map((i, index) => (
              <li className="nav-item" key={index}>
                <h6 className="nav-text">{i["category name"]}</h6>
                <hr />
                <ul className="ps-2">
                  <li>
                    <p>
                      <span>Loading failed !</span>
                    </p>
                  </li>
                </ul>
              </li>
            ))}
          </ul>

          {/* {navbar.map((i) => (
                      <>
                        {i.items.map((x) => (
                          <ul
                            className="subCat navbar-nav navbar-light px-3"
                            id={x.id}
                          >
                            <div className="d-flex w-100 border-bottom">
                              <button
                                type="button"
                                data-main-id={x.id}
                                className="btn p-0 w-100 mt-2"
                                onClick={(e) => backToCat(e)}
                              >
                                <span
                                  className="bi bi-caret-left"
                                  style={{ pointerEvents: "none" }}
                                ></span>{" "}
                                Menu
                              </button>
                            </div>
  
                            {x.items.map((z) => (
                              <li className="nav-item">
                                <a className="nav-link" role="button">
                                  {z}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </>
                    ))} */}
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div
        className="offcanvas offcanvas-start nav-offcanvas"
        id="offcanvasCollapse"
        tabIndex="-1"
        aria-labelledby="offcanvasCollapseLabel"
        style={{ zIndex: "2000" }}
      >
        <div className="bg-white rounded-pill offcanvas-close">
          <button
            className="btn-close text-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          className="overflow-hidden w-100 h-100 position-relative"
          style={{ overflowX: "scroll" }}
        >
          <ul className="navbar-nav ps-3 py-3 mainCat" id="mainCat">
            {navbar.map((i, index) => (
              <li className="nav-item" key={index}>
                <h6 className="nav-text">{i["category name"]}</h6>
                <hr />
                <ul className="ps-2">
                  <li>
                    <p>
                      <span className="spinner-border"></span>
                      <span>Loading...</span>
                    </p>
                  </li>
                </ul>
              </li>
            ))}
          </ul>

          {/* {navbar.map((i) => (
                      <>
                        {i.items.map((x) => (
                          <ul
                            className="subCat navbar-nav navbar-light px-3"
                            id={x.id}
                          >
                            <div className="d-flex w-100 border-bottom">
                              <button
                                type="button"
                                data-main-id={x.id}
                                className="btn p-0 w-100 mt-2"
                                onClick={(e) => backToCat(e)}
                              >
                                <span
                                  className="bi bi-caret-left"
                                  style={{ pointerEvents: "none" }}
                                ></span>{" "}
                                Menu
                              </button>
                            </div>
  
                            {x.items.map((z) => (
                              <li className="nav-item">
                                <a className="nav-link" role="button">
                                  {z}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </>
                    ))} */}
        </div>
      </div>
    );
  }

  return (
    <div
      className="offcanvas offcanvas-start nav-offcanvas"
      id="offcanvasCollapse"
      tabIndex="-1"
      aria-labelledby="offcanvasCollapseLabel"
      style={{ zIndex: "2000" }}
    >
      <div className="bg-white rounded-pill offcanvas-close">
        <button
          className="btn-close text-dark"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div
        className="overflow-hidden w-100 h-100 position-relative"
        style={{ overflowX: "scroll" }}
      >
        <ul className="navbar-nav ps-3 py-3 mainCat" id="mainCat">
          {navbar.map((i, index) => (
            <li className="nav-item" key={index}>
              <h6 className="nav-text">{i["category name"]}</h6>
              <hr />
              <ul className="ps-2">
                {data.categoriesArr?.length > 0 &&
                  data.categoriesArr.map((category, index) => (
                    <Fragment key={index}>
                      <Link
                        passHref
                        href={`/category/${category
                          .toString()
                          .replace(/\s+/g, "")
                          .trim()}`}
                      >
                        <a
                          className="nav-link d-flex justify-content-between"
                          role="button"
                        >
                          <span className="" style={{ pointerEvents: "none" }}>
                            {category.toUpperCase()}
                          </span>
                          <span
                            className="bi bi-chevron-right text-dark "
                            style={{ pointerEvents: "none" }}
                          ></span>
                        </a>
                      </Link>
                    </Fragment>
                  ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* {navbar.map((i) => (
                      <>
                        {i.items.map((x) => (
                          <ul
                            className="subCat navbar-nav navbar-light px-3"
                            id={x.id}
                          >
                            <div className="d-flex w-100 border-bottom">
                              <button
                                type="button"
                                data-main-id={x.id}
                                className="btn p-0 w-100 mt-2"
                                onClick={(e) => backToCat(e)}
                              >
                                <span
                                  className="bi bi-caret-left"
                                  style={{ pointerEvents: "none" }}
                                ></span>{" "}
                                Menu
                              </button>
                            </div>
  
                            {x.items.map((z) => (
                              <li className="nav-item">
                                <a className="nav-link" role="button">
                                  {z}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </>
                    ))} */}
      </div>
    </div>
  );
};

const NavOffcanvas = ({ isLoading, user, logOut }) => {
  if (isLoading) {
    return (
      <div
        className="offcanvas offcanvas-start d-lg-none bg-light"
        tabIndex="-1"
        id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel"
        style={{ zIndex: "2000" }}
      >
        <div className="offcanvas-header border-bottom bg-white justify-content-center">
          <button
            type="button"
            className="btn-close text-reset text-center w-100"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body justify-content-center align-items-center">
          <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className="btn w-100"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </li>
            <hr />
            <div className="row row-cols-2 gx-3 gy-3 my-2 px-3">
              <div className="col">
                <a
                  role="button"
                  className="text-dark"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCollapse"
                  aria-controls="offcanvasCollapse"
                >
                  <div className="d-flex flex-column align-items-center bg-white border p-2">
                    <span className="bi bi-justify"></span>
                    <p> Categories</p>
                  </div>
                </a>
              </div>
              <div className="col">
                <Link
                  href="/notification"
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <a className="text-dark">
                    <div className="d-flex flex-column align-items-center bg-white border p-2">
                      <span className="bi bi-bell"></span>
                      <p>Notification</p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link
                  href="/offers"
                  style={{ textDecoration: "none" }}
                  passHref
                >
                  <a className="text-dark">
                    <div className="d-flex flex-column align-items-center bg-white border p-2">
                      <span className="bi bi-megaphone"></span>
                      <p>My offers</p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link passHref href="/cart" style={{ textDecoration: "none" }}>
                  <a className="text-dark">
                    <div className="d-flex flex-column align-items-center bg-white border p-2">
                      <span className="bi bi-cart4"></span>
                      <p> Cart</p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link
                  href="/message"
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <a className="text-dark">
                    <div className="d-flex flex-column align-items-center bg-white border p-2">
                      <span className="bi bi-chat"></span>
                      <p>My Inbox</p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div
      className="offcanvas offcanvas-start d-lg-none bg-light"
      tabIndex="-1"
      id="offcanvasNav"
      aria-labelledby="offcanvasNavLabel"
      style={{ zIndex: "2000" }}
    >
      <div className="offcanvas-header border-bottom bg-white justify-content-center">
        <button
          type="button"
          className="btn-close text-reset text-center w-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body justify-content-center align-items-center">
        <ul className="navbar-nav justify-content-center me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button
              className="btn w-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              {user && (
                <Link className="nav-link" passHref href="/profile">
                  <a>
                    <div className="row m-0 w-100 bg-white rounded p-2">
                      <div className="col-3 m-0 overflow-hidden">
                        <img
                          src={user.image}
                          className="d-inline rounded-pill"
                          height="55px"
                          width="55px"
                          style={{
                            height: "55px",
                            width: "55px",
                            objectFit: "cover"
                          }}
                          alt={user.name}
                        />
                      </div>
                      <div className="col-9 m-0">
                        <p
                          className=" text-dark text-start"
                          style={{ fontSize: "1rem" }}
                        >
                          {user.name}
                        </p>
                        <p
                          className="text-muted text-start m-0"
                          style={{ fontSize: "1rem" }}
                        >
                          See your profile
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              )}
              {!user && (
                <Link className="nav-link" passHref href="/login">
                  <a className="nav-link">Login</a>
                </Link>
              )}
              {!user && (
                <Link className="nav-link" passHref href="/signup">
                  <a className="nav-link">Create Account</a>
                </Link>
              )}
            </button>
          </li>
          <hr />
          <div className="row row-cols-2 gx-3 gy-3 my-2 px-3">
            <div className="col">
              <a
                role="button"
                className="text-dark"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasCollapse"
                aria-controls="offcanvasCollapse"
              >
                <div className="d-flex flex-column align-items-center bg-white border p-2">
                  <span className="bi bi-justify"></span>
                  <p> Categories</p>
                </div>
              </a>
            </div>
            <div className="col">
              <Link
                href="/notification"
                passHref
                style={{ textDecoration: "none" }}
              >
                <a className="text-dark">
                  <div className="d-flex flex-column align-items-center bg-white border p-2">
                    <span className="bi bi-bell"></span>
                    <p>Notification</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link href="/offers" style={{ textDecoration: "none" }} passHref>
                <a className="text-dark">
                  <div className="d-flex flex-column align-items-center bg-white border p-2">
                    <span className="bi bi-megaphone"></span>
                    <p>My offers</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link passHref href="/cart" style={{ textDecoration: "none" }}>
                <a className="text-dark">
                  <div className="d-flex flex-column align-items-center bg-white border p-2">
                    <span className="bi bi-cart4"></span>
                    <p> Cart</p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col">
              <Link href="/message" passHref style={{ textDecoration: "none" }}>
                <a className="text-dark">
                  <div className="d-flex flex-column align-items-center bg-white border p-2">
                    <span className="bi bi-chat"></span>
                    <p>My Inbox</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          {user && (
            <button
              type="button"
              onClick={() => logOut()}
              className="btn btn-danger w-100 "
            >
              Log Out
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
