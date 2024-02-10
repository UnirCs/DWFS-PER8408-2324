import React from 'react';
import '../styles/style.css';
function Header() {
  return (
    <header>
      <div className="banner">
        <h1>CINE UNIR</h1>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Película</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

