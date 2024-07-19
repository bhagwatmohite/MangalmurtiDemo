

const AboutUs = () => {
  return (
    <>
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
              <h1 className="display-5 mb-4">We Are Leader In Manufacturing  Word...</h1>
              <p className="mb-4">Mangalmurti Industries was incorporated in 2017 with a vision to provide innovative & quality products to industry in powder coated MS handles segments, and Now it is one of the leading manufacturing of powder coating MS handles with good product quality.
                Mangalmurti industry capacity  having 40 Lack per month, Now we are producing 18 lacks to 20 lacks unit per month.
                We are here to provide services which focus on customer concentricity rather than profit making motive in such competitive market.

              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0 bg-primary p-4">
                  <h1 className="display-2">7</h1>
                  <h5 className="text-white">Years of</h5>
                  <h5 className="text-white">Experience</h5>
                </div>
                <div className="ms-4">
                  <p><i className="fa fa-check text-primary me-2"></i>Power & Energy</p>
                  <p><i className="fa fa-check text-primary me-2"></i>Civil Engineering</p>
                  <p><i className="fa fa-check text-primary me-2"></i>Chemical Engineering</p>
                  <p><i className="fa fa-check text-primary me-2"></i>Mechanical Engineering</p>
                  <p className="mb-0"><i className="fa fa-check text-primary me-2"></i>Oil & Gas Engineering</p>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-sm-6" >
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
    </>
  )
}

export default AboutUs