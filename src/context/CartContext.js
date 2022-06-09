import React, { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children})=>{
    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product)=>{
        console.log("se agregó el producto: ", product)
        setCartListItems(product => [...cartListItems, product])
    }
    
    const data = {
        cartListItems,
        addProductToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}