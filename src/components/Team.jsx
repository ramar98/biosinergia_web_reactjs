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
          <img src="/ramiro.png" alt="Ramiro Agustín Rodríguez" />
          <h3>Ramiro Agustín Rodríguez</h3>
          <p className="role">CTO | Arquitectura tecnológica</p>
          <p>
            Cofundador de BioSinergia. Ingeniero en Sistemas de Información y Diplomado en Inovación Abierta. Lidero la arquitectura tecnológica y el desarrollo de software que da vida a nuestra plataforma. Mi objetivo es transformar la visión agronómica y la innovación en hardware en una solución digital intuitiva, robusta y escalable para la automatización de cultivos.
          </p>
        </div>

        <div className="team-member">
          <img src="/miguel.jpg" alt="Héctor Miguel Fadel" />
          <h3>Héctor Miguel Fadel</h3>
          <p className="role">CEO | Estrategia y Hardware IoT</p>
          <p>
            Cofundador de BioSinergia. Técnico Universitario en Electrónica con formación en gestión e innovación (Diplomatura en Innovación Abierta, programas de negocios y NAVES Banco Macro). Lidero la hoja de ruta y el hardware para sensórica y riego inteligente, enfocándome en ahorro de agua y energía.
          </p>
        </div>

        <div className="team-member">
          <img src="/agostina.png" alt="Agostina Guerrero" />
          <h3>Agostina Guerrero</h3>
          <p className="role">CSO | Investigación y Desarrollo</p>
          <p>
            Ing. Agrónoma Agostina Daniela Guerrero
            Diplomada en Vitivinicultura y Enología. Lidero el área de Investigación y Desarrollo, enfocada en el diseño y validación de soluciones tecnológicas para optimizar el rendimiento y la sostenibilidad de los cultivos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
