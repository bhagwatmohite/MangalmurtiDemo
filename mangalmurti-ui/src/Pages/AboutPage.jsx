/* eslint-disable react/no-unknown-property */

const AboutPage = () => {
  return (
    <>

      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInRight">About Us</h1>
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb animated slideInRight mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Projects</li>
            </ol>
          </nav> */}
        </div>
      </div>
      {/* <!-- Page Header End --> */}
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="row gx-3 h-100">
                <div className="col-6 align-self-start wow fadeInUp" data-wow-delay="0.1s">
                  <img className="img-fluid" src="img/about-1.jpg" />
                </div>
                <div className="col-6 align-self-end wow fadeInDown" data-wow-delay="0.1s">
                  <img className="img-fluid" src="img/about-2.jpg" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p className="fw-medium text-uppercase text-primary mb-2">About Us</p>
              <h1 className="display-5 mb-4">We Are Leader In Industrial Market</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0 bg-primary p-4">
                  <h1 className="display-2">7</h1>
                  <h5 className="text-white">Years of</h5>
                  <h5 className="text-white">Experience</h5>
                </div>
                <div className="ms-4">
                  <p><i className="fa fa-check text-primary me-2"></i>Oven</p>
                  <p><i className="fa fa-check text-primary me-2"></i> Poweder Coating Booth </p>
                  <p><i className="fa fa-check text-primary me-2"></i> Automatic Handle Making Machine </p>
                  <p><i className="fa fa-check text-primary me-2"></i>Hand molding machine  </p>
                  <p className="mb-0"><i className="fa fa-check text-primary me-2"></i>Wire cutting machine     </p>
                </div>
              </div>
              <div className="row pt-2" style={{ gap: '50px' }}>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-envelope-open text-white"></i>
                    </div>
                    <div className="ms-3">
                      <p className="mb-2">Email us</p>
                      <h5 className="mb-0">mangalmurti5222@gmail.com</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-phone-alt text-white"></i>
                    </div>
                    <div className="ms-3">
                      <p className="mb-2">Call us</p>
                      <h5 className="mb-0">+012 345 6789</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}


      {/* <!-- Facts Start --> */}
      <div className="container-fluid facts my-5 p-5">
        <div className="row g-5">
          <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="text-center border p-5">
              <i className="fa fa-certificate fa-3x text-white mb-3"></i>
              <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">25</h1>
              <span className="fs-5 fw-semi-bold text-white">Years Experience</span>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
            <div className="text-center border p-5">
              <i className="fa fa-users-cog fa-3x text-white mb-3"></i>
              <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">135</h1>
              <span className="fs-5 fw-semi-bold text-white">Team Members</span>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
            <div className="text-center border p-5">
              <i className="fa fa-users fa-3x text-white mb-3"></i>
              <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">957</h1>
              <span className="fs-5 fw-semi-bold text-white">Happy Clients</span>
            </div>
          </div>
          <div className="col-md-6 col-xl-3 wow fadeIn" data-wow-delay="0.7s">
            <div className="text-center border p-5">
              <i className="fa fa-check-double fa-3x text-white mb-3"></i>
              <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">1839</h1>
              <span className="fs-5 fw-semi-bold text-white">Projects Done</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}


      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <p className="fw-medium text-uppercase text-primary mb-2">Our Team</p>
            <h1 className="display-5 mb-5">Dedicated Team Members</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-square bg-primary" style={{ width: '90px', height: '90px' }}>
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                    style={{ height: '90px' }}>
                    <h5>Mr.Dilip Hargude</h5>
                    <span className="text-primary">Chairman</span>
                    <div className="team-social">
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-square bg-primary" style={{ width: '90px', height: '90px' }}>
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                    style={{ height: '90px' }}>
                    <h5>Bharat Dukale</h5>
                    <span className="text-primary">MD</span>
                    <div className="team-social">
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-square bg-primary" style={{ width: '90px', height: '90px' }}>
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                    style={{ height: '90px' }}>
                    <h5>Mr. T. P. Thange</h5>
                    <span className="text-primary">Account</span>
                    <div className="team-social">
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-instagram"></i></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-square bg-primary" style={{ width: '90px', height: '90px' }}>
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                    style={{ height: '90px' }}>
                    <h5>Mr. Mayur Hargude </h5>
                    <span className="text-primary">Store and Sales</span>
                    <div className="team-social">
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-instagram"></i></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-square bg-primary" style={{ width: '90px', height: '90px' }}>
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                    style={{ height: '90px' }}>
                    <h5>Mr. Brijesh</h5>
                    <span className="text-primary">Maintenance</span>
                    <div className="team-social">
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-instagram"></i></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-square bg-primary" style={{ width: '90px', height: '90px' }}>
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                    style={{ height: '90px' }}>
                    <h5>Mr. Vijay Gupta</h5>
                    <span className="text-primary">Production</span>
                    <div className="team-social">
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-instagram"></i></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-square bg-primary" style={{ width: '90px', height: '90px' }}>
                    <i className="fa fa-2x fa-share text-white"></i>
                  </div>
                  <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                    style={{ height: '90px' }}>
                    <h5>Mr. Nilesh Morade</h5>
                    <span className="text-primary">Quality</span>
                    <div className="team-social">
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i
                        className="fab fa-instagram"></i></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}


      {/* <!-- Video Modal Start --> */}
      <div className="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="" id="video" allowfullscreen
                  allowscriptaccess="always" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}    </>
  )
}

export default AboutPage