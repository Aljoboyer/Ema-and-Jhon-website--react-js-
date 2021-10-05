import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterproducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setFilterproducts(data)
        })
    },[])

    return [products,setProducts,filterProducts, setFilterproducts]
}
export default useProducts;