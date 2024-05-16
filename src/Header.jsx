import { Link } from "react-router-dom";
import Banner from "./component/Banner";
const Nav = () => {
    return ( 
        <nav className="navbar navbar-default mu-navbar">
		  	<div className="container-fluid">
		   
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <Link to="#" className="navbar-brand" >Yoane</Link>
		    </div>

		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      	<ul className="nav navbar-nav mu-menu navbar-right">
			        <li><Link to="/">HOME</Link></li>
			        <li><Link to="/#skills">COMPETENCES</Link></li>
					<li><Link to="/#realisations">REALISATIONS</Link></li>
					<li><Link to="/#experiences">EXPERIENCES</Link></li>
		            <li><Link to="/#contact">CONTACT</Link></li>
		      	</ul>
		    </div>
		  </div>
		</nav>
     );
}

export const Header = () => {
	return ( 
		<header id="mu-header" className="" role="banner">
			<div classNameName="container">
				<Nav />
			</div>
		</header>
	 );
}

export const Footer = () => {
	return (
		<footer id="mu-footer" role="contentinfo">
			<div className="container">
				<div className="mu-footer-area">
					<p className="mu-copy-right">&copy; Copyright <a rel="nofollow" href="http://markups.io">softwaredesign</a>. All right reserved.</p>
				</div>
			</div>

	</footer>
	)
}

const PageLayout = ({children}) => {
	return ( 
		<main>
			<Header />
			<Banner />
			{children}
			<Footer />
		</main>
	);
}
 
export default PageLayout;