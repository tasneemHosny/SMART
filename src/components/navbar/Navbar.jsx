import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "./../../assets/images/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // To handle the delay on mouse leave
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#127DF5] font-medium"
      : "text-black hover:text-blue-600 font-medium";
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any previous timeout when hovering over the dropdown
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = useCallback(() => {
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Delay the closing by 300ms
    setTimeoutId(id);
  }, [timeoutId]);

  return (
    <nav className="shadow-[0_4px_2px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex items-center justify-between py-4 px-4 lg:px-20 sm:px-11">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Smart Technology Company Logo"
            className="h-16"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 relative">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={getLinkClass("/about")}>
            About
          </Link>
          {/* Services with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`font-medium ${
                isDropdownOpen ? "text-[#127DF5]" : "text-black hover:text-blue-600"
              }`}
            >
              Services
            </button>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
                onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering the menu
                onMouseLeave={handleMouseLeave} // Close dropdown after delay when mouse leaves the menu
              >
                <ul className="py-2">
                  <li>
                    <Link
                      to="/web-services"
                      className="block px-4 py-2 text-sm text-black hover:bg-blue-100 hover:text-blue-600"
                    >
                      Web Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/app-services"
                      className="block px-4 py-2 text-sm text-black hover:bg-blue-100 hover:text-blue-600"
                    >
                      App Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/design-services"
                      className="block px-4 py-2 text-sm text-black hover:bg-blue-100 hover:text-blue-600"
                    >
                      Design Services 
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
              <Link to="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <div className="group">
                <button
                  className="w-full text-left text-black hover:text-blue-600"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Services
                </button>
                {isDropdownOpen && (
                  <ul className="space-y-1 mt-2 pl-4">
                    <li>
                      <Link
                        to="/web-services"
                        className="block text-sm text-black hover:text-blue-600"
                      >
                        Web Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/web-services"
                        className="block text-sm text-black hover:text-blue-600"
                      >
                        App Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/design-services"
                        className="block text-sm text-black hover:text-blue-600"
                      >
                        Design Services
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
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
