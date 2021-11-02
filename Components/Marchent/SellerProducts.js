import React, { useEffect, useState } from 'react'
import SingleProduct from '../Product/SingleProduct';
import shoeblack from '../img/shoeblack.png'
import shoewhite from '../img/shoewhite.png'
import { product } from '../dummydata/ProductDummy';

const SellerProducts = ({ show }) => {
    const [newProduct, setNewProduct] = useState([]);


    const productId = (url) =>{
        const productUrl = url;
        const urlStr = productUrl.toString();
        const firstSide = urlStr.substring(urlStr.indexOf("/dp/") + 4);
        const lastSide = firstSide.substring(firstSide.indexOf("/ref"));
        const pid = firstSide.replace(lastSide, "");
        return pid;
    }

    console.log(newProduct);
    useEffect(() => {
        if (product) {
            setNewProduct([
                ...product.results
            ])
        }
    }, [])
    return (
        <div className={show ? 'd-block' : "d-none"}>
            <div className="p-1 p-lg-3">



                {/* filters  */}


                <div className="row m-0 gx-1 gy-3 w-100">


                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="border bg-white rounded">
                            <div className="border border-bottom bg-light p-2">
                                <p className="text-dark m-0">
                                    All Filters
                                </p>
                            </div>
                            <div className="p-2">
                                <p className="text-muted">Related Category</p>
                                <ul className="d-flex flex-md-column flex-row flex-wrap list-style-none" >
                                    <li className="p-2"><a href="">Men's Formal shoes</a></li>
                                    <li className="p-2"><a href="">sandals</a></li>
                                    <li className="p-2"><a href="">Men's Sneakers</a></li>
                                    <li className="p-2"><a href="">Boy's Formal shoes</a></li>
                                </ul>
                                <hr />
                            </div>

                            <div className="p-2">
                                <p className="text-muted">Related Category</p>
                                <ul className="d-flex flex-md-column flex-row flex-wrap list-style-none" >
                                    <li className="p-2"><a href="">Men's Formal shoes</a></li>
                                    <li className="p-2"><a href="">sandals</a></li>
                                    <li className="p-2"><a href="">Men's Sneakers</a></li>
                                    <li className="p-2"><a href="">Boy's Formal shoes</a></li>
                                </ul>
                                <hr />
                            </div>
                        </div>
                    </div>


                    {/* products  */}

                    <div className="col-12 col-md-8 col-lg-9">
                        <h5 className="text-muted m-0 bg-light border-top border-start border-end w-100 p-3 ps-2">Products on <span className="text-warning">SALE</span> </h5>
                        <div className="border rounded bg-white p-1 p-lg-3">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-3 px-5 px-sm-0 m-0 w-100">
                                {newProduct.length > 0 && newProduct.map(product => (
                                    <SingleProduct
                                        imageText={product.image}
                                        key={product.id}
                                        id={productId(product.url)}
                                        name= {product.name}
                                        rating= {product.stars}
                                        price={product.price_string}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerProducts
