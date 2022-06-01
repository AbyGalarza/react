import React from "react";
import productos from "../../utils/ProductsMocks";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = ()=>{
    return(
        <div className="general-container">
            <ItemListContainer title={'Productos recomendados'} products={productos}/>
        </div>
    )
}

export default Home