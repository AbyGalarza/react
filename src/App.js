import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SnackBar from './components/SnackBar/SnackBar';


function App() {


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>

    </div>
  );
}

export default App;
