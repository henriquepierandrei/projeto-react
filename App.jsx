import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import BuscarPorCodigo from './src/pages/BuscarPorCodigo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code" element={<BuscarPorCodigo />} />
      
      </Routes>
    </Router>
  );
}

export default App;
