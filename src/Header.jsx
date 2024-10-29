import React, { useState, useEffect } from "react";
import "./Header.css";
import blog from "./assets/lejhro_logo_white.png";
import blog1 from "./assets/lejhro_logo_blue.png";
import { TfiViewList } from "react-icons/tfi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <>
      {scroll ? (
        <header
          className="sticky"
          style={{
            backgroundColor: "white",
            // height: "55px",
            display: "flex",
            alignItems: "center", // Center vertically
            justifyContent: "space-between", // Space between items
            // paddingLeft: "20px",
            // paddingRight: "50px",
          }}
        >
          <img src={blog1} alt="LEJHRO Logo" style={{ height: "30px" }} />
          <div
            style={{
              color: "skyblue",
              display: "flex",
              flexDirection: "row",
              alignItems: "center", // Center vertically
              gap: "8px", // Adds space between elements
              marginRight: "30px"
            }}
          >
            <h3>Let Talk →</h3>
            <TfiViewList style={{ height: "20px" }} />
          </div>
        </header>
      ) : (
        <header className={`header`}>
          <div className="header1">
            <div className="logo">
              <img src={blog} alt="LEJHRO Logo" />
            </div>
            <nav className={`navigation ${menuOpen ? "open" : ""}`}>
              <a href="#innovations">Innovations</a>
              <a href="#business-services">Business Services</a>
              <a href="#financial-services">Financial Services</a>
              <a href="#bootcamp">Bootcamp</a>
            </nav>
            <TfiViewList
             className="tfi-icon"
              onClick={()=> setMenuOpen(!menuOpen)}
              style={{ backgroundColor: "", height: "50px", width: "30px" }}
            />
          </div>
          <div>
            <h1 className="blogs-title">Blogs</h1>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
