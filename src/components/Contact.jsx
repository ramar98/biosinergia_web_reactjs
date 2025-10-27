import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <p className="contact-intro">
        ¿Querés saber más sobre <strong>BioSinergia</strong> o colaborar con nosotros?
        Completá el formulario o comunicate por nuestros medios directos.
      </p>

      <div className="contact-container">
        {/* Información de contacto */}
        <div className="contact-info">
          <div className="contact-item">
            <img src="/email.png" alt="Email" />
            <p>biosinergia@gmail.com</p>
          </div>
          <div className="contact-item">
            <img src="whatsapp.png" alt="Teléfono" />
            <p>+54 9 3858687316</p>
            <p>+54 9 3814012526</p> 
          </div>
          <div className="contact-item">
            <img src="ubicacion.png" alt="Ubicación" />
            <p>Tucumán, Argentina</p>
            <p>Buenos Aires, Argentina</p>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form className="contact-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" rows="4" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
