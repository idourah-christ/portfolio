import { Link } from "react-router-dom";

const Skill = () => {
  return (
    <section id="mu-portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-service-area">
              <div className="mu-service-header">
                <h2 className="mu-heading-title">MES REALISATIONS</h2>
                <span className="mu-header-dot"></span>
              </div>

              <div className="mu-service-content">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="mu-service-content-single">
                      <span className="mu-service-icon-box">
                        <i className="fa fa-leaf"></i>
                      </span>
                      <Link to="/rxvalid">
                        <h4>RXVALID</h4>
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
                      <Link to="/notg">
                        <h4>NOTG-DEPLOY</h4>
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
                      <Link to="mobembo">
                        <h4>MOBEMBO PLUS</h4>
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

export default Skill;
