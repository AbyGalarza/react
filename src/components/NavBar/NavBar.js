import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavBar = ()=>{
    return(
      <AppBar position="static">
        <Toolbar>
            <img src='./public/logo192.png'></img>
            <ul>
                <li> Home </li>
                <li> Preguntas Frecuentes </li>
                <li> Contacto </li>
            </ul>
          <Button color="inherit">Login</Button>

        </Toolbar>
      </AppBar>
    )
}

export default NavBar