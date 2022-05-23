import React from "react"
import { Grid } from "@mui/material"
import CardItem from "../cards/Cards"
import './ItemListContainer.css'


const ItemListContainer = ()=> {
    return(
        <>
        <h2>Budines</h2>
        <Grid container className='general-container'>
          <Grid item md={3}>
            <CardItem title="Budín frutos rojos" price={400} image={"budinFrutos.jpeg"}/>
          </Grid>
          <Grid item md={3}>
            <CardItem title="Budín limón" price={400} image={"budinLimon.jpg"}/>
          </Grid>
          <Grid item md={3}>
            <CardItem title="Budín chips de chocolate" price={400} image={"budinChips.jpg"}/>
          </Grid>
        </Grid>
        </>
    )
}

export default ItemListContainer