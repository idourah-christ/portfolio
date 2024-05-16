import { Link } from "react-router-dom";

const Service = () => {
    return ( 
        <section id="service">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="mu-service-area">

							<div class="mu-service-header">
								<h2 class="mu-heading-title">MES COMPETENCES</h2>
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
											<Link to="autonomie"><h4>AUTONOMIE</h4></Link>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>
									
									<div class="col-md-4 col-sm-6">
										<div class="mu-service-content-single">
											<span class="mu-service-icon-box">
												<i class="fa fa-desktop"></i>
											</span>
											<Link to="/rigueur"><h4>RIGUEUR</h4></Link>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>
									
									<div class="col-md-4 col-sm-6">
										<div class="mu-service-content-single">
											<span class="mu-service-icon-box">
												<i class="fa fa-android"></i>
											</span>
											<Link to="/ledearship"><h4>LEADERSHIP</h4></Link>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>
									
									<div class="col-md-4 col-sm-6">
										<div class="mu-service-content-single">
											<span class="mu-service-icon-box">
												<i class="fa fa-android"></i>
											</span>
											<h4><Link to="/react-js">REACT JS</Link></h4>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>

									<div class="col-md-4 col-sm-6">
										<div class="mu-service-content-single">
											<span class="mu-service-icon-box">
												<i class="fa fa-android"></i>
											</span>
											<Link to="/node-js"><h4>NODE JS</h4></Link>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
										</div>
									</div>

									<div class="col-md-4 col-sm-6">
										<div class="mu-service-content-single">
											<span class="mu-service-icon-box">
												<i class="fa fa-android"></i>
											</span>
											<Link to="/architecture"><h4>ARCHITECTURE LOGICIEL</h4></Link>
											<p>Lorem ipsum dolor sit amet, consect adipis elit minim veniam ettis inkeras.</p>
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
}
 
export default Service;