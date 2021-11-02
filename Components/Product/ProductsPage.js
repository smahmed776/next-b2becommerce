import React, { useContext } from 'react';
import Slider from 'react-slick';
import { RatingContext } from '../GlobalContext/RatingContext';
import CompanyDetails from './CompanyDetails';

const ProductsPage = ({ product }) => {

    const { Rating } = useContext(RatingContext);


    const img = [
        "https://m.media-amazon.com/images/I/41GhMomXvqL.jpg",
        "https://m.media-amazon.com/images/I/51mPvLjZOKL.jpg",
        "https://m.media-amazon.com/images/I/51dfQ7+-aVL.jpg",
        "https://m.media-amazon.com/images/I/51LttGIz-KL.jpg"
    ]

    const PrevButton = (props) => {
        const { onClick } = props;
        return (
            <button className="slick-arrow carousel-control-prev product-control-prev" type="button" onClick={onClick}>
                <span className="bi bi-chevron-left text-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
        )
    }
    const NextButton = (props) => {
        const { onClick } = props;
        return (
            <button className="slick-arrow carousel-control-next product-control-next" type="button" onClick={onClick}>
                <span className="bi bi-chevron-right text-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        )
    }



    return (
        <main className="my-3" key={product && product.id}>
            <div className="container-fluid py-2 px-0 px-sm-3 px-xl-5">
                <div className="row m-0 border mb-3">


                    <div className="col-12 col-sm-8 col-lg-9 bg-white p-0">
                        <div className="">
                            <div className="row m-0 gx-0 gx-xl-2">
                                <div className="col-12 col-lg-5 p-1 p-sm-5 p-lg-1">
                                    <img src={product && product.images[0]} alt={product && product.name} height="300px" width="100%" />
                                    <div className="p-0 p-sm-3">
                                        <Slider
                                            slidesToShow={3}
                                            slidesToScroll={1}
                                            className="px-3"
                                            prevArrow={<PrevButton />}
                                            nextArrow={<NextButton />}
                                        >
                                            {product && product.images.map(image => (

                                                <div className=" p-1">
                                                    <div className="border rounded shadow-sm p-1">

                                                        <img src={image} alt="img" height="75" width="100%" />
                                                    </div>

                                                </div>
                                            ))}


                                        </Slider>
                                    </div>
                                </div>


                                <div className="col-12 col-lg-7 p-2">

                                    <div className="row m-0 g-0 g-xl-2 pb-3">

                                        <div className="col-12">
                                            <h5>{product && product.name}</h5>
                                        </div>


                                        <div className="col-12">
                                            <div className="d-flex justify-content-between py-2">
                                                <div className="border-end pe-3">
                                                    {Rating(parseInt(product && product.average_rating))} <small className="text-primary">{product && product.total_reviews} reviews</small>
                                                </div>
                                                <div className="px-2 text-primary">
                                                    <small>
                                                        {product && product.total_answered_questions} total answered questions
                                                    </small>
                                                </div>
                                                <span className="bi bi-share pe-3 pe-sm-0"></span>
                                                <span className="bi bi-heart"></span>
                                            </div>
                                            <div className="d-flex justify-content-start py-2">
                                                <small className="me-2">Brand :</small>
                                                <small className="text-primary border-end px-2 me-2">{product && product.brand}</small>
                                                <small className="text-primary">More product from {product && product.brand.toString().replace('Visit the', '')}</small>
                                            </div>
                                            <hr />
                                        </div>


                                        <div className="col-12">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <p className="m-0 p-1 text-muted">Price:</p>
                                                </div>
                                                <div className="px-4">
                                                    <h4 className="m-0 text-primary">
                                                        <span className="pe-2">{product && product.pricing}</span>-<span className="ps-2">{product && product.list_price}</span>
                                                    </h4>
                                                    <p className="m-0">
                                                        <span className="text-muted text-decoration-line-through me-2">$300</span> <span className="text-muted">-10%</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>


                                        <div className="col-12">
                                            <div>
                                                <p className="text-muted">Color Family : <span className="ms-2 text-dark">Black</span></p>
                                            </div>
                                            <div className="row row-cols-5 m-0 w-100">
                                                <div className="col">
                                                    <div className="border d-flex flex-column justify-content-center">
                                                        <div className="d-flex justify-content-center">

                                                            <img src={img[0]} alt="" height="55px" width="55px" />
                                                        </div>

                                                        <p className="m-0 text-center" >Black</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>


                                        <div className="col-12">
                                            <div className="d-flex justify-content-start">
                                                <div className="me-3">
                                                    <p className="m-0">Quantity :</p>
                                                    <small className="text-muted">Minimun quantity is 1</small>
                                                </div>
                                                <div>
                                                    <div className="bg-secondary border rounded" style={{ height: "35px" }}>

                                                        <button className="btn d-inline-flex justify-content-center align-items-center text-white h-100">
                                                            <span className="bi bi-dash"></span>
                                                        </button>
                                                        <input type="number" className="form-control d-inline" style={{ height: "33px", width: "64px", borderRadius: "0" }} />
                                                        <button className="btn d-inline-flex justify-content-center align-items-center text-white h-100">
                                                            <span className="bi bi-plus"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>



                                        <div className="col-12">
                                            <div className="row row-cols-2">
                                                <div className="col">

                                                    <button className="btn btn-primary text-white w-100">Buy Now</button>
                                                </div>
                                                <div className="col">

                                                    <button className="btn btn-warning text-white w-100">Group Buy</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-12 col-sm-4 col-lg-3 bg-light p-0">
                        <div className=" p-3">
                            <div className="row row-cols-1">
                                <div className="col">
                                    <p className="text-muted">Delivary Option</p>
                                    <hr />
                                </div>
                                <div className="col">
                                    <p className="text-muted">Delivary Option</p>

                                    <hr />
                                </div>
                                <div className="col">
                                    <p className="text-muted">Delivary Option</p>

                                    <hr />
                                </div>
                                <div className="col">
                                    <p className="text-muted">Delivary Option</p>

                                    <hr />
                                </div>
                                <div className="col">
                                    <p className="text-muted">Delivary Option</p>

                                    <hr />
                                </div>
                                <div className="col">
                                    <button className="btn btn-secondary d-flex justify-content-center w-100">
                                        <span className="bi bi-chat-fill text-white me-2"></span>
                                        <span className="">Chat now</span>
                                    </button>
                                    <hr />
                                </div>
                                <div className="col">
                                    <p>Sold By, <br /> Tech company.</p>
                                    <div className="row m-0 row-cols-3 w-100">
                                        <div className="col d-flex flex-column justify-content-center border-end border-bottom">
                                            <p className="text-muted">Popular seller rating</p>
                                            <p>95%</p>
                                        </div>
                                        <div className="col d-flex flex-column justify-content-center border-end border-bottom">
                                            <p className="text-muted">Ship on time</p>
                                            <p>97%</p>

                                        </div>
                                        <div className="col d-flex flex-column justify-content-center border-bottom">
                                            <p className="text-muted">Chat response time</p>
                                            <p>1 hr</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex justify-content-center align-items-center py-3">
                                        <button className="btn btn-transparent w-75"> Go To Shop </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <CompanyDetails product={product} />
            </div>
        </main>
    )
}

export default ProductsPage
