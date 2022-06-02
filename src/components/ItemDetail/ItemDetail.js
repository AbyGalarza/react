import React from "react";
import productos from "../../utils/ProductsMocks";
import './ItemDetail.css';

const ItemDetail = ({data})=>{
    return(
        <div className="card-item-detail">
            <img className="card-item-img" src={`/${data.image}`} alt="products-img"/>
            <p>{data.title}</p>
            <span>$ {data.price}</span> 

        </div>
    )
}

export default ItemDetail