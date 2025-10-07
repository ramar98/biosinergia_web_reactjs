import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Proyectos</h2>
      <p className="portfolio-intro">
        En <strong>BioSinergia</strong> impulsamos el futuro del cultivo inteligente
        con módulos tecnológicos que permiten medir en <span>tiempo real</span> las
        condiciones de las plantas, optimizando recursos como agua, luz y fertilizantes.
      </p>

      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/modulo1.jpg" alt="Módulo inteligente" />
          <h3>Módulo de Monitoreo</h3>
          <p>
            Dispositivo IoT que registra temperatura, humedad, CO₂ y humedad del suelo,
            enviando los datos a la plataforma web y móvil en tiempo real.
          </p>
        </div>

        <div className="portfolio-item">
          <img src="/app_dashboard.jpg" alt="App Biosinergia" />
          <h3>Dashboard Inteligente</h3>
          <p>
            Aplicación que muestra el estado del cultivo y permite automatizar el riego
            y la iluminación de forma remota, adaptándose al tipo de planta.
          </p>
        </div>

        <div className="portfolio-item">
          <img src="/control_panel.jpg" alt="Control Panel" />
          <h3>Panel de Control</h3>
          <p>
            Plataforma diseñada para gestionar múltiples sensores y microcontroladores
            desde un entorno unificado, ideal para agricultura de precisión.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
