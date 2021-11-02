import { useEffect, useState } from 'react'
import ProductsPage from '../../Components/Product/ProductsPage'
import { useRouter } from 'next/router';
import { product, singleProduct } from '../../Components/dummydata/ProductDummy';

export default function products() {
    const [productItem, setProductItem] = useState()
    const router = useRouter();
    const id = router.query.productId;

    useEffect(() => {
        if (id) {
            setProductItem(

                singleProduct.filter(product => product.id === id)
            )
        }
    }, [id])

    return (
        <ProductsPage product={productItem? productItem[0] : null}/>
    )
}
