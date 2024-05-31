import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect } from "react";

export const Nav = () => {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header" style={{backgroundColor:" #21185c"}}>
      
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid d-flex flex-row-reverse">
    <Link className="navbar-brand text-white" to="#" >Yoane Idourah</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row-reverse">
      <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/parcours">
                  Parcours
                </Link>
              </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="porgess-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </header>
  );
};
