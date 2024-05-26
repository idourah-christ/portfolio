import { Link } from "react-router-dom";
import Header from "./Header";
import "./App.scss";
import Footer from "./Footer";

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
                    Get Link free quote
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-12">
              <div className="about-image svg">
                <img
                  src="images/undraw/undraw_software_engineer_lvl5.svg"
                  className="img-fluid"
                  alt="svg image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project py-5" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">
              <div className="col-lg-8 mx-auto">
                <h2>Things I have designed for digital media agencies</h2>
              </div>

              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="project-info">
                    <img
                      src="images/project/project-image01.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </div>
                </div>

                <div className="item">
                  <div className="project-info">
                    <img
                      src="images/project/project-image02.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </div>
                </div>

                <div className="item">
                  <div className="project-info">
                    <img
                      src="images/project/project-image03.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </div>
                </div>

                <div className="item">
                  <div className="project-info">
                    <img
                      src="images/project/project-image04.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </div>
                </div>

                <div className="item">
                  <div className="project-info">
                    <img
                      src="images/project/project-image05.png"
                      className="img-fluid"
                      alt="project image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="resume py-5 d-lg-flex justify-content-center align-items-center"
        id="resume"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4">Experiences</h2>

              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2024</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Développeur fullstack</span>
                      <small>CANAL +</small>
                    </h3>
                    <p>
                      Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam
                      laoreet libero ac pharetra feugiat. Cras ac fermentum
                      nunc, Link faucibus nunc.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2023</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Développeur fullstack</span>
                      <small>CANAL +</small>
                    </h3>
                    <p>
                      Fusce rutrum augue id orci rhoncus molestie. Nunc auctor
                      dignissim lacus vel iaculis.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2022</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Développeur fullstack</span>
                      <small>Cash flow positif</small>
                    </h3>
                    <p>
                      Sed fringilla vitae enim sit amet cursus. Sed cursus
                      dictum tortor quis pharetra. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2021</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>
                        Apprenti DevOps
                        <small>SoftServe</small>
                      </span>
                    </h3>
                    <p>
                      Cras scelerisque scelerisque condimentum. Nullam at
                      volutpat mi. Nunc auctor ipsum eget magna consequat
                      viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <h2 className="mb-4 mobile-mt-2">Educations</h2>

              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2024</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Master 2 Génie Logiciel</span>
                      <small>Esiea</small>
                    </h3>
                    <p>
                      Please tell your friends about Tooplate website. That
                      would be very helpful. We need your support.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2023</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Master 1 Génie Logiciel</span>
                      <small>Intech Info</small>
                    </h3>
                    <p>
                      <Link
                        rel="nofollow"
                        to="https://www.facebook.com/tooplate"
                      >
                        Tooplate
                      </Link>{" "}
                      is Link great website to download HTML templates without
                      any login or email.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2022</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Bachelor Génie Logiciel</span>
                      <small>Simon Kuznet, Kharkiv Ukraine</small>
                    </h3>
                    <p>
                      You can freely use Tooplate's templates for your business
                      or personal sites. You cannot redistribute this template
                      without Link permission.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2021</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Bachelor Génie Logiciel</span>
                      <small>Simon Kuznet, Kharkiv Ukraine</small>
                    </h3>
                    <p>
                      You can freely use Tooplate's templates for your business
                      or personal sites. You cannot redistribute this template
                      without Link permission.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2020</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Bachelor Génie Logiciel</span>
                      <small>Simon Kuznet, Kharkiv Ukraine</small>
                    </h3>
                    <p>
                      You can freely use Tooplate's templates for your business
                      or personal sites. You cannot redistribute this template
                      without Link permission.
                    </p>
                  </div>
                </div>
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2019</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Bachelor Génie Logiciel</span>
                      <small>Simon Kuznet, Kharkiv Ukraine</small>
                    </h3>
                    <p>
                      You can freely use Tooplate's templates for your business
                      or personal sites. You cannot redistribute this template
                      without Link permission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact py-5" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mr-lg-5 col-12">
              <div className="google-map w-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.558402180099!2d-73.99373482142036!3d40.75895421922642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b8fb3083%3A0xa0f9aef176042a5c!2sTheater+District%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2smm!4v1549875377188"
                  width="400"
                  height="300"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                ></iframe>
              </div>

              <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                <div className="contact-info-item">
                  <p className="mb-3 text-white">
                    4 avenue de Montmorency, Roissy en France
                  </p>
                  <p className="footer-text mb-0">+330753099346</p>
                  <p>
                    <Link to="mailto:hello@company.co">
                      idourah96@gmail.com
                    </Link>
                  </p>
                </div>

                <ul className="social-links">
                  <li>
                    <Link
                      to="#"
                      className="uil uil-dribbble"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Dribbble"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="uil uil-instagram"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Instagram"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="uil uil-youtube"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Youtube"
                    ></Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <h2 className="mb-4">
                  Interested to work together? Let's talk
                </h2>

                <form action="" method="get">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        id="name"
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        id="email"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="ml-lg-auto col-lg-5 col-12">
                      <input
                        type="submit"
                        className="form-control submit-btn"
                        value="Send Button"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MainApp;
