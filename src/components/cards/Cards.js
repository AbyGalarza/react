import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions, { Button } from "@mui/material";
import './Cards.css';

const CardItem = ({image, title, price}) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button variant={'outlined'}>Detalle</Button>
                </div >
            </CardContent>
        </Card>
    )
}

export default CardItem

