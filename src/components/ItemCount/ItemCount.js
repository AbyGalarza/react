import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({cantidad, actualizarCantidad})=>{
    const [count, setCount]= useState(1)
    const [stock, setStock]= useState(5)

    const addCount = ()=>{
        setCount(count + 1)
        actualizarCantidad(count)
    }

    const removeCount = ()=>{
        setCount(count - 1)
    }

    return(
        <div className="count-item">
        <Button onClick={removeCount} disabled={count == 0}>-</Button>
        <p>{count}</p>
        <Button onClick={addCount} disabled={count >= 5}>+</Button>
        </div>

    )
}

export default ItemCount