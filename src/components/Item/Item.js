import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions, { Button } from "@mui/material";
import './Item.css';
import ItemCount from "../ItemCount/ItemCount";

const CardItem = ({image, title, price}) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`}/>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button>Detalle</Button>
                    <ItemCount></ItemCount>
                </div >
            </CardContent>
        </Card>
    )
}

export default CardItem

