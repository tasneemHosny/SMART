import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#C4C4C4] text-black py-8 mt-8">
      <div className=" mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 lg:px-12">
        <div className="mb-8 lg:mb-0 flex flex-col lg:items-start">
          <div className=" mb-4">
            <img
              className="h-40 w-50 -ml-8 -mt-4"
              src="https://s3-alpha-sig.figma.com/img/4641/7a67/86c9351d3b8ff6cd371c5f785c8ef671?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lo4BUkxTUcWhloBZOe9RZK-xQOP3ih2cVbk~Y4Lgq0M8KEtaZJ15dUZgGCNZY6ROX7LbaESnhxQClB4o9GXoVB-sg7pkGKk8YCDeP1DyGlbSaB3nKKGmBaAsljLbwLnY-RYKVAkafX0qqwJTDBg0pFXHV1zaXvwFzjs5tLDwmU9mn~0OmxH7YjGqzr-cqTqkAB8ymXWRBUUo4GmT7pXK3q2ewHXqYvxMmRewuCpbX-C1ReHamPhAPeEZBrQNyS69fKO2Omwa25nohPA5fLC~EKVh1rCVAZsUYJKR5ytTtWHVJ2Sq2LPd-7TwptFCDq3p1whb3xVGVcsMi5wtoi~Wjw__"
              alt="logo"
            />
            
          </div>
          <p className="text-sm mb-4">We are here to build better things.</p>
          <div className="text-center lg:text-left">
            <h3 className="font-bold mb-2">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-black text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-black text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-black text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-black text-2xl">
                <FaBehance />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left mb-8 mt-6 lg:mb-0">
          <h3 className="font-bold mb-4">Quick links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center mt-6 lg:text-left">
          <h3 className="font-bold mb-4">E-mail</h3>
          <p className="mb-4">smart@gmail.com</p>
          <h3 className="font-bold mb-4">Call us</h3>
          <p>Sales consultant: 0000000</p>
          <p>Sales consultant: 0000000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
