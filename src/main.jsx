// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BuscarPorCodigo from './pages/BuscarPorCodigo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './index.css';
import BuscarValorPorCode from './pages/BuscarValorPorCode/BuscarPorCodigo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route 
            path="/project-react/consulta" 
            element={
              <>
                <BuscarPorCodigo />
                <Home />
                <BuscarValorPorCode />
                
              </>
            } 
          />
          <Route path="/consulta" element={<BuscarPorCodigo />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
