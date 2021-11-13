import { useEffect, useState } from 'react'
import ProductsPage from '../../Components/Product/ProductsPage'
import { useRouter } from 'next/router';
import { product, singleProduct } from '../../Components/dummydata/ProductDummy';
import { Server_URL } from '../../config/config';

export default function products({data}) {
    console.log(data)
   

    return (
        <ProductsPage product={productItem? productItem[0] : null}/>
    )
}

export async function getServerSideProps (context){
    const res = await fetch(`${Server_URL}/api/auth/v1/product/${context.query.productId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = res.json();
    return {
        props: {data}
    }
}