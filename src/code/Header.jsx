import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="index.html">
          <i className="uil uil-user"></i> Yoane Idourah
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="#about" className="nav-link">
                <span data-hover="About">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#project" className="nav-link">
                <span data-hover="Projects">Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#resume" className="nav-link">
                <span data-hover="Resume">Resume</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#contact" className="nav-link">
                <span data-hover="Contact">Contact</span>
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <div className="color-mode d-lg-flex justify-content-center align-items-center">
                <i className="color-mode-icon"></i>
                Color mode
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
