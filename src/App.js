import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Pages/Home';
import Contacto from './components/Pages/Contacto';
import Detalle from './components/Pages/Detalle';
import ProductList from './components/Pages/ProductList';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contacto/>}/>
          <Route path='/product/:category' element={<ProductList/>}/>
          <Route path='/products/:id' element={<Detalle/>}/>
          <Route path='*' element={<h1>404 - Página no encontrada </h1>}/>
        </Routes>
        <ItemDetailContainer />
      </BrowserRouter> 

    </div>
  );
}


export default App;
