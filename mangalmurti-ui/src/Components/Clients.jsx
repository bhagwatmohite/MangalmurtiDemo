
const testimonials = [
  {
    img: "img/testimonial-1.jpg",
    text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    name: "Hitech Corporation Ltd.",
    profession: "Profession",
  },
  {
    img: "img/testimonial-2.jpg",
    text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    name: "Jolly Containers.",
    profession: "Profession",
  },
  {
    img: "img/testimonial-1.jpg",
    text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    name: "Parekh Plast Ltd.",
    profession: "Profession",
  },
  {
    img: "img/testimonial-1.jpg",
    text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    name: "Bansal Plastopack.",
    profession: "Profession",
  },
  {
    img: "img/testimonial-1.jpg",
    text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    name: "Sun Packaging.",
    profession: "Profession",
  },
  {
    img: "img/testimonial-1.jpg",
    text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    name: "Mold – Tek Packaging Ltd.",
    profession: "Profession",
  },
  {
    img: "img/testimonial-1.jpg",
    text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    name: "Konverter Packaging Solutions Ltd.",
    profession: "Profession",
  },
  {
    img: "img/testimonial-1.jpg",
    text: "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    name: "Geetanjali Plast Engineering Solutions Ltd.",
    profession: "Profession",
  },
];

const Clients = () => {
  return (
    <>
      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <p className="fw-medium text-uppercase text-primary mb-2">Testimonial</p>
            <h1 className="display-5 mb-5">What Our Clients Say!</h1>
          </div>

          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item text-center" key={index}>
                <div className="testimonial-img position-relative">
                  <img className="img-fluid rounded-circle mx-auto mb-5" src={testimonial.img} alt={`Testimonial from ${testimonial.name}`} />
                  <div className="btn-square bg-primary rounded-circle">
                    <i className="fa fa-quote-left text-white"></i>
                  </div>
                </div>
                <div className="testimonial-text text-center rounded p-4">
                  <p>{testimonial.text}</p>
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <span className="fst-italic">{testimonial.profession}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}

export default Clients;
