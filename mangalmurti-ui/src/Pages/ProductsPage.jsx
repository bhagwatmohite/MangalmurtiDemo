

const ProductsPage = () => {
  return (
    <>
      {/* <!-- Spinner Start --> */}
      <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}></div>
      </div>
      {/* <!-- Spinner End --> */}


      {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-dark px-0">
        <div className="row g-0 d-none d-lg-flex">
          <div className="col-lg-6 ps-5 text-start">
            <div className="h-100 d-inline-flex align-items-center text-white">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
              <span className="fs-5 fw-bold me-2"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
              <span className="fs-5 fw-bold">+012 345 6789</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}


      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a href="index.html" className="navbar-brand ps-5 me-0">
          <h1 className="text-white m-0">Industro</h1>
        </a>
        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="index.html" className="nav-item nav-link">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Services</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu bg-light m-0">
                <a href="project.html" className="dropdown-item active">Projects</a>
                <a href="feature.html" className="dropdown-item">Features</a>
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <a href="" className="btn btn-primary px-3 d-none d-lg-block">Get A Quote</a>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}


      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInRight">Projects</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb animated slideInRight mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Projects</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}


      {/* <!-- Project Start --> */}
      <div className="container-fluid py-5 my-5 px-0">
        <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p className="fw-medium text-uppercase text-primary mb-2">Our Projects</p>
          <h1 className="display-5 mb-5">See What We Have Completed Recently</h1>
        </div>
        <div className="owl-carousel project-carousel bg-dark wow fadeIn" data-wow-delay="0.1s">
          <a className="project-item" href="">
            <img className="img-fluid" src="img/project-1.jpg" alt="" />
            <div className="project-title">
              <h5 className="text-primary mb-0">Auto Engineering</h5>
            </div>
          </a>
          <a className="project-item" href="">
            <img className="img-fluid" src="img/project-2.jpg" alt="" />
            <div className="project-title">
              <h5 className="text-primary mb-0">Civil Engineering</h5>
            </div>
          </a>
          <a className="project-item" href="">
            <img className="img-fluid" src="img/project-3.jpg" alt="" />
            <div className="project-title">
              <h5 className="text-primary mb-0">Gas Engineering</h5>
            </div>
          </a>
          <a className="project-item" href="">
            <img className="img-fluid" src="img/project-4.jpg" alt="" />
            <div className="project-title">
              <h5 className="text-primary mb-0">Power Engineering</h5>
            </div>
          </a>
          <a className="project-item" href="">
            <img className="img-fluid" src="img/project-5.jpg" alt="" />
            <div className="project-title">
              <h5 className="text-primary mb-0">Energy Engineering</h5>
            </div>
          </a>
          <a className="project-item" href="">
            <img className="img-fluid" src="img/project-6.jpg" alt="" />
            <div className="project-title">
              <h5 className="text-primary mb-0">Water Engineering</h5>
            </div>
          </a>
        </div>
      </div>
      {/* <!-- Project End --> */}

      {/* 
    <!-- Footer Start --> */}
      <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Our Office</h5>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
              <div className="d-flex pt-3">
                <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i
                  className="fab fa-twitter"></i></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i
                  className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i
                  className="fab fa-youtube"></i></a>
                <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i
                  className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <a className="btn btn-link" href="">About Us</a>
              <a className="btn btn-link" href="">Contact Us</a>
              <a className="btn btn-link" href="">Our Services</a>
              <a className="btn btn-link" href="">Terms & Condition</a>
              <a className="btn btn-link" href="">Support</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Business Hours</h5>
              <p className="mb-1">Monday - Friday</p>
              <h6 className="text-light">09:00 am - 07:00 pm</h6>
              <p className="mb-1">Saturday</p>
              <h6 className="text-light">09:00 am - 12:00 pm</h6>
              <p className="mb-1">Sunday</p>
              <h6 className="text-light">Closed</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative w-100">
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                  placeholder="Your email" />
                <button type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}


      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright bg-dark py-4">
        <div className="container text-center">
          <p className="mb-2">Copyright &copy; <a className="fw-semi-bold" href="#">Your Site Name</a>, All Right Reserved.
          </p>

          <p className="mb-0">Designed By <a className="fw-semi-bold" href="https://htmlcodex.com">HTML Codex</a> Distributed
            By: <a href="https://themewagon.com">ThemeWagon</a> </p>
        </div>
      </div>
      {/* <!-- Copyright End --> */}


      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
        className="bi bi-arrow-up"></i></a>
    </>
  )
}

export default ProductsPage