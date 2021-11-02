import React from 'react';
import Slider from 'react-slick'
import people from '../img/people.jpg'
import { TestimoialData } from '../dummydata/dummydata'; 

const Testimonials = () => {


    const PrevButton = (props)=> {
        const {onClick} = props;
        return(
            <button className="slick-arrow carousel-control-prev testimonial-control-prev" type="button" onClick={onClick}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
        )
    }
    const NextButton = (props)=> {
        const {onClick} = props;
        return(
            <button className="slick-arrow carousel-control-next testimonial-control-next" type="button" onClick={onClick}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        )
    }



    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-white border pb-3 my-5 px-0 px-sm-5">
            <h3 className="p-3 bg-white border rounded shadow text-muted " style={{marginTop: "-1.5rem"}}>What others say about us</h3>

            <div className="container py-4 ">

                <div className="row row-cols-1 m-0 ">
                    <Slider
                        
                        
                        slidesToShow={3}
                        slidesToScroll={1}
                        className="col testimonial-slide"
                        prevArrow={<PrevButton />}
                        nextArrow= {<NextButton />}
                        responsive={[
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    infinite: true
                                }
                            }, 
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToScroll: 1,
                                    slidesToShow: 2
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToScroll: 1,
                                    slidesToShow: 1
                                }
                            },
                            {
                                breakpoint: 576,
                                settings: {
                                    slidesToScroll: 1,
                                    slidesToShow: 1
                                }
                            },
                            {
                                breakpoint: 285,
                                settings: {
                                    slidesToScroll: 1,
                                    slidesToShow: 1
                                }
                            }
                        ]}
                    >

                        {TestimoialData.map(i =>

                            <div className="d-flex flex-column border position-relative testimonial-div" >
                                <div className="bg-primary d-flex justify-content-center align-items-start p-0 p-sm-1" style={{ height: "70%" }}>
                                    <p className="text-center text-light p-2 p-sm-4" style={{ fontSize: ".8rem" }}>{i.testimonial}</p>
                                </div>
                                <div className="bg-light" style={{ height: "30%" }}></div>
                                <div className="position-absolute d-flex flex-column justify-content-center align-items-center w-100" style={{ bottom: "-13%", height: "220px" }}>
                                    <div className="rounded-pill bg-white p-1" style={{ height: "95px", width: "95px" }}>
                                        <img src={people.src} alt="" height="85px" width="85px" className="rounded-pill" style={{ objectFit: "cover" }} />
                                    </div>
                                    <div>
                                        <p className="text-center p-0 m-0" >{i.name}</p>
                                        <span className="bi bi-star-fill text-warning"></span><span className="bi bi-star-fill text-warning"></span><span className="bi bi-star-fill text-warning"></span><span className="bi bi-star-fill text-warning"></span><span className="bi bi-star-fill text-warning"></span>
                                    </div>

                                </div>
                            </div>
                        )}







                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
