import React, { useContext, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from "@mui/material";
import './Item.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CardItem = ({image, title, price, id}) => {
    const [cantidad, setCantidad] = useState(0)
    const [showButton, setShowButton] = useState(false)
    const {addProductToCart} = useContext(CartContext)
    
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
                        <Link to={`/products/${id}`}>Detalle</Link>
                    </Button>
                    <Button variant={'contained'} onClick={()=>addProductToCart({image, title, price, id})}>
                        Agregar al carrito
                    </Button>
                    {!showButton ? <>
                    <ItemCount
                    cantidad={cantidad}
                    setShowButton={setShowButton}
                    actualizarCantidad={setCantidad} />
                    </>
                    :
                    <Button variant="outlined"><Link to='/cart' >Checkout</Link></Button>}
                </div >
            </CardContent>
        </Card>
    )
}

export default CardItem

