import React from "react";
import UserLayout from "./UserLayout";
import { faHeart, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/UserDashboard/favourites.scss";

const Favourites = () => {
  return (
    <div>
      <UserLayout content={<Content />} />
    </div>
  );
};

export default Favourites;

const Content = () => {
  return (
    <div className="favourites">
      <div className="favourites-con">
        <h2>Favourites</h2>
        <div className="listing-details">
          <div className="img-left">
            <img src="/Pictures/Rectangle-244.png" alt="property-img" />
          </div>
          <div className="details-right">
            <div className="name-action">
              <h2>Ossai Agent</h2>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolre.
            </p>
            <h2 className="amount">90000000</h2>
            <h3>
              <FontAwesomeIcon icon={faLocationPin} />
              Warri Delta State
            </h3>
            <p>Added 12/22/2022</p>
            <div className="price-call-btn">
              <button>
                <img src="/Pictures/telephone-call-1.png" alt="" />{" "}
                <span>Call</span>
              </button>
            </div>
            <div className="facilaties">
              <div className="toilet">
                <img src="/Pictures/water-closet-1.png" alt="" /> 1 guest toilet
              </div>
              <div className="bedroom">
                <img src="/Pictures/double-bed-1.png" alt="" /> 6 bedrooms
              </div>
              <div className="bathroom">
                <img src="/Pictures/bath-1.png" alt="" /> 6 bathrooms
              </div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
