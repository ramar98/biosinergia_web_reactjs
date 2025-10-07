import React from "react";
import "./Team.css";

function Team() {
  return (
    <section id="team" className="team-section">
      <h2>Nuestro Equipo</h2>
      <p className="team-intro">
        En <strong>BioSinergia</strong> combinamos experiencia en software, hardware y agricultura para crear tecnología que impulsa un futuro más verde.
      </p>

      <div className="team-container">
        <div className="team-member">
          <img src="/ramiro.jpg" alt="Ramiro Agustín Rodríguez" />
          <h3>Ramiro Agustín Rodríguez</h3>
          <p className="role">Desarrollo de Software</p>
          <p>
            Especialista en ingeniería de software y desarrollo de aplicaciones móviles y web. Lidera la arquitectura tecnológica de la plataforma de Biosinergia.
          </p>
        </div>

        <div className="team-member">
          <img src="/hector.jpg" alt="Héctor Miguel Fadel" />
          <h3>Héctor Miguel Fadel</h3>
          <p className="role">Desarrollo de Hardware</p>
          <p>
            Ingeniero electrónico con amplia experiencia en microcontroladores y sistemas embebidos. Diseña los módulos inteligentes que hacen posible la automatización del cultivo.
          </p>
        </div>

        <div className="team-member">
          <img src="/agostina.jpg" alt="Agostina Guerrero" />
          <h3>Agostina Guerrero</h3>
          <p className="role">Ingeniera Agrónoma</p>
          <p>
            Experta en fisiología vegetal y sostenibilidad agrícola. Su conocimiento permite adaptar la tecnología de Biosinergia a las necesidades reales de las plantas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
