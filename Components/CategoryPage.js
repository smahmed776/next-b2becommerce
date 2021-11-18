import React from "react";
import SingleProduct from "./Product/SingleProduct";

const CategoryPage = ({ data }) => {
  return (
    <div className="p-1 p-lg-3">
      {/* filters  */}

      <div className="row m-0 gx-1 gy-3 w-100">

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
            Products from <span className="text-warning">{data[0].product_category}</span>{" "}
          </h5>
          <div className="border rounded bg-white p-1 p-lg-3">
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-3 px-5 px-sm-0 m-0 w-100">
              {
                data.map((product) => (
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
  );
};

export default CategoryPage;
