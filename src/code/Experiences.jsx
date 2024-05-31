import { Link } from "react-router-dom";
const Parcours = () => {
    return (  <section
        className="resume py-5 d-lg-flex justify-content-center align-items-center"
        id="parcours"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4">Experiences</h2>

              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2024</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Développeur fullstack</span>
                      <small>CANAL +</small>
                    </h3>
                    <p>
                      Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam
                      laoreet libero ac pharetra feugiat. Cras ac fermentum
                      nunc, Link faucibus nunc.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2023</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Développeur fullstack</span>
                      <small>CANAL +</small>
                    </h3>
                    <p>
                      Fusce rutrum augue id orci rhoncus molestie. Nunc auctor
                      dignissim lacus vel iaculis.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2022</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Développeur fullstack</span>
                      <small>Cash flow positif</small>
                    </h3>
                    <p>
                      Sed fringilla vitae enim sit amet cursus. Sed cursus
                      dictum tortor quis pharetra. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2021</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>
                        Apprenti DevOps
                        <small>SoftServe</small>
                      </span>
                    </h3>
                    <p>
                      Cras scelerisque scelerisque condimentum. Nullam at
                      volutpat mi. Nunc auctor ipsum eget magna consequat
                      viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <h2 className="mb-4 mobile-mt-2">Educations</h2>

              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2024</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Master 2 Génie Logiciel</span>
                      <small>Esiea</small>
                    </h3>
                    <p>
                      Please tell your friends about Tooplate website. That
                      would be very helpful. We need your support.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2023</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Master 1 Génie Logiciel</span>
                      <small>Intech Info</small>
                    </h3>
                    <p>
                      <Link
                        rel="nofollow"
                        to="https://www.facebook.com/tooplate"
                      >
                        Tooplate
                      </Link>{" "}
                      is Link great website to download HTML templates without
                      any login or email.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2022</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Bachelor Génie Logiciel</span>
                      <small>Simon Kuznet, Kharkiv Ukraine</small>
                    </h3>
                    <p>
                      You can freely use Tooplate's templates for your business
                      or personal sites. You cannot redistribute this template
                      without Link permission.
                    </p>
                  </div>
                </div>

                <div className="timeline-wrapper">
                  <div className="timeline-yr">
                    <span>2021</span>
                  </div>
                  <div className="timeline-info">
                    <h3>
                      <span>Bachelor Génie Logiciel</span>
                      <small>Simon Kuznet, Kharkiv Ukraine</small>
                    </h3>
                    <p>
                      You can freely use Tooplate's templates for your business
                      or personal sites. You cannot redistribute this template
                      without Link permission.
                    </p>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </section> );
}
 
export default Parcours;