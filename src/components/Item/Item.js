import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from "@mui/material";
import './Item.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const CardItem = ({image, title, price, id}) => {
    console.log("id:", id)
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`}/>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button>
                        <Link to={`/product/${id}`}>Detalle</Link>
                    </Button>
                    <ItemCount></ItemCount>
                </div >
            </CardContent>
        </Card>
    )
}

export default CardItem

