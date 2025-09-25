import React from 'react';
import './Hero.css'; // CSS específico para este componente

export default function Hero() {
  return (
    <div className="hero">
      <img
        src="/portada.png"
        alt="Cultivo sostenible"
        className="hero-image"
      />
      <div className="hero-text">
        <h2>Tecnología para un cultivo sostenible</h2>
        <p>Innovación y eficiencia para hogares y grandes agricultores</p>
      </div>
    </div>
  );
}
