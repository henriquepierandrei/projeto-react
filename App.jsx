import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import BuscarPorCodigo from './pages/BuscarPorCodigo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route 
          path="/consulta" 
          element={
            <>
              <Home />
              <BuscarPorCodigo />
            </>
          } 
        />
        {/* <Route path="/about" element={<About />} /> */}
    
      </Routes>
    </Router>
  );
}

export default App;
