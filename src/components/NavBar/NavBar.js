import React from 'react';
import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartIcon from '../CartIcon/CartIcon';

const NavBar = () => {
  return (
    <AppBar position="static" className='header-primary'>
      <Toolbar className='color'>
        <div className='container-logo'>
          <img src='./logo.png'></img>
        </div>
        <ul className='navbar'>
          <li>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Inicio</Button>
          </li>
          <li>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Productos</Button>
          </li>
          <li>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Preguntas Frecuentes</Button>
          </li>
          <li>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Contacto</Button>
          </li>
          <li>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'> <CartIcon></CartIcon> </Button>
          </li>
        </ul>
        <Button color="inherit">Login</Button>

      </Toolbar>
    </AppBar>
  )
}

export default NavBar