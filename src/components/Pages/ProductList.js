import React from "react";
import { useEffect, useState } from "react";
import productos, { producto } from "../../utils/ProductsMocks";
import { useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
// Firestore
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const ProductList = ()=>{
    const [products, setProducts] = useState([])
    const {category} = useParams()
  
    const getProducts = ()  => {
        return new Promise((resolve, reject) => {
                resolve(productos)
        })
    }


  useEffect(() => {
      setProducts([])
      getProducts()
        .then((productos) => {
          category ? filterByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

    const Products = async ()=> {
        const productSnapshot = await getDocs(collection(db, "productos"));
        console.log("productSnapshot", productSnapshot)
        const productList = productSnapshot.doc.map((doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    const filterByCategory =(array)=>{
        return array.map((item)=>{
            if(item.category == category){
                return setProducts(products =>[...products, item])
            }
        })
    }

    return(
        <div className="general-container">
            <ItemListContainer title={'Productos recomendados'} products={productos}/>
        </div>
    )
}

export default ProductList