import "./Startup.css";

function Startup() {
  return (
    <section id="startup" className="startup-section">
      <div className="startup-container">
        {/* --- IMAGEN --- */}
        <div className="startup-image">
          <img src="/cultivos_exterior.png" alt="Tecnología Biosinergia" />
        </div>

        {/* --- TEXTO --- */}
        <div className="startup-text">
          <h2>
            La <span>Startup</span>
          </h2>
          <p>
            <strong>Biosinergia</strong> impulsa una nueva era en la agricultura,
            donde la tecnología y la biología trabajan en armonía. 
          </p>
          <p>
            Desarrollamos <span className="highlight">dispositivos inteligentes</span> 
            y aplicaciones móviles que permiten monitorear y responder en tiempo real 
            a las necesidades de las plantas, automatizando procesos como el riego y 
            la nutrición.
          </p>
          <p>
            Nuestro objetivo es crear sistemas que aprendan del entorno, optimicen 
            los recursos y construyan un futuro agrícola más sostenible.
          </p>
        </div>
      </div>

      {/* --- ELEMENTOS DECORATIVOS --- */}
      <div className="circuit circuit1"></div>
      <div className="circuit circuit2"></div>
    </section>
  );
}

export default Startup;
