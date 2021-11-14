import React, { useEffect, useState, useRef } from "react";
import SingleProduct from "../Product/SingleProduct";
import { useForm } from "react-hook-form";
import API from "../API";
import { useRouter } from "next/router";
import { useUser } from "../GlobalContext/useuser";

const SellerProducts = ({ show, user, datass }) => {
  const Router = useRouter();
  const { username } = Router.query;

  const { data, isLoading, isError } = useUser(
    "product",
    "/seller/product",
    "GET",
    username
  );
  if (isError) {
    return (
      <div className={show ? "d-block" : "d-none"}>
        <AddProductModal user={user} />
        <div className="p-1 p-lg-3">
          {/* filters  */}

          <div className="row m-0 gx-1 gy-3 w-100">
            {user?.username === Router.query.username &&
              user?.type === "marchent" && (
                <div className="col-12">
                  <div className="p-2 d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#addProduct"
                    >
                      <span
                        className="bi bi-plus pe-2"
                        style={{ pointerEvent: "none" }}
                      />
                      Add New Product
                    </button>
                  </div>
                </div>
              )}

            <div className="col-12 col-md-4 col-lg-3">
              <div className="border bg-white rounded">
                <div className="border border-bottom bg-light p-2">
                  <p className="text-dark m-0">All Filters</p>
                </div>
                <div className="p-2">
                  <p className="text-muted">Related Category</p>
                  <ul className="d-flex flex-md-column flex-row flex-wrap list-style-none">
                    <li className="p-2">
                      <a href="">Men's Formal shoes</a>
                    </li>
                    <li className="p-2">
                      <a href="">sandals</a>
                    </li>
                    <li className="p-2">
                      <a href="">Men's Sneakers</a>
                    </li>
                    <li className="p-2">
                      <a href="">Boy's Formal shoes</a>
                    </li>
                  </ul>
                  <hr />
                </div>

                <div className="p-2">
                  <p className="text-muted">Related Category</p>
                  <ul className="d-flex flex-md-column flex-row flex-wrap list-style-none">
                    <li className="p-2">
                      <a href="">Men's Formal shoes</a>
                    </li>
                    <li className="p-2">
                      <a href="">sandals</a>
                    </li>
                    <li className="p-2">
                      <a href="">Men's Sneakers</a>
                    </li>
                    <li className="p-2">
                      <a href="">Boy's Formal shoes</a>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
            </div>

            {/* products  */}

            <div className="col-12 col-md-8 col-lg-9">
              <h5 className="text-muted m-0 bg-light border-top border-start border-end w-100 p-3 ps-2">
                Products on <span className="text-warning">SALE</span>{" "}
              </h5>
              <div className="border rounded bg-white p-1 p-lg-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-3 px-5 px-sm-0 m-0 w-100">
                  <div className="col-12">
                    <div className="vh-50">
                      <p>Products loading failed!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={show ? "d-block" : "d-none"}>
        <AddProductModal user={user} categories={data?.categories} />
        <div className="p-1 p-lg-3">
          {/* filters  */}

          <div className="row m-0 gx-1 gy-3 w-100">
            {user?.username === Router.query.username &&
              user?.type === "marchent" && (
                <div className="col-12">
                  <div className="p-2 d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#addProduct"
                    >
                      <span
                        className="bi bi-plus pe-2"
                        style={{ pointerEvent: "none" }}
                      />
                      Add New Product
                    </button>
                  </div>
                </div>
              )}

            <div className="col-12 col-md-4 col-lg-3">
              <div className="border bg-white rounded">
                <div className="border border-bottom bg-light p-2">
                  <p className="text-dark m-0">All Filters</p>
                </div>
                <div className="p-2">
                  <p className="text-muted">Related Category</p>
                  <ul className="d-flex flex-md-column flex-row flex-wrap list-style-none">
                    <li className="p-2">
                      <a href="">Men's Formal shoes</a>
                    </li>
                    <li className="p-2">
                      <a href="">sandals</a>
                    </li>
                    <li className="p-2">
                      <a href="">Men's Sneakers</a>
                    </li>
                    <li className="p-2">
                      <a href="">Boy's Formal shoes</a>
                    </li>
                  </ul>
                  <hr />
                </div>

                <div className="p-2">
                  <p className="text-muted">Related Category</p>
                  <ul className="d-flex flex-md-column flex-row flex-wrap list-style-none">
                    <li className="p-2">
                      <a href="">Men's Formal shoes</a>
                    </li>
                    <li className="p-2">
                      <a href="">sandals</a>
                    </li>
                    <li className="p-2">
                      <a href="">Men's Sneakers</a>
                    </li>
                    <li className="p-2">
                      <a href="">Boy's Formal shoes</a>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
            </div>

            {/* products  */}

            <div className="col-12 col-md-8 col-lg-9">
              <h5 className="text-muted m-0 bg-light border-top border-start border-end w-100 p-3 ps-2">
                Products on <span className="text-warning">SALE</span>{" "}
              </h5>
              <div className="border rounded bg-white p-1 p-lg-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-3 px-5 px-sm-0 m-0 w-100">
                  <div className="col-12">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={show ? "d-block" : "d-none"}>
      <AddProductModal user={user} />
      <div className="p-1 p-lg-3">
        {/* filters  */}

        <div className="row m-0 gx-1 gy-3 w-100">
          {user?.username === Router.query.username &&
            user?.type === "marchent" && (
              <div className="col-12">
                <div className="p-2 d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addProduct"
                  >
                    <span
                      className="bi bi-plus pe-2"
                      style={{ pointerEvent: "none" }}
                    />
                    Add New Product
                  </button>
                </div>
              </div>
            )}

          <div className="col-12 col-md-4 col-lg-3">
            <div className="border bg-white rounded">
              <div className="border border-bottom bg-light p-2">
                <p className="text-dark m-0">All Filters</p>
              </div>
              <div className="p-2">
                <p className="text-muted">Related Category</p>
                <ul className="d-flex flex-md-column flex-row flex-wrap list-style-none">
                  <li className="p-2">
                    <a href="">Men's Formal shoes</a>
                  </li>
                  <li className="p-2">
                    <a href="">sandals</a>
                  </li>
                  <li className="p-2">
                    <a href="">Men's Sneakers</a>
                  </li>
                  <li className="p-2">
                    <a href="">Boy's Formal shoes</a>
                  </li>
                </ul>
                <hr />
              </div>

              <div className="p-2">
                <p className="text-muted">Related Category</p>
                <ul className="d-flex flex-md-column flex-row flex-wrap list-style-none">
                  <li className="p-2">
                    <a href="">Men's Formal shoes</a>
                  </li>
                  <li className="p-2">
                    <a href="">sandals</a>
                  </li>
                  <li className="p-2">
                    <a href="">Men's Sneakers</a>
                  </li>
                  <li className="p-2">
                    <a href="">Boy's Formal shoes</a>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
          </div>

          {/* products  */}

          <div className="col-12 col-md-8 col-lg-9">
            <h5 className="text-muted m-0 bg-light border-top border-start border-end w-100 p-3 ps-2">
              Products on <span className="text-warning">SALE</span>{" "}
            </h5>
            <div className="border rounded bg-white p-1 p-lg-3">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-3 px-5 px-sm-0 m-0 w-100">
                {data.product.product.length > 0 &&
                  data.product.product.map((product) => (
                    <SingleProduct
                      imageText={product.images[0]}
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      rating={product.stars}
                      price={`$${product.pricing}`}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddProductModal = ({ user, categories }) => {
  const { data, isLoading, isError } = useUser(
    "category",
    "/categories",
    "GET"
  );
  const { register, handleSubmit } = useForm();
  const [finalImage, setFinalImage] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [img, setImg] = useState([]);
  const addProductbtn = useRef();
  const addProductSpinner = useRef();
  const productFormref = useRef();
  const onSubmit = async (data) => {
    try {
      addProductbtn.current.setAttribute("disabled", "true");
      addProductSpinner.current.classList.remove("d-none");
      const {
        name,
        product_information,
        pricing,
        listing_price,
        full_description,
        product_category
      } = data;
      const dataObj = {
        name,
        product_category,
        product_information,
        pricing,
        listing_price,
        full_description,
        images: finalImage
      };
      await API.post("/addproduct", dataObj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.id}`
        }
      });
      productFormref.current.reset();
      setFinalImage([]);
      setImg([]);
      setImgUrl([]);
      addProductSpinner.current.classList.add("d-none");
      addProductbtn.current.removeAttribute("disabled");
    } catch (error) {
      addProductSpinner.current.classList.add("d-none");
      addProductbtn.current.removeAttribute("disabled");
      console.log(error, error.response);
    }
  };

  const getImage = (e) => {
    if (e.target.files.length > 0) {
      const Reader = new FileReader();
      Reader.onload = (e) => {
        setImg((prevImg) => [...prevImg, e.target.result]);
      };
      Reader.readAsDataURL(e.target.files[0]);

      addProductbtn.current.removeAttribute("disabled");
    }
  };

  const handleURL = (e) => {
    const value = e.target.value;
    const pattern = {
      http: /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\/.[-a-zA-Z0-9@:%_\+.~#?&=]{0,256}\.*/g
    };

    if (value.match(pattern.http)) {
      setImgUrl((prevImgUrl) => [...prevImgUrl, e.target.value]);
      addProductbtn.current.removeAttribute("disabled");
    } else {
      addProductbtn.current.setAttribute("disabled", "true");
    }
  };

  useEffect(() => {
    if (imgUrl.length > 0) {
      setFinalImage(imgUrl);
    } else if (img.length > 0) {
      setFinalImage(img);
    }
  }, [img, imgUrl]);

  return (
    <div
      className="modal fade"
      id="addProduct"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="addProductLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Add New Product
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form
              ref={productFormref}
              id="addProductForm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row m-0 w-100 gy-3">
                <div className="col-12">
                  <label className="form-label" htmlFor="productname">
                    Product Name:
                  </label>
                  <input
                    type="text"
                    id="productname"
                    maxLength="256"
                    className="form-control"
                    {...register("name")}
                    placeholder="Product name.."
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="productinfo">
                    Product information:
                  </label>
                  <textarea
                    {...register("product_information")}
                    id="productinfo"
                    cols="30"
                    rows="2"
                    placeholder="Product details..."
                    className="form-control"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="productimage">
                    Product image (More than one allowed):
                  </label>
                  <input
                    type="file"
                    id="productimage"
                    className="form-control"
                    onChange={(e) => getImage(e)}
                    placeholder="Product Image.."
                  />
                  <div className="d-flex justify-content-center align-items-center">
                    <hr className="w-50 me-2" />
                    <span>Or</span>
                    <hr className="ms-2 w-50" />
                  </div>
                  <label htmlFor="producturl" className="form-label">
                    image url :
                  </label>
                  <input
                    type="url"
                    name="producturl"
                    id="producturl"
                    className="form-control"
                    onChange={(e) => handleURL(e)}
                  />
                  <div className="p-3">
                    <div className="row row-cols-2 m-0 gx-2 gy-3 w-100">
                      {imgUrl &&
                        imgUrl.map((i) => (
                          <div className="col" key={i}>
                            <img
                              src={i}
                              alt=""
                              style={{ maxHeight: "250px", maxWidth: "100%" }}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="row row-cols-2 m-0 gx-2 gy-3 w-100">
                      {img &&
                        img.map((i) => (
                          <div className="col" key={i}>
                            <img
                              src={i}
                              alt=""
                              style={{ maxHeight: "250px", maxWidth: "100%" }}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <label className="form-label" htmlFor="pricing">
                    Pricing:
                  </label>
                  <input
                    {...register("pricing")}
                    type="number"
                    id="pricing"
                    placeholder="Product price"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-6">
                  <label className="form-label" htmlFor="listingprice">
                    Listing Price:
                  </label>
                  <input
                    {...register("listing_price")}
                    type="number"
                    id="listingprice"
                    placeholder="Listing price"
                    className="form-control"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="fulldescription">
                    Full description:
                  </label>
                  <textarea
                    {...register("full_description")}
                    type="number"
                    rows="5"
                    cols="30"
                    id="fulldescription"
                    placeholder="Full description of product..."
                    className="form-control"
                  />
                </div>

                <div className="col-12">
                  <div className="p-2">
                    <label className="form-label" htmlFor="productcategory">
                      Product Category
                    </label>
                    <input
                      className="form-control"
                      {...register("product_category")}
                      list="datalistOptions"
                      id="productcategory"
                      placeholder="Search category..."
                      required
                    />
                    <datalist id="datalistOptions">
                      {data?.categoriesArr.length > 0 &&
                        data.categoriesArr.map((category, index) => (
                          <option value={category} key={index} />
                        ))}
                    </datalist>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              ref={addProductbtn}
              form="addProductForm"
              className="btn btn-primary"
            >
              <span
                className="spinner-border spinner-border-sm me-3 d-none"
                ref={addProductSpinner}
                role="status"
                aria-hidden="true"
              />
              Add New Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
