import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import productos from './utils/ProductsMocks';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {


  return (
    <div className="App">
            <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/'/>
      </Routes>
      <ItemListContainer/>
      <ItemDetailContainer/>
      </BrowserRouter>

    </div>
  );
}


export default App;
