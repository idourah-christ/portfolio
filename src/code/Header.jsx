import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor:'#474580', color:"#ffffff"}}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{color:"#ffffff"}}>
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
          {props.children}
        </div>
      </div>
    </nav>
  );
};

export default Header;
