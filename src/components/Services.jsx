import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>
          Nuestros <span>Servicios</span>
        </h2>

        <p className="services-intro">
          En <strong>BioSinergia</strong> ofrecemos soluciones inteligentes para
          optimizar el crecimiento y cuidado de tus cultivos, combinando tecnología,
          sostenibilidad y automatización.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <img src="/monitoreo.png" alt="Monitoreo" />
            <h3>Monitoreo en tiempo real</h3>
            <p>
              Sensores inteligentes que registran la humedad, temperatura y CO₂
              para que conozcas exactamente lo que tus plantas necesitan.
            </p>
          </div>

          <div className="service-card">
            <img src="/automatizacion.png" alt="Automatización" />
            <h3>Automatización de riego</h3>
            <p>
              Sistemas automatizados que ajustan el riego y fertilización de forma
              precisa según las condiciones del suelo y el clima.
            </p>
          </div>

          <div className="service-card">
            <img src="/sostenibilidad.png" alt="Sostenibilidad" />
            <h3>Agricultura sostenible</h3>
            <p>
              Asesoramiento y acompañamiento para implementar prácticas agrícolas
              responsables y eficientes, reduciendo el impacto ambiental.
            </p>
          </div>
        </div>
      </div>

      {/* --- Elementos decorativos --- */}
      <div className="services-bubble bubble1"></div>
      <div className="services-bubble bubble2"></div>
    </section>
  );
}

export default Services;
