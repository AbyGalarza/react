import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList';
import SnackBar from './components/SnackBar/SnackBar';


function App() {


  return (
    <div className="App">
      <NavBar />
      <CardList/>

    </div>
  );
}

export default App;
