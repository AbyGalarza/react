import React, { useState, useEffect } from "react"
import { Grid } from "@mui/material"
import CardItem from "../Item/Item"
import './ItemListContainer.css'



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





  return (
    <>
      {console.log("state products: ", products)}
      <h2>Budines</h2>
      <Grid container className='general-container'>
        {
          productos.map(({title,price,image,id}) => {
            return (
              <>
                <Grid item md={3} key={id}>
                  <CardItem title={title} price={price} image={image} />
                </Grid>
              </>
            )
          })
        }
      </Grid>
    </>
  )
}

export default ItemListContainer