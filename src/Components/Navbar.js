import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "./Images/logoNavbar.png";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo Anbako" className="logo-Anbako" />
            <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <div className="navbar-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="overOns"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Over ons
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="diensten"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Diensten
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://anbako.myemmacloud.com/auth/login?returnUrl=%2Fdashboard"
                  className="nav-links-mobile"
                  target="_blank"
                  rel="noreferrer"
                >
                  MyEmma login
                </a>
              </li>
            </ul>
          </div>
          {button && <Button buttonStyle="btn--outline">MyEmma login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
