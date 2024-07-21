/* eslint-disable react/no-unknown-property */


const BlogPage = () => {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInRight">Our Blog</h1>


        </div>
      </div>

      {/* <!-- Video Modal Start --> */}
      <div className="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">MangalMurti Video</h3>
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
      {/* <!-- Video Modal End --> */}
    </>
  )
}

export default BlogPage