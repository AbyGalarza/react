import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartIcon from '../CartIcon/CartIcon';

const NavBar = () => {
  return (
    <AppBar position="static" className='header-primary'>
      <Toolbar className='color'>
        <div className='container-logo'>
          <Link to='/'><img src='./logo.png' alt='logo'></img></Link>
        </div>
        <ul className='navbar'>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              <Link to="/">Inicio</Link>
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              Productos
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              Preguntas Frecuentes
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              <Link to="/contact">Contacto</Link>
            </Button>
          </li>
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant='text'
              className='navbar__btn'>
              <CartIcon></CartIcon>
            </Button>
          </li>
        </ul>
        <Button color="inherit">Login</Button>

      </Toolbar>
    </AppBar>
  )
}

export default NavBar