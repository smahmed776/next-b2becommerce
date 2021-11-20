import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import API from "../API";
import Link from "next/link";
import { useUser } from "../GlobalContext/useuser";

const DashboardPage = ({ user }) => {
  const { data: session } = useSession();
  const { data } = useUser("marchent", "/allusers", "GET");
 
  return (
    <div className=" p-0 py-4 p-sm-3 ">
      <div className="row gy-4 m-0 w-100">
        <div className="col-12 col-lg-2 px-0 px-md-5 px-xl-4">
          <div className="border bg-white shadow-sm">
            <div className="col-12 border-top border-start border-end bg-light p-3">
              <p className="m-0">Hi, Admin!</p>
            </div>
            <hr className="m-0" />
            <div className="col-12 border-top border-start border-end bg-light p-3">
              {user && user.type === "marchent" && (
                <Link href={`/${user.username}/home`} className="m-0">
                  Go to store
                </Link>
              )}
            </div>
            <hr className="m-0" />

            <div className="accordion accordion-flush" id="profileaccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="manageprofile-heading">
                  <div className="col-12 bg-white border-bottom shadow-sm p-0">
                    <button
                      className="accordion-button collapsed bg-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#manageprofile-collapse"
                      aria-expanded="false"
                      aria-controls="manageprofile-collapse"
                    >
                      Manage Profile
                    </button>
                  </div>
                </h2>

                <div
                  id="manageprofile-collapse"
                  className="accordion-collapse collapse show"
                  aria-labelledby="manageprofile-heading"
                  data-bs-parent="#profileaccordion"
                >
                  <div className="accordion-body">
                    <div className="row m-0 gy-1 w-100 p-2">
                      <div className="col-12 p-0">
                        <ul className="list-style-none w-100 p-0">
                          <li className="p-2 bg-secondary text-white">
                            My Profile
                          </li>
                          <li className="p-2">Address Book</li>
                          <li className="p-2">My Payment Option</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <div className="col-12 bg-white border-bottom shadow-sm p-0">
                    <button
                      className="accordion-button collapsed bg-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      My Orders
                    </button>
                  </div>
                </h2>

                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#profileaccordion"
                >
                  <div className="accordion-body">
                    <div className="row m-0 gy-1 w-100 p-2">
                      <div className="col-12 p-0">
                        <ul className="list-style-none w-100 p-0">
                          <li className="p-2 bg-secondary text-white">
                            Track Orders
                          </li>
                          <li className="p-2">My Returns</li>
                          <li className="p-2">My Cancellations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="m-0" />
            <div className="col-12 bg-light border-bottom p-3">
              <p className="m-0 text-muted">My Reviews</p>
            </div>
            <div className="col-12 bg-light border-bottom p-3">
              <p className="m-0 text-muted">My Followed Store</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-10 px-0 px-sm-2">
          <div className="border bg-white shadow-sm">
            <div className="border border-bottom bg-light p-3">
              <p className="m-0 text-primary">Merchants</p>
            </div>
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Id</th>
                      <th>Email</th>
                      <th>Username</th>
                      <th>Company Name</th>
                      <th>Phone Number</th>
                      <th>Products</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.getvendor.map((user, index) => (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{user._id}</td>
                          <td>{user.email}</td>
                          <td>{user.username}</td>
                          <td>{user.companyName}</td>
                          <td>{user.phone}</td>
                          <td>{user.profile.home.products.length}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="border bg-white shadow-sm my-3">
            <div className="border border-bottom bg-light p-3">
              <p className="m-0 text-primary">Customers</p>
            </div>
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Id</th>
                      <th>Email</th>
                      <th>Name</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.getcustomer.map((user, index) => (
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{user._id}</td>
                          <td>{user.email}</td>
                          <td>{`${user.name.firstName} ${user.name.lastName}`}</td>
                          <td>{user.phone}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default DashboardPage;
