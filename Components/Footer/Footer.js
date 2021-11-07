import React from 'react'
import { FooterLinks } from '../dummydata/dummydata'
import weaccept from '../img/weaccept.png'
import playstore from '../img/playstore.jpg'
import qrcode from '../img/qrcode.png'

const Footer = () => {
    return (
        <footer className="bg-white border-top mt-2">
            <div className="bg-primary">

                <div className="container d-flex flex-column justify-content-center align-items-center py-2 px-4">


                    <div className="row row-cols-1 gy-3 justify-content-center align-items-center px-0 px-sm-5 my-4">
                        <div className="col d-flex justify-content-center pt-4">
                            <p className="text-light">
                                Yes! send me exclusive offers, unique gift ideas, personalized tips for shopping and selling on imponexpo
                            </p>
                        </div>
                        <form action="#">
                            <div className="col d-flex justify-content-center align-items-center px-0 mb-4 bg-white overflow-hidden subscribeInp" style={{ borderRadius: "2rem", height: "40px" }}>
                                <input type="email" className="form-control rounded footer-input input-reset"  required />
                                <button type="submit" className="btn btn-primary" >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        <hr className="mt-3 text-white" />
                    </div>


                    <div className="container mt-3 pt-2">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 gy-3">
                            {FooterLinks.map((i, index) =>
                                <div className="col" key={index}>
                                    <h5 className="text-light">{i.name}</h5>
                                    {i.sub.map(i =>
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a href="/" className="nav-link text-light">
                                                    {i}
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center py-5 align-items-center gx-5" >
                    <div className="col-12 col-sm-6 col-md-4">
                        <p className="text-primary">We Accept:</p>
                        <img src={weaccept.src} alt="" height="75px" width="100%" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                        <p className="text-primary">
                            Follow us on:
                        </p>
                        <div className="d-flex justify-content-evenly text-primary ">
                            <span className="bi bi-facebook"></span>
                            <span className="bi bi-youtube"></span>
                            <span className="bi bi-instagram"></span>
                            <span className="bi bi-skype"></span>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                        <p className="text-primary">Scan:</p>
                        <img src={qrcode.src} alt="" height="75px" width="100%" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                        <p className="text-primary">Download Our App:</p>
                        <img src={playstore.src} alt="" height="75px" width="100%" />
                    </div>
                    <div className="col-12 d-flex justify-content-center px-4 pt-5 mt-3 pb-1">
                        <p>1999-2021 All rights resereved by ImponExpo</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
