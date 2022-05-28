import React, { useState } from "react";
import Cards from '../Item/Item';
import { Grid } from "@mui/material";
import CardItem from "../Item/Item";

const ItemList = ({productos})=>{
    return (
        <>
          {console.log("state products: ", productos)}
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

export default ItemList

