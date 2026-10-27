
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">NOVA ORIGINAL</span>

        <h1>DOMINE O REACT</h1>

        <div className="hero-details">
          <span className="match">98% Recomendado</span>
          <span>2026</span>
          <span className="age-rating">Livre</span>
          <span>Curso de Programação</span>
        </div>

        <p>
          Aprenda a desenvolver interfaces modernas com
          React, componentes reutilizáveis e JavaScript.
        </p>

        <div className="hero-buttons">
          <a href="#cursos" className="btn-play">
            ▶ Assistir agora
          </a>

          <a href="#categorias" className="btn-info">
            ⓘ Mais informações
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
