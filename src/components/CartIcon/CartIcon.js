import React, { useContext } from "react";
import './CartIcon.css';
import CartContext from "../../context/CartContext";

const CartIcon = () => {

    return (
        <div className="cart-icon">
            <img src="../carrito.svg"></img>
            <p>Carrito</p>
        </div>

    )
}

export default CartIcon