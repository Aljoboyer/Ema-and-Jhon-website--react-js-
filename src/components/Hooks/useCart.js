import { useEffect, useState } from "react"
import { Getproduct } from "../Localstorages/Added";

const useCart = products => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = []
        if(products.length)
        {
            const savedCart = Getproduct()
            for(const key in savedCart)
            {
                const AddedProduct = products.find(product => product.key === key);
                if(AddedProduct){
                    const Quantity = savedCart[key];
                    AddedProduct.quantity = Quantity;
                    storedCart.push(AddedProduct)
                }
            }
            setCart(storedCart)
        }

    },[products])
    return [cart,setCart];
}

export default useCart;