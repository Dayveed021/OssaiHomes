import React from "react";
import "../../../styles/UserDashboard/user_layout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowAltCircleUp,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import home from "../DasboardPages/Icons/home (2) 1.png";
import {
  faClipboard,
  faQuestionCircle,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <div className="user-layout">
        <div className="right-side">
          <div className="right-side-header">
            <h1>HomeLander</h1>
            <hr />
          </div>
          <div className="right-side-contents">
            <div className="content-pages">
              <div className="content-page">
                <NavLink
                  to="/dashboard/home"
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
              <div className="content-page">
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
              <h2>Hello Ossai Jenas</h2>
              <div className="left-profile-section">
                <span>My Subscription</span>
                <div className="left-prof-img">
                  <img src="" alt="" />
                  <span>Ossai Jenas</span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="left-main-contents">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
