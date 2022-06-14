import React from "react"
import { useContext } from "react"
import { Container, Button } from "@mui/material"
import CartContext from "../../context/CartContext"
import { Delete } from "@mui/icons-material"
import Box from '@mui/material/Box';

const Cart = () => {
    const { cartListItems, totalPrice } = useContext(CartContext)
    console.log("cartListItems desde checkout: ", cartListItems)
    return(
        <Container className='container-general'> 
        <h2>Checkout: </h2>
        <div className='cart-section'>
            <Box component="div" sx={{display: 'flex', justifyContent: 'space-around'}} className="col-cart-table__head">
                <Box component="p" sx={{padding: '2%'}}>Producto</Box>
                <Box component="p" sx={{padding: '2%'}}>Descripción</Box>
                <Box component="p" sx={{padding: '2%'}}>Precio unitario</Box>
                <Box component="p" sx={{padding: '2%'}}>Cantidad</Box>
                <Box component="p" sx={{padding: '2%'}}>Quitar</Box>
            </Box>
            {cartListItems.map((item)=> {
                const {id, title, image, price} = item
                return(
                    <div className='cart-table__content' key={id}>
                    <div className='cart-table__content-img'>
                        <img src={`/${image}`} />
                    </div>
                    <div className='cart-table__content-title'>
                        <p>{title}</p>
                    </div>
                    <div className='cart-table__content-price'>
                        <p>$ {price}</p>
                    </div>
                    <div className='cart-table__content-quantity'>
                        <p>1</p>
                    </div>
                    <div className='cart-table__content-price'>
                        <button className='btn-delete'>
                            <Delete/>
                        </button>
                    </div>
                </div>
                )
            })}
            <div className='cart-footer'>
                <Button className='btn-custom'>Continuar comprando</Button>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className='btn-custom'>Completar Compra</Button>
                </div>
            </div>
        </div>
    </Container>
    )
}

export default Cart