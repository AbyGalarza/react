import React from "react";

const ItemDetail = (data)=>{
    console.log("Data desde ItemDetail: ",data)
    return(
        <div>
            <h2>{data.title}</h2>
        </div>
    )
}

export default ItemDetail