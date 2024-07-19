

const Cursoalstart = () => {
  return (
    <>

      {/* <!-- Carousel Start --> */}
      <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/slider1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 text-start">
                      <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">7 Years
                        of Working Experience</p>
                      <h1 className="display-1 text-white mb-5 animated slideInRight">Industrial Solution
                        Providing Company</h1>
                      <a href="" className="btn btn-primary py-3 px-5 animated slideInRight">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/slider12.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10 text-start">
                      <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">7 Years
                        of Working Experience</p>
                      <h1 className="display-1 text-white mb-5 animated slideInRight">The Best Reliable
                        Industry Solution</h1>
                      <a href="" className="btn btn-primary py-3 px-5 animated slideInRight">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </>
  )
}

export default Cursoalstart