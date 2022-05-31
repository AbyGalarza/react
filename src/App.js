import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import productos from './utils/ProductsMocks'


function App() {


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>

    </div>
  );
}


export default App;
