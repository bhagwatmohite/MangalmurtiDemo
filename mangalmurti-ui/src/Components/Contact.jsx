/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */


const Contact = () => {
  return (
    <>

      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInRight">Contact Now</h1>
          {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb animated slideInRight mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">Projects</li>
            </ol>
          </nav> */}
        </div>
      </div>
      {/* <!-- Contact Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 justify-content-center mb-5">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-light text-center h-100 p-5">
                <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }} >
                  <i className="fa fa-phone-alt fa-2x text-primary"></i>
                </div>
                <h4 className="mb-3">Phone Number</h4>
                <p className="mb-2">+012 345 67890</p>
                <p className="mb-4">+012 345 67890</p>
                <a className="btn btn-primary px-4" href="tel:+0123456789">Call Now <i
                  className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-light text-center h-100 p-5">
                <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }} >
                  <i className="fa fa-envelope-open fa-2x text-primary"></i>
                </div>
                <h4 className="mb-3">Email Address</h4>
                <p className="mb-2">mangalmurti5222@gmail.com</p>
                <p className="mb-4">support@example.com</p>
                <a className="btn btn-primary px-4" href="mailto:info@example.com">Email Now <i
                  className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light text-center h-100 p-5">
                <div className="btn-square bg-white rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }} >
                  <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                </div>
                <h4 className="mb-3">Office Address</h4>
                <p className="mb-2">+012 345 67890</p>
                <p className="mb-4">+012 345 67890</p>
                <a className="btn btn-primary px-4" href="https://goo.gl/maps/FsznshxgnULBGgkN9"
                  target="blank">Direction <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <iframe className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0" style={{ minHeight: '450px', border: 0 }} allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="fw-medium text-uppercase text-primary mb-2">Contact Us</p>
              <h1 className="display-5 mb-4">If You Have Any Queries, Please Feel Free To Contact Us</h1>
              <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form
                with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're
                done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                      <i className="fa fa-phone-alt text-white"></i>
                    </div>
                    <div className="ms-3">
                      <h6>Call Us</h6>
                      <span>+012 345 67890</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                      <i className="fa fa-envelope text-white"></i>
                    </div>
                    <div className="ms-3">
                      <h6>Mail Us</h6>
                      <span>mangalmurti5222@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message"
                        style={{ height: '150px' }}></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

    </>
  )
}

export default Contact