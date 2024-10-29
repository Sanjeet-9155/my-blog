import { useEffect, useState } from 'react';
import React from 'react';
import './Footer.css';
import { FiArrowUp } from "react-icons/fi"; 
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {

  const [showScrollUp, setShowScrollUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 200); // Show button after scrolling 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };
  return (
    <div>
      <div className="blue-line"></div>
      <footer className="footer">
      
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#innovations">Innovations</a></li>
            <li><a href="#business-services">Business Services</a></li>
            <li><a href="#financial-services">Financial Services</a></li>
            <li><a href="#recruiter">Lejhro Recruiter</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Programs</h4>
          <ul>
            <li><a href="#bootcamp">Lejhro Bootcamp</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#privacy">Privacy Statement</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Connect with us</h4>
          <div className="social-icons">
            <a href="#twitter"> <FaTwitter /></a>
            <a href="#facebook"><FaFacebookF /></a>
            <a href="#linkedin"><FaLinkedinIn /></a>
            <a href="#youtube"><FaYoutube /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 LEJHRO. All Rights Reserved.</p>
      </div>
      {showScrollUp && (
        <button className="scroll-up" onClick={scrollToTop} aria-label="Scroll to top">
          <FiArrowUp /> 
        </button>
      )}
    </footer>
    
    </div>
  );
};

export default Footer;
