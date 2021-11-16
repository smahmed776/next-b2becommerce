import React, { useContext } from "react";
import Slider from "react-slick";
import { RatingContext } from "../GlobalContext/RatingContext";
import { useUser } from "../GlobalContext/useuser";
import Link from "next/link";

const CompanyDetails = ({ product }) => {
  const { data, isError } = useUser(
    "username",
    "/username",
    "GET",
    product?.seller_id
  );
  const { Rating } = useContext(RatingContext);

  const img = [
    "https://m.media-amazon.com/images/I/41GhMomXvqL.jpg",
    "https://m.media-amazon.com/images/I/51mPvLjZOKL.jpg",
    "https://m.media-amazon.com/images/I/51dfQ7+-aVL.jpg",
    "https://m.media-amazon.com/images/I/51LttGIz-KL.jpg"
  ];

  const PrevButton = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow carousel-control-prev product-control-prev"
        type="button"
        onClick={onClick}
      >
        <span
          className="bi bi-chevron-left text-dark"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
    );
  };
  const NextButton = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow carousel-control-next product-control-next"
        type="button"
        onClick={onClick}
      >
        <span
          className="bi bi-chevron-right text-dark"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    );
  };

  return (
    <div className="row m-0 gx-1 gx-md-3 my-5 w-100">
      <div className="col-12 col-sm-7 ps-0">
        <div className="border rounded bg-white">
          <div
            className="d-flex justify-content-start"
            style={{ marginTop: "-1.5rem" }}
          >
            <button className="btn btn-secondary text-light cdetail-h6 p-2 ms-2">
              Product Details
            </button>
            <button className="btn btn-primary text-white cdetail-h6 p-2 ms-2">
              Company Details
            </button>
          </div>

          {/* product details  */}

          <div className="row row-cols-1 gy-2 w-100 m-0">
            <div className="col d-flex justify-content-between p-0">
              <h6 className="text-muted p-3 d-inline col-8 col-md-9">
                Product details of {product && product.name}
              </h6>
              {data && (
                <Link href={`/${data.username}/product`}>
                  <a
                    className="text-center d-flex justify-content-center align-items-center col-4 col-md-3 bg-warning text-white cdetail-btn"
                    style={{
                      height: "38px",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0"
                    }}
                  >
                    Go To Store
                  </a>
                </Link>
              )}
            </div>
            <div className="col px-3">
              <h6>Product Information: </h6>
              <p>{product && product.product_information}</p>
            </div>
            <div className="col px-3 mt-3">
              <h6>Product Details: </h6>
              <p>{product && product.full_description}</p>
            </div>
          </div>

          {/* company details  */}

          <div className="row row-cols-1 gy-2 w-100 m-0 d-none">
            <div className="col d-flex justify-content-between p-0">
              <h6 className="text-muted p-3 d-inline">Company Album</h6>
              <button
                className="btn h-75 btn-warning text-white cdetail-btn"
                style={{
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0"
                }}
              >
                Go To Store
              </button>
            </div>

            <div className="col px-3">
              <Slider
                slidesToShow={4}
                slidesToScroll={1}
                className="px-0 px-sm-3"
                prevArrow={<PrevButton />}
                nextArrow={<NextButton />}
              >
                <div className=" p-1">
                  <div className="border rounded shadow-sm p-1">
                    <img src={img[0]} alt="" height="75" width="100%" />
                  </div>
                </div>
                <div className=" p-1">
                  <div className="border rounded shadow-sm p-1">
                    <img src={img[1]} alt="" height="75" width="100%" />
                  </div>
                </div>
                <div className=" p-1">
                  <div className="border rounded shadow-sm p-1">
                    <img src={img[2]} alt="" height="75" width="100%" />
                  </div>
                </div>
                <div className=" p-1">
                  <div className="border rounded shadow-sm p-1">
                    <img src={img[3]} alt="" height="75" width="100%" />
                  </div>
                </div>
                <div className=" p-1">
                  <div className="border rounded shadow-sm p-1">
                    <img src={img[0]} alt="" height="75" width="100%" />
                  </div>
                </div>
                <div className=" p-1">
                  <div className="border rounded shadow-sm p-1">
                    <img src={img[1]} alt="" height="75" width="100%" />
                  </div>
                </div>
              </Slider>
            </div>

            <div className="col">
              <h6 className="text-muted p-2 my-3">Company Details</h6>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th className="bg-light">Conmapny Name</th>
                      <td>Arian Tech Ltd.</td>
                      <th className="bg-light">Conmapny Name</th>
                      <td>Arian Tech Ltd.</td>
                    </tr>
                    <tr>
                      <th className="bg-light">Bussiness Type</th>
                      <td>Manufacturer , Trade</td>
                      <th className="bg-light">Bussiness Type</th>
                      <td>Manufacturer , Trade</td>
                    </tr>
                    <tr>
                      <th className="bg-light">Top employees</th>
                      <td>Usd $1200 - $4000 </td>
                      <th className="bg-light">Top employees</th>
                      <td>Usd $1200 - $4000 </td>
                    </tr>
                    <tr>
                      <th className="bg-light">Main Products</th>
                      <td>Sports, Electronics.</td>
                      <th className="bg-light">Main Products</th>
                      <td>Sports, Electronics.</td>
                    </tr>
                    <tr>
                      <th className="bg-light">Total Annual revennue</th>
                      <td>USD $1.5 million </td>
                      <th className="bg-light">Total Annual revennue</th>
                      <td>USD $1.5 million </td>
                    </tr>
                    <tr>
                      <th className="bg-light">Year Established</th>
                      <td>Estd. 2012</td>
                      <th className="bg-light">Year Established</th>
                      <td>Estd. 2012</td>
                    </tr>
                    <tr>
                      <th className="bg-light">Conmapny Name</th>
                      <td>Arian Tech Ltd.</td>
                      <th className="bg-light">Conmapny Name</th>
                      <td>Arian Tech Ltd.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Review  */}

        <div className="border rounded bg-white mt-4">
          <h6 className="bg-light text-muted p-2 mb-2">Buyer Reveiw</h6>
          <div className="row justify-content-start w-100 m-0 py-5">
            <div className="col-12 col-md-6 p-3">
              <div className=" px-5 p-md-3">
                <h3>
                  4.4 <small className="text-muted">/5</small>
                </h3>
                <div className="my-2" style={{ fontSize: "1.5rem" }}>
                  {Rating(4)}
                </div>
                <small className="text-muted">90 reveiws</small>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center">
              <div
                className="row row-cols-1 m-0 gy-3 w-100"
                style={{ fontSize: ".8rem" }}
              >
                <div className="col d-flex justify-content-start">
                  <div className="bg-white pe-3">
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                  </div>
                  <div className="progress w-50">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "94%" }}
                      aria-valuenow="94"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-start">
                  <div className="bg-white pe-3">
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                  </div>
                  <div className="progress w-50">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      15
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-start">
                  <div className="bg-white pe-3">
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                  </div>
                  <div className="progress w-50">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      3
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-start">
                  <div className="bg-white pe-3">
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                  </div>
                  <div className="progress w-50">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "3%" }}
                      aria-valuenow="3"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      1
                    </div>
                  </div>
                </div>
                <div className="col d-flex justify-content-start">
                  <div className="bg-white pe-3">
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                    <span className="bi bi-star-fill text-muted"></span>
                  </div>
                  <div className="progress w-50">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="m-0" />
          <div className=" p-2 d-flex justify-content-between">
            <p className="text-muted">Product Reveiws</p>
            <p className="text-muted">Filter</p>
          </div>
          <hr className="m-0" />
          <div className="row row-cols-1 m-0 w-100 gy-2 p-3">
            <div className="col border bg-light">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore repellendus ipsam eius ratione asperiores laboriosam
                doloremque eveniet harum? Ex dolorum quod at quis quidem
                mollitia incidunt quo. Molestiae, modi ipsum?
              </p>
            </div>
            <div className="col border bg-light">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore repellendus ipsam eius ratione asperiores laboriosam
                doloremque eveniet harum? Ex dolorum quod at quis quidem
                mollitia incidunt quo. Molestiae, modi ipsum?
              </p>
            </div>
          </div>
        </div>

        <div className="border rounded bg-white mt-4 mb-2 pb-3">
          <h6 className="bg-light text-muted p-2 mb-2">Questions & Answers</h6>
          <div className="row row-cols-1 gy-3 m-0 w-100 px-3">
            <div className="col py-3 px-2 px-xl-5">
              <div className="row m-0 g-0 gy-2 gy-sm-0 justify-content-center">
                <div className="col-12 col-sm-6 col-md-8 ">
                  <input
                    type="text"
                    className="form-control d-block d-md-inline"
                    style={{
                      borderBottomRightRadius: "0",
                      borderTopRightRadius: "0"
                    }}
                  />
                </div>
                <div className="col-12 col-sm-6 col-md-4 px-5 px-sm-0">
                  <button
                    className="btn btn-primary"
                    style={{ borderRadius: "0" }}
                  >
                    Ask Question
                  </button>
                </div>
              </div>
            </div>

            <div className="col border bg-light">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, quaerat eius provident optio, nisi at quae sit modi
                commodi voluptatem molestiae, adipisci perspiciatis doloribus
                excepturi tempora doloremque libero eligendi quasi?
              </p>
            </div>
            <div className="col border bg-light">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, quaerat eius provident optio, nisi at quae sit modi
                commodi voluptatem molestiae, adipisci perspiciatis doloribus
                excepturi tempora doloremque libero eligendi quasi?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second column */}

      <div className="col-12 col-sm-5 pe-0">
        <div className="rounded border bg-white p-2 p-sm-0 p-md-3">
          <h6 className="text-muted text-center"> From the same store</h6>
          <div className="row row-cols-1 row-cols-lg-2 gy-3 m-0 w-100">
            <div className="col">
              <div className="border shadow p-2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, a tempore magnam cum numquam quas perferendis
                  repellat hic dolo res ipsam tenetur quibusdam fugit sint
                  repellendus? Accusamus unde animi quos commodi.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="border shadow p-2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, a tempore magnam cum numquam quas perferendis
                  repellat hic dolo res ipsam tenetur quibusdam fugit sint
                  repellendus? Accusamus unde animi quos commodi.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="border shadow p-2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, a tempore magnam cum numquam quas perferendis
                  repellat hic dolo res ipsam tenetur quibusdam fugit sint
                  repellendus? Accusamus unde animi quos commodi.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="border shadow p-2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, a tempore magnam cum numquam quas perferendis
                  repellat hic dolo res ipsam tenetur quibusdam fugit sint
                  repellendus? Accusamus unde animi quos commodi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
