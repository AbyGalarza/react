import './App.css';
import NavBar from './components/NavBar/NavBar';


function App() {

  let styleCustom = {
    color : 'green',
    border : '1 px solid',
    marginBottom : 20
  }

  return (
    <div className="App" style={styleCustom}>
      <NavBar> </NavBar>
      <h1 className='title'> Ecommerce 31180 </h1>

    </div>
  );
}

export default App;
