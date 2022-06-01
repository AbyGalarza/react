import React from "react";
import './ItemDetail.css';

const ItemDetail = ({data})=>{
    return(
        <div className="card-item-detail">
            <img className="card-item-img" src={`../${data.image}`}/>
            <p>{data.title}</p>
            <span>$ {data.price}</span> 

        </div>
    )
}

export default ItemDetail