import React from 'react'
import shoeblack from '../img/shoeblack.png'

const CartPage = () => {
    return (
        <div className=" p-0 py-4 p-sm-5 ">
            <div className="row m-0 w-100">
                <div className="col-12 col-lg-8">
                    <div className="border bg-white shadow-sm">
                        <div className="d-flex justify-content-between p-2 px-3">
                            <p className="text-muted m-0">Item</p>
                            <p className="text-muted m-0">Quantity</p>
                            <p className="text-muted m-0">Price</p>
                        </div>
                    </div>

                    <div className="border bg-white my-3 shadow-sm">
                        <div className="border border-bottom bg-light p-2">
                            <p className="m-0 text-dark">Package 1 of 1</p>
                        </div>
                        <div className="row m-0 w-100 gy-3 pb-3">
                            <div className="col-10 col-sm-6 col-lg-4">
                                <div className="border border-primary p-3 bg-light">
                                    <p className="text-dark m-0">$5</p>
                                    <p className="text-muted m-0">Home Delivery</p>
                                    <p className="text-muted m-0">Estimated Arrival 20-25 sep</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex flex-column flex-sm-row justify-content-between p-2">
                                    <div className="d-flex justify-content-center col-10 col-sm-6 col-md-4">
                                        <img src={shoeblack.src} alt="" style={{ height: '65px', width: "65px" }} />
                                        <div className="ps-2">

                                            <p className="m-0">Nike Black Shoe</p>
                                            <small className="text-muted">Nike Black Shoe Nike Black ShoeNike Black Shoe</small>
                                        </div>
                                    </div>

                                    <div className="p-2">
                                        <p className="text-center">Qnt 1</p>
                                    </div>

                                    <div className="p-2">
                                        <p className="text-center">$215</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-12 col-lg-4 px-0 px-md-5 px-xl-4">
                    <div className="border bg-white shadow-sm">
                        <div className="row m-0 gy-1 w-100 p-2">


                            <div className="col-12">
                                <p className="m-0">Shipping Address</p>
                            </div>


                            <div className="col-10">
                                <small className="text-muted m-0">

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Natus, vero libero
                                    exercitationem ipsa nemo itaque, vel excepturi asperiores
                                    et earum aliquam nostrum deserunt incidunt
                                    repellat labore nulla aspernatur iure laborum.
                                </small>
                            </div>
                            <div className="col-2 d-flex align-items-center">
                                <p className="text-primary m-0">Edit</p>
                            </div>

                            <hr />

                            <div className="col-12">
                                <p className="text-muted">
                                    <span className="bi bi-telephone pe-2"></span>
                                    <span className=" text-dark ps-3">+8801245668478</span>
                                </p>
                            </div>

                            <hr />

                            <div className="col-12">
                                <p className="text-muted">
                                    <span className="bi bi-envelope-fill pe-3"></span>
                                    <span className="text-dark ps-3">SomeOne@example.com</span>
                                </p>
                            </div>

                            <hr />

                            <div className="col-12">
                                <p className="text-dark">Order Summery</p>
                                <div className="d-flex justify-content-between p-2">
                                    <p className="text-muted m-0">Black Shoe</p>
                                    <p className="text-muted m-0">$215</p>
                                </div>
                                <div className="d-flex justify-content-between p-2">
                                    <p className="text-muted m-0">Shipping Fee</p>
                                    <p className="text-muted m-0">$5</p>
                                </div>
                            </div>

                            <hr />

                            <div className="col-12">
                                <div className="d-flex justify-content-between p-2 text-muted">
                                    <p className="m-0">Total</p>
                                    <p className="m-0">$220</p>
                                </div>
                            </div>

                            <hr />

                            <div className="col-12">
                                <div className="p-1 pb-2">

                                    <button className="btn btn-primary w-100">Procced to Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
