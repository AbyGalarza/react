import React, { useState } from "react";
import Cards from '../Cards/Cards';
import { Grid } from "@mui/material";

const CardList = ({title})  => {
    const [products, setProducts]= useState([])
    const products = [
    {
        title: 'Budín frutos rojos',
        price: 400,
        image: '../budinFrutos.jpeg',
        description: '',
        stock: 5,
        id: 0
    },
    { 
        title: 'Budín limón',
        price: 400,
        image: '../budinLimon.jpg',
        description: '',
        stock: 5,
        id: 1
    }, 
    {
        title: 'Budín chips de chocolate',
        price: 400 ,
        image: '../budinChips.jpg',
        description: '',
        stock: 5,
        id: 2
    }
    ]
    const getProducts = ()=>{
        return new Promise( (resolve, reject)=> {
            resolve(products)
        })
    }
    
    getProducts()
    .then( (res)=>{
        console.log("Respuesta promesa: ",res)
        setProducts(response )
    })
    .catch( (err)=>{
        console.log("Falló la llamada.",err)
    })
    .finally( ()=>{
        console.log("Terminó la promesa.")
    })
}



export default CardList