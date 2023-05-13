import React from "react";
import "../../../styles/UserDashboard/user_layout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import home from "../DasboardPages/Icons/home (2) 1.png";
import {
  faClipboard,
  faQuestionCircle,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";

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
                <img src={home} alt="" />
                <p>List A Property</p>
              </div>
              <div className="content-page">
                <FontAwesomeIcon icon={faClipboard} />
                <p>My Listings</p>
              </div>
              <div className="content-page">
                <FontAwesomeIcon icon={faArrowAltCircleUp} />
                <p>Upgrade Subscription</p>
              </div>
              <div className="content-page">
                <i class="fa-regular fa-heart"></i>
                <p>Favourites</p>
              </div>
              <div className="content-page">
                <FontAwesomeIcon icon={faUserCircle} />
                <p>Profile</p>
              </div>
              <div className="content-page">
                <FontAwesomeIcon icon={faQuestionCircle} />
                <p>Help Center</p>
              </div>
              <div className="content-page">
                <FontAwesomeIcon icon={faSignOut} />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
