import React, { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Navbar.scss";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import "../styles/Login.scss";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    console.log("clicked");
    setToggle(!toggle);
  };

  const { user } = useSelector((state) => state.auth.user);

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
          <div></div>
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
                to="/mylist"
                className={({ isActive }) =>
                  isActive ? "m-active" : "nav-list"
                }
              >
                MyList
              </NavLink>
            </li>
            {user ? (
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "m-active" : "m-nav-list"
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {user ? (
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
            ) : (
              ""
            )}
          </ul>
          <ul className="ul-btn">
            <NavLink to="/signup">
              <button className="btn-2">Try for free</button>
            </NavLink>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
