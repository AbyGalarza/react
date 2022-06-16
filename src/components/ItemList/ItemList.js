import React from "react";
import { Grid } from "@mui/material";
import CardItem from "../Item/Item";
import './ItemList.css'


const ItemList = ({productos})=>{
    return (
        <>
          <Grid container className='general-container'>
          <h2>Budines</h2>
            {
              productos.map(({title,price,image,id}) => {
                return (
                  <>
                    <Grid item md={3} key={id}>
                      <CardItem title={title} price={price} image={image} id={id}/>
                    </Grid>
                  </>
                )
              }) 
            }
          </Grid>
        </>
      )
}

export default ItemList

