
import './App.css';
import Header from '../src/pages/Header';
import Footer from './pages/Footer';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Galeria from   './pages/Galeria';
import Contactos from './pages/Cotactos';



function App() {
  return (
    <div className="App">
      <Header/>
      <Inicio/>
      <Servicios/>
      <Nosotros/>
      <Galeria/>
      <Contactos/>
      <Footer/>
    </div>
  );
}

export default App;
