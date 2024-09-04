// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'; // Adiciona ErrorBoundary
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <Home />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
