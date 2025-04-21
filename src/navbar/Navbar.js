import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import servicesData from "./servicesdata/ServicesData";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false);
    setIsPopupOpen(false);
  };

  const toggleDropdown = () => {
    if (window.innerWidth <= 768) {
      if (isMenuOpen) {
        setIsPopupOpen(true);
      } else {
        setIsDropdownOpen(!isDropdownOpen);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-menu") &&
        !event.target.closest(".dropdown-toggle") &&
        !event.target.closest(".popup-modal")
      ) {
        setIsDropdownOpen(false);
        setIsPopupOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <a href="tel:7284013879"> 
        <span class="call-now-number">72840-13879</span>
        </a>


        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => {
                if (window.innerWidth <= 768 && isMenuOpen) {
                  setIsPopupOpen(true);
                } else {
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
            >
              Services
            </button>

            {window.innerWidth > 768 && (
              <ul className="dropdown-menu">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/service/${service.id}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contactus" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div
          className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
          <div
            className="popup-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Our Services</h2>
            <ul className="popup-services-list">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/service/${service.id}`}
                    onClick={() => {
                      setIsPopupOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="popup-close-btn" onClick={() => setIsPopupOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

