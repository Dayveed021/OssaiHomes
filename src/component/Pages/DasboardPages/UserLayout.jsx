import React from "react";
import "../../../styles/UserDashboard/user_layout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowAltCircleUp,
  faBars,
  faSignOut,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import home from "../DasboardPages/Icons/home (2) 1.png";
import {
  faClipboard,
  faQuestionCircle,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../../redux/auth/authSlice";

const UserLayout = ({ content }) => {
  const [toggle, setToggle] = useState(false);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  function handleToggle() {
    setToggle(!toggle);
  }

  function handleLogout() {
    dispatch(logout());
    dispatch(reset());
  }

  return (
    <>
      <div className="user-layout">
        <div className="right-side">
          <div className="right-side-header">
            <h1>HomeLander</h1>
            <hr />
          </div>
          <div className={toggle ? "right-side-contents" : "active-nav"}>
            <div className="content-pages">
              <div className="content-page">
                <NavLink
                  to="/dashboard/"
                  className={({ isActive }) => (isActive ? "is-active" : "not")}
                >
                  <img src={home} alt="" />
                  <p>List A Property</p>
                </NavLink>
              </div>
              <div className="content-page">
                <NavLink
                  to="/dashboard/my_listings"
                  className={({ isActive }) => (isActive ? "is-active" : "not")}
                >
                  <FontAwesomeIcon icon={faClipboard} />
                  <p>My Listings</p>
                </NavLink>
              </div>
              <div className="content-page">
                <NavLink
                  to="/dashboard/subscription"
                  className={({ isActive }) => (isActive ? "is-active" : "not")}
                >
                  <FontAwesomeIcon icon={faArrowAltCircleUp} />
                  <p>Upgrade Subscription</p>
                </NavLink>
              </div>
              <div className="content-page">
                <NavLink
                  to="/dashboard/favourites"
                  className={({ isActive }) => (isActive ? "is-active" : "not")}
                >
                  <i class="fa-regular fa-heart"></i>
                  <p>Favourites</p>
                </NavLink>
              </div>
              <div className="content-page">
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) => (isActive ? "is-active" : "not")}
                >
                  <FontAwesomeIcon icon={faUserCircle} />
                  <p>Profile</p>
                </NavLink>
              </div>
              <div className="content-page">
                <NavLink
                  to="/dashboard/help"
                  className={({ isActive }) => (isActive ? "is-active" : "not")}
                >
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  <p>Help Center</p>
                </NavLink>
              </div>
              <div className="content-page" onClick={handleLogout}>
                <NavLink to="/login" className="not">
                  <FontAwesomeIcon icon={faSignOut} />
                  <p>Sign Out</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="left-side">
          <div className="left-side-header">
            <div className="left-header-content">
              <FontAwesomeIcon
                icon={toggle ? faXmark : faBars}
                onClick={handleToggle}
                className="ham"
              />
              <h2 className="acc-name">Hello {user.account.name}</h2>
              <h2 className="logo">HomeLander</h2>
              <Link to="/dashboard/profile" className="image">
                <img src="" alt="" />
              </Link>
              <div className="left-profile-section">
                <span>My Subscription</span>
                <div className="left-prof-img">
                  <Link to="/dashboard/profile" className="image-1">
                    <img src="" alt="" />
                  </Link>
                  <span>{user.account.name}</span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="left-main-contents">{content}</div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
