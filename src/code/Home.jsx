import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project";
import Parcours from "./Experiences";
import Skills from "./Skills";
import { useState } from "react";

const aboutParagrapheStyle = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const navItems = [
  { href: "#about", label: "About", tag: "a" },
  { href: "#realisation", label: "Projets", tag: "a" },
  { href: "#parcours", label: "Parcours", tag: "a" },
  { href: "/articles", label: "Articles", tag: "Link" },
];

const specialities = [
  "Ingénieur logiciel",
  "Architecte logiciel",
  "Apprenti DevOps",
];
const Nav = (props) => {
  return (
    <ul className="navbar-nav mx-auto">
      {props.items.map((item, index) => (
        <li className="nav-item" key={index}>
          <a href={item.href} className="nav-link">
            <span data-hover={item.label}>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
const MainApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Header>
        <Nav items={navItems} />
      </Header>
      <section
        className="about full-screen d-lg-flex justify-content-center align-items-center"
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text">
                <h1 className="animated animated-text">
                  <span className="mr-2">Je suis</span>
                  <div className="animated-info">
                    {specialities.map((item, index) => (
                      <span
                        key={index}
                        className="animated-item"
                        style={{ fontSize: 20 }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </h1>

                <section style={isOpen ? null : aboutParagrapheStyle}>
                  <p>
                    Passionné d’informatique, des nouvelles technologies et de
                    la transformation numérique. J’aime travailler sur la
                    conception des logiciels de toute taille, car la rigueur et
                    la discipline que ça implique sont des valeurs que j’incarne
                    au quotidien.
                  </p>

                  <p>
                    Actuellement employé chez CANAL+ au poste de développeur
                    logiciel, ma mission consiste à concevoir des outils
                    logiciels à usage internes. Père d’une petite fille du nom
                    de Kinya qui m’attend chaque soir quand je rentre du
                    travail, j’aime passer du temps avec ma famille le week-end.
                  </p>
                  <p>
                    Au travail comme à la maison j’aime écouter de la Rumba, un
                    style de musique originaire de Cuba qui mélange rythmes et
                    mélodies cubaines avec des sonorités africaines.
                  </p>
                </section>

                <div className="custom-btn-group mt-4">
                  <Link to="#" className="btn mr-lg-2 custom-btn">
                    <i className="uil uil-file-alt"></i> Download Resume
                  </Link>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn custom-btn custom-btn-bg custom-btn-link"
                  >
                    {isOpen ? "Lire moins.." : "Lire plus ..."}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-12">
              <div className="about-image svg">
                <img
                  src="images/undraw/undraw_software_engineer_lvl5.svg"
                  className="img-fluid"
                  alt="sofware-eng"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project" id="realisation">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <h2>Réalisations</h2>
              <Project />
            </div>
          </div>
        </div>
      </section>

      <section className="project py-5" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <h2>Compétences</h2>
              <Skills />
            </div>
          </div>
        </div>
      </section>
      <Parcours />

      <Footer />
    </main>
  );
};

export default MainApp;
