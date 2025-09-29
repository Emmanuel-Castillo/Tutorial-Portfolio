import FooterLinkWrapper from "./components/FooterLinkWrapper";
import LanguageWrapper from "./components/LanguageWrapper";
import NavLinkWrapper from "./components/NavLinkWrapper";
import ProjectWrapper from "./components/ProjectWrapper";
import { footerLinks, languages, navLinks, projects } from "./projects";
import "./styles.css";

function App() {
  return (
    <body>
      <section id="about-me">
        <nav>
          <div className="peronal__logo">Emmanuel Castillo</div>
          <ul className="nav__link--list">
            {navLinks.map((l) => (
              <NavLinkWrapper link={l} />
            ))}
          </ul>
        </nav>
        <div className="flex flex-1">
          <div className="about-me__info row">
            <div className="about-me__info--container">
              <h1 className="about-me__info--title">
                Hello! I'm{" "}
                <span className="text--purple">Emmanuel Castillo</span>
              </h1>
              <p className="about-me__info--para">
                I'm a <strong className="text--purple">software developer</strong>{" "}
                with a strong passion for building responsive and performant web
                applications with great user experiences that positively impacts
                the world.
              </p>
              <div className="about-me__links">
                <a
                  href="https://www.linkedin.com/in/emmanuel-castillo-897495265/"
                  className="about-me__link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Emmanuel-Castillo"
                  className="about-me__link"
                >
                  GitHub
                </a>
                <a
                  href="./assets/Emmanuel_Castillo_Resume_2024.pdf"
                  className="about-me__link"
                  target="_blank"
                >
                  <i className="fas fa-file-pdf"></i>
                </a>
              </div>
            </div>
            <figure className="about-me__img--container">
              <img
                src="/undraw_websites.svg"
                className="about-me__img"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>

      <section id="languages">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              This is my <span className="text--purple">technology stack</span>
            </h1>
            <div className="language__list">
              {languages.map((l) => (
                <LanguageWrapper language={l} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              Here are some of my <span className="text--purple">projects</span>
            </h1>
            <ul className="project__list">
              {projects.map((project) => (
                <ProjectWrapper project={project} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="row footer__row">
          <a href="#" className="footer__anchor">
            <figure className="footer__logo">
              <img src="/logo.svg" className="footer__logo--img" />
            </figure>
            <span className="footer__logo--popper">
              Top
              <i className="fas fa-arrow-up"></i>
            </span>
          </a>
          <div className="footer__social--list">
            {footerLinks.map((l) => (
              <FooterLinkWrapper link={l} />
            ))}
          </div>
          <div className="footer__copyright">
            Copyright c 2024 Emmanuel Castillo
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
