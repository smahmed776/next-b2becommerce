import React, { useContext } from "react"
import { RatingContext } from "../GlobalContext/RatingContext"
import Link from "next/link"



const SingleProduct = ({ imageText, name, id, rating, price }) => {

    const { Rating } = useContext(RatingContext)



    return (
        <div className="col" key={id}>
            <div className="border bg-white p-2 custom-rounded shadow-sm w-100">
                <div className="row row-cols-1 m-0 w-100">
                    <Link href={`/products/${id}`} passHref>
                        <a>
                            <div className="col p-0 custom-rounded-topleft custom-rounded-topright">
                                <img src={imageText} alt={name} className="custom-rounded-topleft custom-rounded-topright" style={{ minHeight: "140px", maxHeight: "200px", width: "100%" }} />
                            </div>
                            <div className="col p-0 py-2">
                                <p className="m-0" style={{textOverflow: "ellipsis", whiteSpace: "nowrap" , overflow: "hidden"}} title={name}>
                                    {name}
                                </p>
                            </div>
                            <div className="col p-0">
                                <p className="my-1 text-danger">{price}</p>
                            </div>
                            <div className="col p-0">
                                {rating > 0 && <div className="mt-1 mb-2">
                                    {Rating(parseInt(rating))}
                                </div>}
                            </div>
                        </a>
                    </Link>
                    <div className="col p-0 pb-2 d-flex justify-content-between">
                        <button className="btn btn-sm btn-outline-secondary" style={{ width: "40%", fontSize: ".7rem" }}>Min order</button>
                        <button className="btn btn-sm btn-primary" style={{ width: '55%', fontSize: ".7rem" }}>Group Import</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;