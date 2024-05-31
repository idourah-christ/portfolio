import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor:'#474580', color:"#ffffff"}}>
      <div className="container">
        <Link className="navbar-brand" to="index.html" style={{color:"#ffffff"}}>
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
              <a href="#about" className="nav-link">
                <span data-hover="About" >About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#realisation" className="nav-link">
                <span data-hover="Réalisations">Réalisations</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <span data-hover="Compétences">Compétences</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#parcours" className="nav-link">
                <span data-hover="parcours">Parcours</span>
              </a>
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
