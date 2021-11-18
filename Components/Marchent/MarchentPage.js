import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import About from "./About";
import SellerProducts from "./SellerProducts";
import SellerHomepage from "./SellerHomepage";
import LiveStreams from "./LiveStrams";

const MarchentPage = ({ user, home, about, product, live, data, isFound }) => {
  const [toShowAbout, setToshowAbout] = useState(about);
  const [toShowHome, setToshowHome] = useState(home);
  const [toShowProduct, setToshowProduct] = useState(product);
  const [toShowLive, setToshowLive] = useState(live);
  const aboutbtn = useRef();
  const productbtn = useRef();
  const livebtn = useRef();
  const homebtn = useRef();
  const history = useRouter();

  useEffect(() => {
    if (toShowHome === true) {
      homebtn.current.setAttribute("disabled", "true");
    } else if (toShowAbout === true) {
      aboutbtn.current.setAttribute("disabled", "true");
    } else if (toShowProduct === true) {
      productbtn.current.setAttribute("disabled", "true");
    } else if (toShowLive === true) {
      livebtn.current.setAttribute("disabled", "true");
    }
  }, []);

  return (
    <main className="px-0 px-sm-5 my-3">
      <div className="row row-cols-1 m-0 gy-3 gy-lg-0 w-100  bg-white">
        <div className="col p-0 mb-5 mb-lg-0">
          <div className="cover position-relative">
            {data && (
              <img
                src={data.coverImage}
                height="235px"
                width="100%"
                alt=""
                className=""
              />
            )}
            <div
              className="w-100 d-flex  flex-column justify-content-center position-absolute"
              style={{ bottom: "-55px" }}
            >
              <div className="d-flex justify-content-center">
                <div
                  className="rounded-pill p-2 bg-white d-flex justify-content-center"
                  style={{
                    height: "120px",
                    width: "120px",
                    overflow: "hidden"
                  }}
                >
                  {data && (
                    <img
                      src={data.image}
                      alt=""
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "50%"
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <span>{data.companyName}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col p-0 mt-5 mt-lg-0 p-sm-2 border border-warning">
          <div className="d-flex flex-column flex-lg-row m-0 gx-5 w-100 align-items-center justify-content-between">
            <div className="col-12  col-lg-5 justify-selt-start profile-stats">
              <div className="d-flex justify-content-evenly p-2 p-lg-0 p-xl-2 pe-0 flex-wrap pe-md-0">
                <div className=" d-flex justify-content-center flex-column p-2 m-0 p-sm-3 p-lg-0 p-xl-3">
                  <p className="text-center  m-0 p-lg-2 p-xl-0">
                    {data?.totalProducts}
                  </p>
                  <p className="text-center  m-0 p-lg-2 p-xl-0">Products</p>
                </div>
                <div className=" d-flex justify-content-center flex-column p-2 m-0 p-sm-3 p-lg-0 p-xl-3">
                  <p className="text-center  m-0 p-lg-2 p-xl-0">
                    {data.followers.length}
                  </p>
                  <p className="text-center  m-0 p-lg-2 p-xl-0">Followers</p>
                </div>
                <div className=" d-flex justify-content-center flex-column p-2 m-0 p-sm-3 p-lg-0 p-xl-3">
                  <p className="text-center  m-0 p-lg-2 p-xl-0">
                    {data?.level}
                  </p>
                  <p className="text-center  m-0 p-lg-2 p-xl-0">Level</p>
                </div>
                <div className=" d-flex justify-content-center flex-column p-2 m-0 p-sm-3 p-lg-0 p-xl-3">
                  <p className="text-center  m-0 p-lg-2 p-xl-0">4.5</p>
                  <p className="text-center  m-0 p-lg-2 p-xl-0">reviews</p>
                </div>
                <div className=" d-flex justify-content-center flex-column p-2 m-0 p-sm-3 p-lg-0 p-xl-3">
                  <p className="text-center bi bi-flag m-0  p-lg-2 p-xl-0"></p>
                  <p className="text-center  m-0 p-lg-2 p-xl-0" title={data.country}>
                    {data.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-5 justify-self-end">
              <div className="d-flex justify-content-evenly p-2 ps-0 ps-sm-5">
                <div className="rounded bg-white border shadow-sm p-3">
                  <span className="bi bi-geo-alt-fill text-danger"></span>
                </div>
                <div className="rounded bg-white border shadow-sm p-3">
                  <span className="bi bi-facebook text-primary"></span>
                </div>
                <div className="rounded bg-white border shadow-sm p-3">
                  <span className="bi bi-whatsapp text-success"></span>
                </div>
                <div className="rounded bg-white border shadow-sm p-3">
                  <span className="bi bi-chat text-warning"></span>
                </div>
                <div className="rounded bg-white border shadow-sm p-3">
                  <span className="bi bi-flag"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 g-0 bg-white my-4 border m-0 w-100 p-0">
        <div className="col">
          <div className=" d-flex flex-md-row flex-column justify-content-between pt-2 px-1 px-lg-4">
            <ul className="col-12 col-md-8 col-lg-7 col-xl-5 d-flex flex-wrap justify-content-evenly navbar-nav flex-row">
              <li
                className={
                  toShowAbout
                    ? "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0 border-bottom border-primary"
                    : "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0"
                }
              >
                <Link passHref href={`/${history.query.username}/about`}>
                  <a
                    ref={aboutbtn}
                    data-bs-text="about"
                    className="btn text-muted"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li
                className={
                  toShowProduct
                    ? "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0 border-bottom border-primary"
                    : "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0"
                }
              >
                <Link passHref href={`/${history.query.username}/product`}>
                  <a
                    ref={productbtn}
                    data-bs-text="product"
                    className="btn text-muted"
                  >
                    Product
                  </a>
                </Link>
              </li>
              <li
                className={
                  toShowHome
                    ? "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0 border-bottom border-primary"
                    : "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0"
                }
              >
                <Link passHref href={`/${history.query.username}/home`}>
                  <a
                    ref={homebtn}
                    data-bs-text="home"
                    className="btn text-muted"
                  >
                    Home page
                  </a>
                </Link>
              </li>
              <li
                className={
                  toShowLive
                    ? "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0 border-bottom border-primary"
                    : "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0"
                }
              >
                <Link passHref href={`/${history.query.username}/live`}>
                  <a
                    ref={livebtn}
                    data-bs-text="live"
                    className="btn text-muted"
                  >
                    Live Stream
                  </a>
                </Link>
              </li>
              <li className="nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0">
                <button className=" btn btn-primary">Chat now</button>
              </li>
            </ul>

            <div className="col-8 col-md-3 mx-auto mx-md-0 my-3 my-sm-2 my-md-0">
              <input type="search" className="form-control" />
            </div>
          </div>
        </div>
      </div>

      {/* Components  */}

     {toShowAbout && <About show={toShowAbout} user={user} data={data} />}
      {toShowProduct && <SellerProducts
        show={toShowProduct}
        user={user}
        datass={data}
        isFound={isFound}
      />}
      {toShowHome && <SellerHomepage show={toShowHome} user={user} data={data} />}
      {toShowLive && <LiveStreams show={toShowLive} user={user} data={data} />}
    </main>
  );
};

export default MarchentPage;
