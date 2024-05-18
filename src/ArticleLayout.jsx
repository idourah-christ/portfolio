import { Link } from "react-router-dom";
import "./ArticleLayout.css";


const ArticleLayout = (props) => {
    return ( 
        <div>
            <nav className="navbar navbar-default mu-navbar" id="articleNav">
		  	<div className="container-fluid">
		   
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		      <Link to="#" className="brand" >Yoane Idourah</Link>
		    </div>

		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      	<ul className="nav navbar-nav  navbar-right">
			        <li className="nav-link" ><Link style={{color:"#fff"}} to="/">HOME</Link></li>
			        <li className="nav-link"><Link style={{color:"#fff"}}  to="/#skills">COMPETENCES</Link></li>
					<li className="nav-link"><Link style={{color:"#fff"}}  to="/#realisations">REALISATIONS</Link></li>
					<li className="nav-link"><Link style={{color:"#fff"}}  to="/#experiences">EXPERIENCES</Link></li>
		            <li><Link to="/#contact" style={{color:"#fff"}} >CONTACT</Link></li>
		      	</ul>
		    </div>
		  </div>
		</nav>
		<div className="container" style={{padding:"20px"}}>
			{props.children}
		</div>
        </div>
     );
}
 
export default ArticleLayout;