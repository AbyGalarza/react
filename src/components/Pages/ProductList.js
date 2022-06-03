import React from "react";
import { useEffect, useState } from "react";
import productos from "../../utils/ProductsMocks";
import { useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const ProductList = ()=>{
    const [products, setProducts] = useState([])
    const {category} = useParams()
  
  useEffect(() => {
      setProducts([])
      console.log("category:", category)
      getProducts()
        .then((response) => {
          filterByCategory(response)
        })
    }, [category])

    const getProducts = ()  => {
        return new Promise((resolve, reject) => {
                resolve(products)
        })
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