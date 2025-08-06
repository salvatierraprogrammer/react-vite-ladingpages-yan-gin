import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Header from './components/Header';
import Footer from './components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

