import React, { useContext } from 'react';
import { Player, BigPlayButton, ControlBar, LoadingSpinner } from 'video-react';
import clothcarousel from '../img/clothcarousel.png'
import Slider from 'react-slick';
import shoewhite from '../img/shoewhite.png'
import shoeblack from '../img/shoeblack.png'
import SingleProduct from '../Product/SingleProduct';



const SellerHomepage = ({ show }) => {
    ;

    return (
        <div className={show ? "d-block" : "d-none"}>
            <div className="container px-1">
                <div className="row row-cols-1 gy-5 m-0 w-100">

                    <div className="col px-0 px-lg-5">
                        <div className="border border-secondary bg-white p-2 p-md-5 rounded">
                            <div className="px-0 px-lg-5">

                                <Player

                                    className="px-0 px-lg-4"
                                    poster={clothcarousel.src}
                                >
                                    <BigPlayButton position="center" />
                                    <LoadingSpinner />
                                    <ControlBar autoHide={true} />
                                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                </Player>
                            </div>

                        </div>
                    </div>


                    <div className="col">
                        <div className="border bg-white rounded p-1 p-sm-5">
                            <Slider
                                slidesToShow={1}
                                slidesToScroll={1}
                                dots
                                autoplay
                            >
                                <img src={clothcarousel.src} alt="" width="100%" style={{ maxHeight: "300px" }} />
                                <img src={clothcarousel.src} alt="" width="100%" style={{ maxHeight: "300px" }} />
                                <img src={clothcarousel.src} alt="" width="100%" style={{ maxHeight: "300px" }} />
                            </Slider>
                        </div>
                    </div>


                    <div className="col p-0">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-3 gx-3 m-0 px-4 px-sm-0 w-100">
                            <SingleProduct imageText={shoeblack.src} />
                            <SingleProduct imageText={shoewhite.src} />
                            <SingleProduct imageText={shoeblack.src} />
                            <SingleProduct imageText={shoewhite.src} />
                            <SingleProduct imageText={shoeblack.src} />

                        </div>
                    </div>

                    <div className="col p-0">
                        <h5 className="my-3 text-muted">Company videos and Photos</h5>
                        <div className="row m-0 gx-4 bg-white p-3 w-100 border">
                            <div className="col-12 col-lg-5 px-0 px-xl-3">
                                <div>
                                    <img src={clothcarousel.src} alt="" style={{ maxHeight: "365px", minHeight: "315px", width: "100%" }} />
                                </div>
                                <div className="my-2">
                                    <img src={clothcarousel.src} alt="" style={{ maxHeight: "305px", width: "100%" }} />
                                </div>
                                <div className="my-2">
                                    <img src={clothcarousel.src} alt="" style={{ maxHeight: "305px", width: "100%" }} />
                                </div>
                            </div>

                            <div className="col-12 col-lg-7">
                                <div className="row row-cols-3 gx-4 gy-2 m-0 w-100 px-0 px-xl-2">
                                    <div className="col">
                                        <div className="border bg-light">
                                            <img src={shoeblack.src} alt="" style={{ maxHeight: "145px", width: "100%" }} />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="border bg-light">
                                            <img src={shoewhite.src} alt="" style={{ maxHeight: "145px", width: "100%" }} />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="border bg-light">
                                            <img src={shoeblack.src} alt="" style={{ maxHeight: "145px", width: "100%" }} />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="border bg-light">
                                            <img src={shoewhite.src} alt="" style={{ maxHeight: "145px", width: "100%" }} />
                                        </div>
                                    </div>
                                    

                                    <div className="col">
                                        <div className="border bg-light">
                                            <img src={shoeblack.src} alt="" style={{ maxHeight: "145px", width: "100%" }} />
                                        </div>
                                    </div>
                                    
                                    <div className="col">
                                        <div className="border bg-light">
                                            <img src={shoewhite.src} alt="" style={{ maxHeight: "145px", width: "100%" }} />
                                        </div>
                                    </div>
                                    

                                </div>

                                <div className="my-3">
                                    <img src={clothcarousel.src} alt="" style={{width: "100%", maxHeight: "345px" , minHeight: "335px"}} />
                                </div>

                                <div className="row row-cols-3 gx-3 my-3 m-0 w-100 px-2">
                                    <div className="col">
                                        <div className="border bg-light">
                                            <img src={shoewhite.src} alt="" style={{ maxHeight: "145px", width: "100%" }}/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="border bg-light">
                                            <img src={shoeblack.src} alt="" style={{ maxHeight: "145px", width: "100%" }}/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="border bg-light">
                                            <img src={shoewhite.src} alt="" style={{ maxHeight: "145px", width: "100%" }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col p-0">
                        <h5 className="my-3 text-muted">Products for you</h5>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-3 gx-3 px-4 m-0 w-100">
                            <SingleProduct imageText={shoeblack.src} />
                            <SingleProduct imageText={shoewhite.src} />
                            <SingleProduct imageText={shoeblack.src} />
                            <SingleProduct imageText={shoewhite.src} />
                            <SingleProduct imageText={shoeblack.src} />
                            <SingleProduct imageText={shoewhite.src} />
                            <SingleProduct imageText={shoeblack.src} />
                            <SingleProduct imageText={shoewhite.src} />
                            <SingleProduct imageText={shoeblack.src} />
                            <SingleProduct imageText={shoewhite.src} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}







export default SellerHomepage
