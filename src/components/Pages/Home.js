import React from "react";
import productos from "../../utils/ProductsMocks";
import Banner from "../Banner/Banner";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Home = ()=>{
    return(
        <div className="home-general-container">
            <Banner></Banner>
            <ItemListContainer title={'Productos recomendados'} products={productos}/>
        </div>
    )
}

export default Home