import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();


export const ProductContextProvider = ({ children }) => {
    
    const [product, setProduct] = useState([]);

    useEffect(()=> {
        //
    }, [])
}