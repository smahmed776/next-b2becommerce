import React from 'react'
import Slider from 'react-slick';
import clothcarousel from '../../img/clothcarousel.png'
import item1 from '../../img/item1.png'


const Categories = () => {
    return (
        <div className="container border bg-white px-0 px-lg-3 pb-lg-3 ps-xl-5 pb-3 pt-0 d-flex flex-column justify-content-center align-items-center my-5">
            <h3 className="p-3 bg-white rounded border shadow text-muted mb-4" style={{marginTop: "-1.5rem"}}>Shop by category</h3>
            <div className="rounded border p-0 p-sm-2 w-100">
                <div className="row justify-content-center m-0 w-100">


                    <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                        <div className="rounded h-100 category-left">
                            <div className=" text-white h-100 py-3" style={{background: "#290fff9e"}}>
                                <div className="d-flex w-100 justify-content-end">

                            <button className="btn bg-white w-75" style={{
                                borderTopRightRadius: "0",
                                borderBottomRightRadius: "0",
                                borderTopLeftRadius: '1.25rem', 
                                borderBottomLeftRadius: '1.25rem' 
                                 }}>Shop on imponexpo</button>
                                </div>
                            <ul className="navbar-nav my-3">
                                <li className="nav-item text-center">
                                    <button href="/" className="btn btn-outline-secondary text-light w-100">Home</button>
                                </li>
                                <li className="nav-item text-center">
                                    <button href="/" className="btn btn-outline-secondary text-light w-100">Navigatior</button>
                                </li>
                                <li className="nav-item text-center">
                                    <button href="/" className="btn btn-outline-secondary text-light w-100">Contact Us</button>
                                </li>
                                
                            </ul>
                            </div>
                        </div>
                    </div>



                    <div className="col-12 col-sm-7 col-md-8 col-lg-5 col-xl-6">
                        <Slider 
                          slidesToShow={1}
                          slidesToScroll={1}
                          
                        >
                            <img className="rounded" src={clothcarousel.src} alt="" />
                            <img className="rounded" src={clothcarousel.src} alt="" />
                            <img className="rounded" src={clothcarousel.src} alt="" />
                        </Slider>

                        <div className="row row-cols-4 gx-0 gx-sm-3 w-100 mx-0 my-2 p-0 p-sm-3">
                            <div className="col">
                                <div className="border shadow-sm bg-white p-1 rounded">
                                    <img src={clothcarousel.src} alt="" width="100%" height="80px"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-1 rounded">
                                    <img src={item1.src} alt="" width="100%" height="80px"/>
                                </div>
                              
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-1 rounded">
                                    <img src={clothcarousel.src} alt="" width="100%" height="80px"/>
                                </div>
                                
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-1 rounded">
                                    <img src={item1.src} alt="" width="100%" height="80px"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-1 rounded">
                                    <img src={clothcarousel.src} alt="" width="100%" height="80px"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-1 rounded">
                                    <img src={item1.src} alt="" width="100%" height="80px"/>
                                </div>
                              
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-1 rounded">
                                    <img src={clothcarousel.src} alt="" width="100%" height="80px"/>
                                </div>
                                
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-1 rounded">
                                    <img src={item1.src} alt="" width="100%" height="80px"/>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-4 mt-xl-0" >
                        <div className="row row-cols-2 gx-2 gy-2 w-100 h-100 mx-0">
                            
                            <div className="col">
                                <div className="border shadow-sm bg-white p-2 rounded">
                                    <img src={clothcarousel.src} alt="" width="100%" height="80px"/>
                                    <div className="img-caption">
                                        <p>This is item 1</p>
                                        <p>This is item 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-2 rounded">
                                    <img src={item1.src} alt="" width="100%" height="80px"/>
                                    <div className="img-caption">
                                        <p>This is item 1</p>
                                        <p>This is item 1</p>
                                    </div>
                                </div>
                              
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-2 rounded">
                                    <img src={clothcarousel.src} alt="" width="100%" height="80px"/>
                                    <div className="img-caption">
                                        <p>This is item 1</p>
                                        <p>This is item 1</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-2 rounded">
                                    <img src={item1.src} alt="" width="100%" height="80px"/>
                                    <div className="img-caption">
                                        <p>This is item 1</p>
                                        <p>This is item 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-2 rounded">
                                    <img src={clothcarousel.src} alt="" width="100%" height="80px"/>
                                    <div className="img-caption">
                                        <p>This is item 1</p>
                                        <p>This is item 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="border shadow-sm bg-white p-2 rounded">
                                    <img src={item1.src} alt="" width="100%" height="80px"/>
                                    <div className="img-caption">
                                        <p>This is item 1</p>
                                        <p>This is item 1</p>
                                    </div>
                                </div>
                              
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end w-100 mt-3">
                <button className="d-flex justify-content-between align-items-center btn btn-primary py-1 pe-1" style={{width: "300px", borderRadius: "2rem"}}>
                   <span>Explore More product category</span>
                   <span className="d-flex justify-content-center align-items-center bg-white border rounded-pill bi bi-chevron-right text-primary" style={{height: "35px", width: "35px"}}></span>
                </button>
            </div>
        </div>
    )
}

export default Categories
