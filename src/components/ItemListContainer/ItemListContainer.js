import React, { useState, useEffect } from "react"
import { Grid } from "@mui/material"
import CardItem from "../Item/Item"
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"



const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const productos = [
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
      price: 400,
      image: '../budinChips.jpg',
      description: '',
      stock: 5,
      id: 2
    },
  ]

  const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

useEffect(() => {
    getProducts()
      .then((res) => {
        //console.log("Respuesta promesa: ",res)
        setProducts(res)
      })
      .catch((err) => {
        //console.log("Falló la llamada.",err)
      })
      .finally(() => {
        //console.log("Terminó la promesa.")
      })
  }, [])

  return(
    <>
    <ItemList productos = {products}/>
    </>
  )

}

export default ItemListContainer