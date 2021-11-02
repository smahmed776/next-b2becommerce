import React from 'react'
import HeroCarousel from '../../Carousel/HeroCarousel'


const Hero = () => {
    return (
        <>
            <div className="row mt-2 bg-white main-hero p-3 p-sm-0 gy-5 gy-sm-3" >
                <div className="d-none d-lg-block col-lg-1 bg-primary m-0 h-100"></div>


                <HeroCarousel />


                <div className="col-12 col-sm-6 col-lg-5 p-sm-3 p-xl-5 h-100">
                    <div className="row justify-content-center gy-3">
                        <div className="col-12">
                            <h4 className="text-primary text-center">One Request, Multiple Quotes</h4>
                            <p className="text-center text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit beatae animi nisi dolore,
                                dolor rerum voluptate omnis dolorum inventore illo, atque delectus
                                eum esse quidem voluptatum cupiditate incidunt distinctio iure?</p>
                        </div>
                        <div className="col-12">
                            <input type="text" className="form-control bg-light" placeholder="What are you looking for..." style={{ borderRadius: "1.25rem" }} />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control bg-light" placeholder="Quantity" style={{ borderRadius: "1.25rem" }} />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control bg-light" placeholder="Piece/Pieces" style={{ borderRadius: "1.25rem" }} />

                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-primary rounded-pill w-50">Request Quote</button>
                        </div>
                    </div>
                </div>


            </div>


            <div className="row">

                <div className="col-12 mt-2 p-2">
                    <div className="d-flex justify-content-around flex-wrap w-100">


                        <div className="rounded bg-white p-3 border my-2">
                            <span className="bi bi-megaphone pe-2"></span> <span>ImponExpo Product</span>
                        </div>
                        <div className="rounded bg-white p-3 border my-2">
                            <span className="bi bi-megaphone pe-2"></span> <span>ImponExpo Product</span>

                        </div>



                        <div className="rounded bg-white p-3 border my-2">
                            <span className="bi bi-megaphone pe-2"></span> <span>ImponExpo Product</span>

                        </div>
                        <div className="rounded bg-white p-3 border my-2">
                            <span className="bi bi-megaphone pe-2"></span> <span>ImponExpo Product</span>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
