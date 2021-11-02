import React from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import orange from '../../img/orange.png'
import whyChose from '../../img/whyChose.png'

const FlashSale = () => {

    const renderer = ({ hours, minutes, seconds, completed }) => {

        if (!completed) {
            return (
                <>
                    <span className="text-warning d-block d-sm-inline-block">On Sale Now: </span>
                    <span className="text-muted ms-3 d-block mb-3 d-sm-inline-block">Ending in</span>
                    <span className="shadow bg-warning text-white me-2 ms-2 p-2">{zeroPad(hours)}hr</span>:
                    <span className="shadow bg-warning text-white me-2 ms-1 p-2">{zeroPad(minutes)}m</span>:
                    <span className="shadow bg-warning text-white p-2 ms-1">{zeroPad(seconds)}s</span>
                </>
            )
        } else {
            return (
                <span className="text-warning">Flash sale has ended! </span>

            )
        }
    }




    return (
        <>
            <div className="container">
                <h4 className="my-2 text-muted">Flash Sale</h4>
                <div className="bg-white mt-2 rounded">
                    <h5 className="p-3">
                        <Countdown date={1633928102079 + 10102530000} renderer={renderer} />
                    </h5>
                    <div className=" rounded" style={{backgroundColor: "#fe9c68"}}>
                        <div className="row ">
                            <div className="col-5">

                                <img src={orange.src} alt="" height="200px" width="100%" />
                            </div>
                            <div className="col-7 row gx-5 pt-3 row-cols-3">

                                <div className="col p-1 ">
                                    <div className="border bg-white h-75 p-2 shadow">

                                        <p>Live now</p>
                                    </div>
                                </div>
                                <div className="col p-1 ">
                                    <div className="border bg-white h-75 p-2 shadow">

                                        <p>Live now</p>
                                    </div>

                                </div>
                                <div className="col p-1 ">
                                    <div className="border bg-white h-75 p-2 shadow">

                                        <p>Live now</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="d-flex flex-column justify-content-center align-items-center w-100 my-5 bg-white">
                <h3 className="border bg-white shadow text-muted p-3" style={{marginTop: "-1.5rem"}}>Why to chose us</h3>
                <div className="container p-4">

                    <p className="my-2 text-muted p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste vero soluta, quo cum eaque sed quidem? Iure quod veniam ad vero aperiam minima laborum
                        eaque consectetur, quo, dicta dignissimos? Ad?
                        Accusamus ab facilis, porro recusandae itaque at fugit quos dolore cum error in! Provident
                        totam autem reprehenderit ipsam. Harum atque eligendi magni libero a cupiditate blanditiis
                        alias, incidunt architecto exercitationem!</p>
                </div>
                <div className="bg-white mt-2 rounded">
                    <img src={whyChose} alt="" width="100%"/>
                </div>
            </div>
        </>
    )
}

export default FlashSale
