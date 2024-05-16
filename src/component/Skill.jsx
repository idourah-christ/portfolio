import { Link } from "react-router-dom";

const Skill = () => {
    return ( <section id="mu-portfolio">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="mu-service-area">

                    <div class="mu-service-header">
                        <h2 class="mu-heading-title">MES REALISATIONS</h2>
                        <span class="mu-header-dot"></span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    </div>

                    <div class="mu-service-content">
                        <div class="row">

                          
                            <div class="col-md-4 col-sm-6">
                                <div class="mu-service-content-single">
                                    <span class="mu-service-icon-box">
                                        <i class="fa fa-leaf"></i>
                                    </span>
                                    <Link to="/rxvalid"><h4>RXVALID</h4></Link>
                                    <p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                </div>
                            </div>
                          
                            <div class="col-md-4 col-sm-6">
                                <div class="mu-service-content-single">
                                    <span class="mu-service-icon-box">
                                        <i class="fa fa-desktop"></i>
                                    </span>
                                    <Link to="/notg"><h4>NOTG-DEPLOY</h4></Link>
                                    <p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                </div>
                            </div>
                            
                            <div class="col-md-4 col-sm-6">
                                <div class="mu-service-content-single">
                                    <span class="mu-service-icon-box">
                                        <i class="fa fa-android"></i>
                                    </span>
                                    <Link to="mobembo"><h4>MOBEMBO PLUS</h4></Link>
                                    <p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> );
}
 
export default Skill;