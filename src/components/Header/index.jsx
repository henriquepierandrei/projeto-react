// src/components/Header.jsx
import { Link } from 'react-router-dom';
import './style.css'

function Header() {
  console.log('Header is being rendered'); // Adicione esta linha para depuração

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
