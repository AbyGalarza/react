import React, { useState } from "react";
import productos from "../../utils/ProductsMocks";
import { Link } from "react-router-dom";
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "@mui/material";


const ItemDetail = ({ data }) => {
    const [cantidad, setCantidad] = useState(0)
    const [showButton, setShowButton] = useState(false)

    const addProductToCart = () => {
        console.log(data)
        console.log(cantidad)
        setShowButton(true)
    }

    return (
        <div className="card-item-detail">
            <img className="card-item-img" src={`/${data.image}`} alt="products-img" />
            <p>{data.title}</p>
            <span>$ {data.price}</span>
            <Button variant="outlined" onClick={addProductToCart}>Agregar al carrito</Button>
            {!showButton ?
                <ItemCount
                    cantidad={cantidad}
                    setShowButton={setShowButton}
                    actualizarCantidad={setCantidad} />
                    :
                    <Button variant="outlined"><Link to='/cart' >Checkout</Link></Button>}
        </div >
    )
}

export default ItemDetail