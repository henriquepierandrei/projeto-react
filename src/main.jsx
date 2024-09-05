// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BuscarPorCodigo from './pages/BuscarPorCodigo';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <BuscarPorCodigo />
                <Home />
                
              </>
            } 
          />
          <Route path="/code" element={<BuscarPorCodigo />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
