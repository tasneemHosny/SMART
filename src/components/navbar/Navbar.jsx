import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "./../../assets/images/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#127DF5] font-medium"
      : "text-black hover:text-blue-600 font-medium";
  };

  return (
    <nav className=" shadow-[0_4px_2px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex items-center justify-between py-4 lg:px-20 sm:px-11">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Smart Technology Company Logo"
            className="h-16"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={getLinkClass("/about")}>
            About
          </Link>
          <Link to="/services" className={getLinkClass("/services")}>
            Services
          </Link>
          <Link to="/careers" className={getLinkClass("/careers")}>
            Careers
          </Link>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-2 text-black">
          <Link to="/contact" className={getLinkClass("/contact")}>
            <FontAwesomeIcon icon={faPhone} />
            <span className="ms-2">(+20) 1800013420 Let`s talk</span>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-blue-600 focus:outline-none"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 shadow-inner">
          <ul className="space-y-2 p-4">
            <li>
              <Link to="/home" className={getLinkClass("/home")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className={getLinkClass("/services")}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/careers" className={getLinkClass("/careers")}>
                Careers
              </Link>
            </li>
            <li className="mt-4">
              <span className="text-black block">
                <FontAwesomeIcon icon={faPhone} /> +20 1800013420 Let's talk
              </span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
