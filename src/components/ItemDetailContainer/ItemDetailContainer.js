import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../utils/ProductsMocks";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'
import db from "../../utils/firebaseConfig";

const ItemDetailContainer = ()=>{
    const { id } = useParams()
    const [product, setProduct] = useState({})

    /*const getItem = ()=>{
         return new Promise((resolve, reject)=>{
             //setTimeout(() => {
                 resolve(producto)
             //}, 2000  );
         })
    }*/

    useEffect(()=>{
        getProduct()
         .then( (prod)=>{
             console.log("Respuesta GetProduct: ",prod)
             setProduct(prod)
         })
        //setProduct(productFilter)
    },[id])

    const getProduct = async()=>{
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        let product = docSnaptshop.data()
        product.id =  docSnaptshop.id 
        return product
    }



    const productFilter = productos.find((product)=>{
        return product.id == id
    })

    return(
        <>
        <div>Contenedor Item</div>
        <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer