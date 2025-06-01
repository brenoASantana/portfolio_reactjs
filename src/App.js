import './assets/css/reset.css';
import './assets/css/typography.css';
import './assets/css/layout.css';
import './assets/css/buttons.css';
import './assets/css/gallery.css';
import './assets/css/lists.css';
import './assets/css/utils.css';
import './assets/css/themes.css';
import './assets/css/media-queries.css';

import starIcon from './assets/img/star_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Breno Santana | Portfólio</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <h2>Sobre mim</h2>
          <p>Desenvolvedor apaixonado por tecnologia e inovação.</p>
        </section>

        <section id="projetos">
          <h2>Projetos</h2>
          <ul className="gallery">
            <li>
              <img src={starIcon} alt="Projeto 1" />
              <p>Projeto 1</p>
            </li>
            <li>
              <img src={starIcon} alt="Projeto 2" />
              <p>Projeto 2</p>
            </li>
          </ul>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>Email: <a href="mailto:seuemail@email.com">seuemail@email.com</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Breno Santana. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
