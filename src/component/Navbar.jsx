import React, { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Navbar.scss";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Login.scss";
import close from "./Pages/SVG/close.svg";
import facebook from "./Pages/SVG/facebook.svg";
import google from "./Pages/SVG/google.svg";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    console.log("clicked");
    setToggle(!toggle);
  };
  const [popup, setPop] = useState(false);
  const openPopup = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
  };

  const [display, setDis] = useState(true);

  return (
    <>
      <div className="nav">
        <div className="nav-main">
          <div className="Hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={toggle ? faTimes : faBars}
              style={{ height: "25px", width: "35px" }}
            />
          </div>
          <Link to="/" className="logo">
            HomeLander
          </Link>
        </div>
        <nav className={toggle ? "nav-items" : "null"}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "nav-list")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/buy"
                className={({ isActive }) => (isActive ? "active" : "nav-list")}
              >
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/list"
                className={({ isActive }) => (isActive ? "active" : "nav-list")}
              >
                List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rent"
                className={({ isActive }) => (isActive ? "active" : "nav-list")}
              >
                Rent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "active" : "m-nav-list"
                }
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "active" : "m-nav-list"
                }
              >
                Log In
              </NavLink>
            </li>
          </ul>
          <ul>
            <button className="btn" onClick={openPopup}>
              Log in
            </button>
            <button className="btn-2" onClick={openPopup}>
              Sign Up
            </button>
          </ul>
        </nav>
      </div>
      <Outlet />

      {popup ? (
        <div className="back_login">
          <div className="wrapper">
            <link
              href="https://fonts.cdnfonts.com/css/satoshi"
              rel="stylesheet"
            ></link>

            <span class="icon-close" onClick={closePopup}>
              <img src={close} alt="close_icon" height={20} width={20} />
            </span>

            {display ? (
              <div class="form-box login">
                <h2>Log into your account</h2>
                <div class="login-register">
                  <p>
                    Or
                    <span class="register-link" onClick={() => setDis(false)}>
                      Create
                    </span>
                    account
                  </p>
                </div>
                <form action="#">
                  <div class="input-box">
                    <input type="email" required placeholder="Email Address" />
                  </div>
                  <div class="input-box">
                    <input type="password" required placeholder="Password" />
                  </div>
                  <div class="remember_me">
                    <a href="/">forgot password?</a>
                  </div>
                  <button type="submit" className="btn_">
                    Login
                  </button>

                  <p className="or">or</p>

                  <div>
                    <span className="icons">
                      <button className="btn_icon">
                        {" "}
                        <img
                          src={google}
                          alt="google_icon"
                          className="img"
                          height={20}
                          width={20}
                        />
                        Log in with Google
                      </button>
                    </span>

                    <span className="icons">
                      <button className="btn_icon">
                        <img
                          src={facebook}
                          className="img"
                          alt="facebook_icon"
                          height={20}
                          width={20}
                        />
                        Log in with Facebook
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <div class="form-box register">
                <h2>Create an account</h2>
                <div class="register-login">
                  <p>
                    Or
                    <span class="login-link" onClick={() => setDis(true)}>
                      Login
                    </span>
                    to your account
                  </p>
                </div>
                <form action="#">
                  <div class="input-box_register">
                    <input type="email" required placeholder="First Name" />
                    <input type="email" required placeholder="Last Name" />
                  </div>
                  <div class="input-box">
                    <input type="email" required placeholder="Email Address" />
                  </div>
                  <div class="input-box">
                    <input type="password" required placeholder="Password" />
                  </div>
                  <div class="input-box">
                    <input
                      type="password"
                      required
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div class="t_c">
                    <label for="box">
                      <input type="checkbox" required />
                      agree to the
                      <a href="/">terms & conditions</a>
                      <br />
                    </label>
                    <button type="submit" className="btn_">
                      Sign up
                    </button>
                  </div>
                  <p className="or">or</p>

                  <div>
                    <span className="icons">
                      <button className="btn_icon">
                        {" "}
                        <img
                          src={google}
                          alt="google_icon"
                          className="img"
                          height={20}
                          width={20}
                        />
                        Log in with Google
                      </button>
                    </span>

                    <span className="icons">
                      <button className="btn_icon">
                        <img
                          src={facebook}
                          className="img"
                          alt="facebook_icon"
                          height={20}
                          width={20}
                        />
                        Log in with Facebook
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
