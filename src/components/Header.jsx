import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Biosinergia Logo" className="logo-img" />
        <h1 className="logo-text">BioSinergia</h1>
      </div>
      <nav className="nav">
        <a href="#about">Nosotros</a>
        <a href="#startup">La Startup</a>
        <a href="#services">Servicios</a>
        <a href="#team">Equipo</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
