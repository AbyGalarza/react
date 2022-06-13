import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home';
import Contacto from './components/Pages/Contacto';
import Detalle from './components/Pages/Detalle';
import ProductList from './components/Pages/ProductList';
import { CartProvider } from './context/CartContext';
import Cart from './components/Pages/Cart';

function App() {


  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contacto />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<Detalle />} />
            <Route path='*' element={<h1>404 - Página no encontrada </h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}


export default App;
