
import './Footer.css';

function Footer({ categories }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              NOVA
            </a>

            <p>
              Sua plataforma de aprendizado em tecnologia.
              Explore novos conhecimentos e desenvolva
              suas habilidades.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explorar</h3>

            <a href="#home">Início</a>
            <a href="#cursos">Cursos</a>

            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
              >
                {category.title}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>Sobre o projeto</h3>

            <p>Projeto acadêmico desenvolvido com React.</p>
            <p>Disciplina de Desenvolvimento Web.</p>
          </div>

          <div className="footer-column">
            <h3>Tecnologias</h3>

            <p>React</p>
            <p>Vite</p>
            <p>JavaScript</p>
            <p>CSS3</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} NOVA. Projeto acadêmico.
          </span>

          <span>
            Desenvolvido com React + Vite
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
