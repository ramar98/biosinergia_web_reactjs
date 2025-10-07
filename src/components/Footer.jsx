import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>BioSinergia</h3>
          <p>
            Tecnología y naturaleza trabajando en armonía para crear un futuro
            más sostenible.
          </p>
        </div>

        <div className="footer-center">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#startup">La Startup</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#team">Equipo</a></li>
            <li><a href="#portfolio">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Seguinos</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icon_instagram.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icon_linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/icon_github.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} BioSinergia — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
