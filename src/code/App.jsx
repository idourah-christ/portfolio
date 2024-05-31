import { Link } from "react-router-dom";
import Header from "./Header";
import "./App.scss";
import Footer from "./Footer";
import Project from "./Project";
import Parcours from "./Experiences";
import { Carousel } from "antd";
import Skills from "./Skills";

const MainApp = () => {
  return (
    <main>
      <Header />
      <section
        className="about full-screen d-lg-flex justify-content-center align-items-center"
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
              <div className="about-text">
                <small className="small-text">
                  Welcome to{" "}
                  <span className="mobile-block">my portfolio website!</span>
                </small>
                <h1 className="animated animated-text">
                  <span className="mr-2">Je suis</span>
                  <div className="animated-info">
                    <span
                      className="animated-item"
                      style={{ fontSize: "20px" }}
                    >
                      Ingénieur logiciel
                    </span>
                    <span
                      className="animated-item"
                      style={{ fontSize: "20px" }}
                    >
                      Architecte logiciel
                    </span>
                    <span
                      className="animated-item"
                      style={{ fontSize: "20px" }}
                    >
                      Apprenti DevOps
                    </span>
                  </div>
                </h1>

                <p>
                  Building Link successful product is Link challenge. I am
                  highly energetic in user experience design, interfaces and web
                  development.
                </p>

                <div className="custom-btn-group mt-4">
                  <Link to="#" className="btn mr-lg-2 custom-btn">
                    <i className="uil uil-file-alt"></i> Download Resume
                  </Link>
                  <Link
                    to="#contact"
                    className="btn custom-btn custom-btn-bg custom-btn-link"
                  >
                    Lire plus ...
                  </Link>
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

      <section className="project py-5" id="realisation">
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
