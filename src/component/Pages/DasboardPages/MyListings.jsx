import React from "react";
import UserLayout from "./UserLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faLocation,
  faLocationArrow,
  faLocationCrosshairs,
  faLocationPin,
  faLocationPinLock,
} from "@fortawesome/free-solid-svg-icons";
import "../../../styles/UserDashboard/my_listings.scss";

const MyListings = () => {
  return (
    <div>
      <UserLayout content={<Content />} />
    </div>
  );
};

const Content = () => {
  return (
    <div className="my-listings">
      <div className="mylistings-top">
        <div className="top-title">
          <h2>My Listings</h2>
          <button>Post a property</button>
        </div>
        <div className="top-btm">
          <input type="search" />
          <button>
            Filter <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
      </div>
      <div className="listing-details">
        <div className="img-left">
          <img src="/Pictures/Rectangle-244.png" alt="property-img" />
        </div>
        <div className="details-right">
          <h2>Ossai Agent</h2>
          <h3>
            <FontAwesomeIcon icon={faLocationPin} />
            Warri Delta State
          </h3>
          <div className="details-time">
            <p>Added: 21-03-2021</p>
            <p>Updated: 11-07-2022</p>
          </div>
          <p>Automatic Boost: 0</p>
          <div className="price-call-btn">
            <p>
              {" "}
              <span>90000000</span>/month
            </p>
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
  );
};

export default MyListings;
