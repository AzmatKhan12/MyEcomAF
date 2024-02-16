import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: "#e3f2fd" }}
      >
        <div className="container-md">
          <a className="navbar-brand mt-2" href="#">
            Navbar
          </a>
          <form className="d-flex " role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav justify-content-center">
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mt-2">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mt-2">
                  <Link className="nav-link active" aria-current="page" to="about">
                    About
                  </Link>
                </li>

                <div className="bt-group ">
                  <div className="nav-item dropdown d-flex">
                  
                    <li className="nav-item btn " roll="button">
                      <Link className="nav-link active" to="login" >
                        Login
                      </Link>
                    </li>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-success dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="signup">
                          Signup
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="profile">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="order">
                          My Order
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="wishlist">
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="logout">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="btn-group">
                <button type="button" className="btn ">
                   Mycart<span className="badge text-bg-secondary ms-1"> 4</span>
              </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
