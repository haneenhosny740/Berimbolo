import React from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink for active link styles
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <div className="container">
          <img src="images/logo.jpg" alt="Berimbolo Logo" width="50px" className="me-2" />
          <h2 className="navbar-brand mb-0">Berimbolo</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-light"
                  style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  href="#explore-products"
                  className="nav-link text-light"
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#services"
                  className="nav-link text-light"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#faq"
                  className="nav-link text-light"
                >
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link text-light"
                  style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <div
        id="services"
        className="container my-5 bg-white text-dark py-5 shadow-lg border-bottom border-3 border-secondary"
      >
        <h2 className="text-center mb-4">Our Security Services</h2>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center bg-light text-dark shadow-lg">
              <img
                src="images/cctv.jpg"
                alt="CCTV Installation"
                className="card-img-top"
                height="214.39"
                width="142.66"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">CCTV Installation</h5>
                <p className="card-text">
                  Professional installation of high-quality CCTV cameras for residential and commercial spaces,
                  ensuring optimal coverage and reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center bg-light text-dark shadow-lg">
              <img
                src="images/alarm.webp"
                alt="Alarm Systems"
                className="card-img-top"
                height="214.39"
                width="142.66"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Alarm Systems</h5>
                <p className="card-text">
                  Advanced alarm systems with 24/7 monitoring, featuring motion detection, intrusion alerts, and
                  emergency response.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center bg-light text-dark shadow-lg">
              <img
                src="images/remote.jpg"
                alt="Remote Monitoring"
                className="card-img-top"
                height="214.39"
                width="142.66"
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">Remote Monitoring</h5>
                <p className="card-text">
                  Real-time monitoring solutions accessible via mobile and desktop applications, providing
                  unparalleled convenience and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Products Section */}
      <div
        id="explore-products"
        className="container my-5 bg-white text-dark py-5 shadow-lg border-bottom border-3 border-secondary"
      >
        <h2 className="text-center mb-4">Explore Our Products</h2>
        <div className="card bg-light text-dark shadow-lg">
          <div className="row g-0">
            <div className="col-md-4">
              <div className="bg-secondary h-100 d-flex align-items-center justify-content-center">
                <img
                  src="images/home.jpg"
                  alt="High-Quality Security Products"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">High-Quality Security Products</h5>
                <p className="card-text">
                  Discover our range of cutting-edge security products designed to keep your premises safe and
                  secure.
                </p>
                <NavLink to="/products" className="btn btn-dark">
                  View Products
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="container my-5 bg-white text-dark py-5 shadow-lg">
        <h3 className="text-center mb-4">Frequently Asked Questions</h3>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item bg-light text-dark">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button bg-light text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What services do you offer?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We offer a range of security services including CCTV installation, alarm systems, and remote monitoring.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-light text-dark">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed bg-light text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Do you provide warranties on your products?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, all our products come with a manufacturer warranty and support.
              </div>
            </div>
          </div>

          <div className="accordion-item bg-light text-dark">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed bg-light text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How can I contact support?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can contact our support team via phone or email available on our Contact page.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
