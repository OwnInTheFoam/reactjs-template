// Thirdparty
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.svg";
// Components
// Styles
import "./../styles/NavBar.css";
import "./../styles/Dropdown.css";

// Services

function NavBar() {
  useEffect(() => {}, []);

  return (
    <div>
      {/* <!-- Promotional Container --> */}
      {/*
      <div className="promo-bar">
        <div className="container">

          <p>Add this for a promotional banner</p>

        </div>
      </div>
      */}

      {/* <!-- Navigational Container --> */}
      <div className="dark-container">
        {/* <!-- Header for logo and menu links --> */}
        <div className="container">
          <header className="header-app">
            <Link to="/">
              <img src={logo} alt="the logo" className="logo" />
            </Link>
            <nav className="nav-bar">
              <ul className="show-desktop hide-mobile">
                <li>
                  <Link to="/" className="link-book-now nav-bar-link">
                    Open App
                  </Link>
                </li>

                <li>
                  <div className="dropdown">
                    <img
                      src={require("./../assets/icon-user.svg").default}
                      alt="login"
                      className="loginmodal dropbtn"
                    />

                    <div className="dropdown-content">
                      <Link to="/Deposit" className="dropdown-link">
                        Deposit
                      </Link>
                      <Link to="/Withdrawal" className="dropdown-link">
                        Withdrawal
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
