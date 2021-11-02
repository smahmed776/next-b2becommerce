import React from 'react'




const ProfilePage = () => {
    return (
        <div className=" p-0 py-4 p-sm-5 ">
            <div className="row gy-4 m-0 w-100">

                <div className="col-12 col-lg-3 px-0 px-md-5 px-xl-4">

                    <div className="border bg-white shadow-sm">
                        <div className="col-12 border-top border-start border-end bg-light p-3">
                            <p className="m-0">Hi, User</p>
                        </div>
                        <hr className="m-0" />


                        <div className="accordion accordion-flush" id="profileaccordion">

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="manageprofile-heading">
                                    <div className="col-12 bg-white border-bottom shadow-sm p-0">
                                        <button className="accordion-button collapsed bg-white" 
                                        type="button"
                                         data-bs-toggle="collapse" 
                                         data-bs-target="#manageprofile-collapse" 
                                         aria-expanded="false" 
                                         aria-controls="manageprofile-collapse">
                                            Manage Profile
                                        </button>
                                    </div>
                                </h2>


                                <div id="manageprofile-collapse" className="accordion-collapse collapse show" aria-labelledby="manageprofile-heading" data-bs-parent="#profileaccordion">
                                    <div className="accordion-body">
                                        <div className="row m-0 gy-1 w-100 p-2">

                                            <div className="col-12 p-0">
                                                <ul className="list-style-none w-100 p-0">
                                                    <li className="p-2 bg-secondary text-white">My Profile</li>
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
                                        <button className="accordion-button collapsed bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            My Orders
                                        </button>
                                    </div>
                                </h2>


                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#profileaccordion">
                                    <div className="accordion-body">
                                        <div className="row m-0 gy-1 w-100 p-2">

                                            <div className="col-12 p-0">
                                                <ul className="list-style-none w-100 p-0">
                                                    <li className="p-2 bg-secondary text-white">Track Orders</li>
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
                        <form action="">
                            <div className="row row-cols-2 row-cols-sm-3 gx-2 gx-sm-3 m-0 gy-3 w-100 pb-3">
                                <div className="col">
                                    <div className="d-flex flex-column justify-content-center p-3 bg-light">
                                        <div className="d-flex justify-content-between py-2">
                                            <label className="form-label" htmlFor="name">Full Name</label>
                                        </div>
                                        <input type="text" className="form-control ps-2" disabled name="name" placeholder="User" />

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column justify-content-center p-3 bg-light">
                                        <div className="d-flex justify-content-between py-2">
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <a className="text-primary">Edit</a>
                                        </div>
                                        <input type="text" className="form-control ps-2" disabled name="email" placeholder="Someone@example.com" />

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column justify-content-center p-3 bg-light">
                                        <div className="d-flex justify-content-between py-2">
                                            <label className="form-label" htmlFor="phone">Phone Number</label>
                                            <a className="text-primary">Edit</a>
                                        </div>
                                        <input type="number" className="form-control ps-2" disabled name="phone" placeholder="+4401245002451" />

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column justify-content-center p-3 bg-light">
                                        <div className="d-flex justify-content-between py-2">
                                            <label className="form-label" htmlFor="birthday">Birth Day</label>
                                            <a className="text-primary">Edit</a>
                                        </div>
                                        <input type="date" className="form-control ps-2" disabled name="birthday" placeholder="05/01/2020" />

                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column justify-content-center p-3 bg-light">
                                        <div className="d-flex justify-content-between py-2">
                                            <label className="form-label" htmlFor="gender">Gender</label>
                                            <a className="text-primary">Edit</a>
                                        </div>
                                        <input type="text" className="form-control ps-2" disabled name="gender" placeholder="Male" />

                                    </div>
                                </div>

                            </div>
                            <div className="col-6 col-sm-4 p-4 ps-3 ">
                                <button className="btn btn-primary w-100" disabled>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default ProfilePage
