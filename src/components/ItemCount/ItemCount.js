import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import './ItemCount.css'

const ItemCount = ()=>{
    const [count, setCount]= useState(1)
    const [stock, setStock]= useState(5)

    const addCount = ()=>{
        setCount(count + 1)
    }
    const removeCount = ()=>{
        setCount(count - 1)
    }
    const onAdd = ()=>{
        console.log(count)
    }
    return(
        <div className="count-item">
        <Button onClick={removeCount} disabled={count == 0}>-</Button>
        <p>{count}</p>
        <Button onClick={addCount} disabled={count >= 5}>+</Button>
        <div><Button onClick={onAdd} variant={'outlined'}>Comprar</Button></div>
        </div>

    )
}

export default ItemCount