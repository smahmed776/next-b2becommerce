import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import API from "../API";

const ProfilePage = ({ user }) => {
  const { data: session } = useSession();

  return (
    <div className=" p-0 py-4 p-sm-5 ">
      <div className="row gy-4 m-0 w-100">
        <div className="col-12 col-lg-3 px-0 px-md-5 px-xl-4">
          <div className="border bg-white shadow-sm">
            <div className="col-12 border-top border-start border-end bg-light p-3">
              {session && <p className="m-0">Hi, {session.user.name}</p>}
              {user && <p className="m-0">Hi, {user.name}</p>}
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

        <div className="col-12 col-lg-9 px-0 px-sm-2">
          <div className="border bg-white shadow-sm">
            <div className="border border-bottom bg-light p-3">
              <p className="m-0 text-primary">My Profile</p>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center p-2">
              <div
                className="rounded-pill p-2 bg-light position-relative"
                style={{ height: "135px", width: "135px" }}
              >
                {user && (
                  <img
                    src={user.image}
                    alt={user.name}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "50%",
                      objectFit: "cover"
                    }}
                  />
                )}
                <div
                  className="position-absolute d-flex justify-content-end"
                  style={{ bottom: "0", width: "110px", zIndex: "100" }}
                >
                  <button
                    type="button"
                    className="btn btn-secondary bi bi-camera rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#changeProfile"
                  ></button>
                </div>
              </div>
              <ProfileModal />
            </div>
            <form action="">
              <div className="row row-cols-2 row-cols-sm-3 gx-2 gx-sm-3 m-0 gy-3 w-100 pb-3">
                <div className="col">
                  <div className="d-flex flex-column justify-content-center p-3 bg-light">
                    <div className="d-flex justify-content-between py-2">
                      <label className="form-label" htmlFor="name">
                        Full Name
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control ps-2"
                      disabled
                      name="name"
                      placeholder={session ? session.user.name : user?.name}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column justify-content-center p-3 bg-light">
                    <div className="d-flex justify-content-between py-2">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <a className="text-primary">Edit</a>
                    </div>
                    <input
                      type="text"
                      className="form-control ps-2"
                      disabled
                      name="email"
                      placeholder={session ? session.user.email : user?.email}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column justify-content-center p-3 bg-light">
                    <div className="d-flex justify-content-between py-2">
                      <label className="form-label" htmlFor="phone">
                        Phone Number
                      </label>
                      <a className="text-primary">Edit</a>
                    </div>
                    <input
                      type="number"
                      className="form-control ps-2"
                      disabled
                      name="phone"
                      placeholder={user ? user.phone ? user.phone : "Add a number" : "+01XXXXXXXXXX"}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column justify-content-center p-3 bg-light">
                    <div className="d-flex justify-content-between py-2">
                      <label className="form-label" htmlFor="birthday">
                        Birth Day
                      </label>
                      <a className="text-primary">Edit</a>
                    </div>
                    <input
                      type="date"
                      className="form-control ps-2"
                      disabled
                      name="birthday"
                      placeholder="05/01/2020"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column justify-content-center p-3 bg-light">
                    <div className="d-flex justify-content-between py-2">
                      <label className="form-label" htmlFor="gender">
                        Gender
                      </label>
                      <a className="text-primary">Edit</a>
                    </div>
                    <input
                      type="text"
                      className="form-control ps-2"
                      disabled
                      name="gender"
                      placeholder="Male"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4 p-4 ps-3 ">
                <button className="btn btn-primary w-100" disabled>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileModal = () => {
  const [finalImage, setFinalImage] = useState("");
  const [imgUrl, setImgUrl] = useState('');
  const [img, setImg] = useState("");
  const chngProfilebtn = useRef();
  const setProfSpinner = useRef();
  const getImage = (e) => {
    if (e.target.files.length > 0) {
      const Reader = new FileReader();
      Reader.onload = (e) => {
        setImg(e.target.result);
      };
      Reader.readAsDataURL(e.target.files[0]);

      chngProfilebtn.current.removeAttribute("disabled");
    }
  };

  const handleURL = (e) => {
    const value = e.target.value;
    const pattern = {
      http: /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\/.[-a-zA-Z0-9@:%_\+.~#?&=]{0,256}\.*/g
    };

    if (value.match(pattern.http)) {
      setImgUrl(value)
      chngProfilebtn.current.removeAttribute("disabled");
    } else {
      chngProfilebtn.current.setAttribute("disabled", "true");
    }
  };

  const setProfilePic = async (e) => {
    e.preventDefault();
    try {
      chngProfilebtn.current.setAttribute("disabled", "true");
      setProfSpinner.current.classList.remove("d-none");
      if (!finalImage ) return;
      
      const body = {
        image: finalImage,
      };
      const option = {
        headers: {
          "Content-Type": "application/json"
        },
      };
      await API.put("/updateuser", body, option);
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(imgUrl){
      setFinalImage(imgUrl)
    } else if (img) {
      setFinalImage(img)
    }
  }, [img, imgUrl])
  return (
    <div
      className="modal fade"
      id="changeProfile"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="changeProfileLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Change your profile picture
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              action=""
              id="changeProfilePic"
              onSubmit={(e) => setProfilePic(e)}
            >
              <input
                type="file"
                className="form-control"
                onChange={(e) => getImage(e)}
                placeholder="Change Profile Picture"
              />
            </form>
            <div className="p-3">
              <img
                src={img}
                alt=""
                style={{ maxHeight: "250px", maxWidth: "100%" }}
              />
            </div>
            <div className="p-3">
              <p className="p-1">Image URL :</p>
              <input
                type="url"
                placeholder="www.example.com/profile.jpg  or  example.com/pic.jpg"
                className="form-control"
                onKeyUp={(e) => handleURL(e)}
                form="changeProfilePic"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              ref={chngProfilebtn}
              form="changeProfilePic"
              disabled
              className="btn btn-primary"
            >
              <span
                className="spinner-border spinner-border-sm me-3 d-none"
                ref={setProfSpinner}
                role="status"
                aria-hidden="true"
              ></span>
              Change Profile Picture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
