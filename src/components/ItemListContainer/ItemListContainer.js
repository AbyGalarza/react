import React, { useState, useEffect } from "react"
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import productos from "../../utils/ProductsMocks"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  const getProducts = ()  => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log("Falló la llamada.",err)
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