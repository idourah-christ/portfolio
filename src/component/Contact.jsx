const Contact = () => {
  return (
    <section id="mu-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-contact-area">
              <div className="mu-contact-header">
                <h2 className="mu-heading-title">CONTACT ME</h2>
                <span className="mu-header-dot"></span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
              </div>
              <div className="mu-contact-content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mu-contact-top">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="mu-contact-top-single">
                            <div className="mu-icon">
                              <i className="fa fa-map-marker"></i>
                            </div>
                            <p>
                              4 Avenue de Montmorency, 95700 ROISSY-EN-FRANCE,
                              FRANCE
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="mu-contact-top-single">
                            <div className="mu-icon">
                              <i className="fa fa-phone"></i>
                            </div>
                            <p>+33 7 53 09 93 46</p>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="mu-contact-top-single">
                            <div className="mu-icon">
                              <i className="fa fa-envelope"></i>
                            </div>
                            <p>idourah96@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mu-contact-bottom">
                      <div id="form-messages"></div>
                      <form
                        id="ajax-contact"
                        method="post"
                        action="mailer.php"
                        className="mu-contact-form"
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            id="name"
                            name="name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            id="email"
                            name="email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message"
                            id="message"
                            name="message"
                            required
                          ></textarea>
                        </div>
                        <button type="submit" className="mu-send-msg-btn">
                          <span>SUBMIT</span>
                        </button>
                      </form>
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

export default Contact;
