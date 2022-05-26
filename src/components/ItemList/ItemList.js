import React, { useState } from "react";
import Cards from '../Item/Item';
import { Grid } from "@mui/material";

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
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

export default getProducts

