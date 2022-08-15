import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';




function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer Mensaje='Bienvenido a NewStore'></ItemListContainer>
    </div>

  );
}

export default App;


