import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import servicesData from "./servicesdata/ServicesData";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // close dropdown when menu toggles
  };

  const toggleDropdown = () => {
    if (window.innerWidth <= 768) {
      // only toggle dropdown on mobile
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-menu") &&
        !event.target.closest(".dropdown-toggle")
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>

        <li className={`dropdown ${isDropdownOpen ? "dropdown-open" : ""}`}>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Services
          </button>
          <ul className="dropdown-menu">
            {servicesData.map((service) => (
              <li key={service.id}>
                <Link to={`/service/${service.id}`} onClick={() => setIsMenuOpen(false)}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link to="/contactus" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
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
  );
}

export default Navbar;
