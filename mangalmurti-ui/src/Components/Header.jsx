import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a href="index.html" className="navbar-brand ps-5 me-0">
          <img src="logo.jpg" alt="MangalMurti Logo" style={{ height: '40px', marginRight: '10px' }} />
          <h1 className="text-white m-0">MangalMurti</h1>
        </a>
        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-item nav-link"
              activeClassName="active"
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Products
            </NavLink>
            <NavLink
              to="/service"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Services
            </NavLink>
            <NavLink
              to="/team"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Team
            </NavLink>
            <NavLink
              to="/clients"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Clients
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </div>
          <NavLink to="/blog" className="btn btn-primary px-3 d-none d-lg-block">Blogs</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
