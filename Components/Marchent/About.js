import React, { useContext } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { RatingContext } from '../GlobalContext/RatingContext';  

const About = ({ show }) => {

    const { Rating } = useContext(RatingContext)


    return (
        <div className={show ? 'd-block' : 'd-none'}>

            {/* reviews  */}

            <div className="row row m-0 gy-3 gx-3 w-100 px-0 px-sm-3 mb-2" style={{ fontSize: ".8rem" }}>


                <div className="col-12 col-md-5 col-lg-4 col-xl-5 p-0 ">
                    <div className="bg-white rounded p-3 p-xl-0">


                        <div className="row row-cols-1 row-cols-xl-2 m-0 gy-3 w-100" style={{ fontSize: ".8rem" }}>

                            <div className="col">
                                <div className=" px-5 p-md-3">
                                    <h3>4.4 <small className="text-muted">/5</small></h3>
                                    <div className="my-2" style={{ fontSize: "1.5rem" }}>{Rating(4)}</div>
                                    <small className="text-muted">90 reveiws</small>
                                </div>
                            </div>


                            <div className="col p-0">
                                <div className="row row-cols-1 m-0 gy-1 w-100" style={{ fontSize: ".8rem" }}>

                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "94%" }} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span className="ps-2">90</span>
                                    </div>
                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span className="ps-2">15</span>

                                    </div>
                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span className="ps-2">3</span>

                                    </div>
                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "3%" }} aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span className="ps-2">1</span>

                                    </div>
                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span className="ps-2">0</span>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-md-7 col-lg-8 col-xl-7">
                    <div className="border bg-white px-0 px-md-2 py-4 p-xl-4">
                        <div className="row row-cols-2 row-cols-sm-4 row-cols-md-2 row-cols-lg-4 gy-3 gy-lg-0 m-0 w-100">
                            <div className="col">
                                <CircularProgressbarWithChildren value={75}>
                                    <strong>75% </strong>User response
                                </CircularProgressbarWithChildren>

                            </div>
                            <div className="col">
                                <CircularProgressbarWithChildren value={85}>
                                    <strong>85% </strong>User reviws
                                </CircularProgressbarWithChildren>

                            </div>
                            <div className="col">
                                <CircularProgressbarWithChildren value={95}>
                                    <strong>95% </strong>Delivary rate
                                </CircularProgressbarWithChildren>

                            </div>
                            <div className="col">
                                <CircularProgressbarWithChildren value={94}>
                                    <strong>94% </strong> company rating
                                </CircularProgressbarWithChildren>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* about seller  */}

            <div className="row m-0 w-100 px-0 px-sm-3 my-2">
                <div className="col-12">
                    <h6 className="text-muted my-2">About seller</h6>
                </div>

                <div className="col-12 col-md-5">
                    <div className="bg-white p-3 border rounded">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Necessitatibus itaque asperiores soluta alias optio labore
                            blanditiis id, aliquid quo impedit perferendis saepe perspiciatis
                            vero, quod quasi nemo ex debitis numquam.
                            Provident voluptates veritatis sunt atque quaerat tempore, unde
                            vero iure error deleniti accusantium non quos magnam eaque eos reiciendis
                            pariatur ut reprehenderit in, hic quisquam perferendis, odio quo! Non, magni.
                            Veniam explicabo error vitae earum? Iusto blanditiis aspernatur tempora
                            omnis quo reiciendis incidunt qui vero. Consequatur, dolor. Optio ipsa
                            molestiae maxime, sunt sequi, nulla ducimus repudiandae dolorem cupiditate, omnis doloremque.
                            Aut et magnam eius eligendi molestiae, distinctio doloremque in nam, ab
                            , quasi sunt quisquam excepturi dignissimos sequi nihil nisi itaque porro
                            odit ipsa maxime facilis. Blanditiis sit a saepe sed?
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="bg-white p-3 border rounded">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Necessitatibus itaque asperiores soluta alias optio labore
                            blanditiis id, aliquid quo impedit perferendis saepe perspiciatis
                            vero, quod quasi nemo ex debitis numquam.
                            Provident voluptates veritatis sunt atque quaerat tempore, unde
                            vero iure error deleniti accusantium non quos magnam eaque eos reiciendis
                            pariatur ut reprehenderit in, hic quisquam perferendis, odio quo! Non, magni.
                            Veniam explicabo error vitae earum? Iusto blanditiis aspernatur tempora
                            omnis quo reiciendis incidunt qui vero. Consequatur, dolor. Optio ipsa
                            molestiae maxime, sunt sequi, nulla ducimus repudiandae dolorem cupiditate, omnis doloremque.
                            Aut et magnam eius eligendi molestiae, distinctio doloremque in nam, ab
                            , quasi sunt quisquam excepturi dignissimos sequi nihil nisi itaque porro
                            odit ipsa maxime facilis. Blanditiis sit a saepe sed?
                        </p>
                    </div>
                </div>

            </div>


            <div className="row m-0 w-100 px-0 px-sm-3 my-2">
                <div className="col-12">
                    <h6 className="text-muted my-2">About Company</h6>
                </div>

                <div className="col-12 col-md-5">
                    <div className="bg-white p-3 border rounded">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Necessitatibus itaque asperiores soluta alias optio labore
                            blanditiis id, aliquid quo impedit perferendis saepe perspiciatis
                            vero, quod quasi nemo ex debitis numquam.
                            Provident voluptates veritatis sunt atque quaerat tempore, unde
                            vero iure error deleniti accusantium non quos magnam eaque eos reiciendis
                            pariatur ut reprehenderit in, hic quisquam perferendis, odio quo! Non, magni.
                            Veniam explicabo error vitae earum? Iusto blanditiis aspernatur tempora
                            omnis quo reiciendis incidunt qui vero. Consequatur, dolor. Optio ipsa
                            molestiae maxime, sunt sequi, nulla ducimus repudiandae dolorem cupiditate, omnis doloremque.
                            Aut et magnam eius eligendi molestiae, distinctio doloremque in nam, ab
                            , quasi sunt quisquam excepturi dignissimos sequi nihil nisi itaque porro
                            odit ipsa maxime facilis. Blanditiis sit a saepe sed?
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="bg-white p-3 border rounded">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Necessitatibus itaque asperiores soluta alias optio labore
                            blanditiis id, aliquid quo impedit perferendis saepe perspiciatis
                            vero, quod quasi nemo ex debitis numquam.
                            Provident voluptates veritatis sunt atque quaerat tempore, unde
                            vero iure error deleniti accusantium non quos magnam eaque eos reiciendis
                            pariatur ut reprehenderit in, hic quisquam perferendis, odio quo! Non, magni.
                            Veniam explicabo error vitae earum? Iusto blanditiis aspernatur tempora
                            omnis quo reiciendis incidunt qui vero. Consequatur, dolor. Optio ipsa
                            molestiae maxime, sunt sequi, nulla ducimus repudiandae dolorem cupiditate, omnis doloremque.
                            Aut et magnam eius eligendi molestiae, distinctio doloremque in nam, ab
                            , quasi sunt quisquam excepturi dignissimos sequi nihil nisi itaque porro
                            odit ipsa maxime facilis. Blanditiis sit a saepe sed?
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
