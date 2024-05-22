import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-service-area">
              <div className="mu-service-header">
                <h2 className="mu-heading-title">MES COMPETENCES</h2>
                <span className="mu-header-dot"></span>
              </div>

              <div className="mu-service-content">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="mu-service-content-single">
                      <span className="mu-service-icon-box">
                        <i className="fa fa-leaf"></i>
                      </span>
                      <Link to="autonomie">
                        <h4>AUTONOMIE</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipis elit minim
                        veniam ettis inkeras.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="mu-service-content-single">
                      <span className="mu-service-icon-box">
                        <i className="fa fa-desktop"></i>
                      </span>
                      <Link to="/rigueur">
                        <h4>RIGUEUR</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipis elit minim
                        veniam ettis inkeras.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="mu-service-content-single">
                      <span className="mu-service-icon-box">
                        <i className="fa fa-android"></i>
                      </span>
                      <Link to="/ledearship">
                        <h4>LEADERSHIP</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipis elit minim
                        veniam ettis inkeras.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="mu-service-content-single">
                      <span className="mu-service-icon-box">
                        <i className="fa fa-android"></i>
                      </span>
                      <h4>
                        <Link to="/react-js">React & Nginx sur Docker</Link>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipis elit minim
                        veniam ettis inkeras.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="mu-service-content-single">
                      <span className="mu-service-icon-box">
                        <i className="fa fa-android"></i>
                      </span>
                      <Link to="/node-js">
                        <h4>Bcrypt pour le hashage</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipis elit minim
                        veniam ettis inkeras.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="mu-service-content-single">
                      <span className="mu-service-icon-box">
                        <i className="fa fa-android"></i>
                      </span>
                      <Link to="/architecture">
                        <h4>Signer les data avec JWT</h4>
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipis elit minim
                        veniam ettis inkeras.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
