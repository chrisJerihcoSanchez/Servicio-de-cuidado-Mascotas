import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contáctanos</h2>
      <p className="contact-description">
        ¿Tienes preguntas sobre la salud de tu mascota? ¿Deseas agendar una cita o conocer nuestros servicios? ¡Estamos aquí para ayudarte!
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <strong>Dirección:</strong> Av. Siempreviva 123, Ciudad Mascota, País
        </div>
        <div className="contact-item">
          <strong>Teléfono / WhatsApp:</strong> +123 456 7890
        </div>
        <div className="contact-item">
          <strong>Correo electrónico:</strong> contacto@veterinariamimascota.com
        </div>
        <div className="contact-item">
          <strong>Horarios de atención:</strong><br />
          Lunes a Viernes: 8:00 AM – 6:00 PM<br />
          Sábados: 9:00 AM – 2:00 PM<br />
          Domingos: Cerrado
        </div>
        <div className="contact-item">
          <strong>Síguenos en:</strong> 
          <a href="#" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
          <a href="#" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
          <a href="#" target="_blank" rel="noopener noreferrer"> TikTok</a>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo electrónico" required />
        <textarea placeholder="Escribe tu mensaje..." rows="4" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
};

export default Contact;
