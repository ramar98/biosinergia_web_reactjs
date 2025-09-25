import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* --- TEXTO --- */}
        <div className="about-text">
          <h2>
            Sobre <span>BioSinergia</span>
          </h2>
          <p>
            En <strong>BioSinergia</strong>, fusionamos tecnología y naturaleza
            para transformar la forma en que cultivamos. Nuestro equipo desarrolla
            soluciones innovadoras que permiten monitorear en{" "}
            <span className="highlight">tiempo real</span> la salud de las plantas,
            optimizando el uso de agua y nutrientes para lograr cultivos más
            saludables y sostenibles.
          </p>

          <p>
            Nuestra misión es empoderar a agricultores y hogares para que produzcan
            de manera más inteligente, reduciendo el impacto ambiental y
            maximizando la eficiencia de sus recursos.
          </p>

          <div className="about-icons">
            <div className="icon-item">
              <img src="/logo_innovacion.jpg" alt="Innovación verde" />
              <span>Innovación verde</span>
            </div>
            <div className="icon-item">
              <img src="/logo_ahorro_agua.jpg" alt="Ahorro de agua" />
              <span>Ahorro de agua</span>
            </div>
          </div>
        </div>

        {/* --- IMAGEN --- */}
        <div className="about-image">
          <img
            src="/modulo2.jpg"
            alt="Tecnología agrícola"
          />
        </div>
      </div>

      {/* --- BURBUJAS DECORATIVAS --- */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
    </section>
  );
}

export default About;
