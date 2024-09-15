import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
  const { active } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    // setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    // setMenuOpen(false);
  };

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            {/* <button className="hamburger-menu" onClick={toggleMenu}>
              <span className="hamburger-icon"></span>
            </button>

            {menuOpen && (
              <div className="overlay" onClick={closeMenu}>
                <button className="close-button" onClick={closeMenu}>
                  &times;
                </button>
              </div>
            )} */}

            {/* Navigation menu */}
            <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
              <li
                className={
                  active === "home" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li
                className={
                  active === "about" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li
                className={
                  active === "articles" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/articles" onClick={toggleMenu}>
                  Articles
                </Link>
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
