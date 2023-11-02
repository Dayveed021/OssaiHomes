import React, { useState } from "react";
import UserLayout from "./UserLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/UserDashboard/my_listings.scss";

const MyListings = () => {
  return (
    <div>
      <UserLayout content={<Content />} />
    </div>
  );
};

const Content = () => {
  const [tab, setTab] = useState(false);

  const handleTabClick = () => {
    setTab(true);
  };

  const handleNTabClick = () => {
    setTab(false);
  };

  return (
    <div className="my-listings">
      <div className="mylistings-top">
        <div className="top-title">
          <h2>My Listings</h2>
          <button>Post a property</button>
        </div>
        <div className="top-btm">
          <input type="search" placeholder="Search" className="search-input" />
          <button>
            Filter <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
      </div>
      <div className="user-listings">
        <div className="published-unpublished">
          <header>
            <h3
              onClick={handleTabClick}
              style={{ borderBottom: tab ? "2px solid #3f7843" : "" }}
            >
              Published
            </h3>
            <h3
              onClick={handleNTabClick}
              style={{ borderBottom: tab ? "" : "2px solid #3f7843" }}
            >
              Unpublished
            </h3>
          </header>
          <div className="actions-tab">
            <p>
              <p>Select</p> <input type="checkbox" />
            </p>
            <select name="" id="">
              <option value="">Action</option>
              <option value="">Delete</option>
            </select>
          </div>
        </div>
        <></>
        {tab ? (
          <div className="listing-details">
            <div className="img-left">
              <img src="/Pictures/Rectangle-244.png" alt="property-img" />
            </div>
            <div className="details-right">
              <div className="name-action">
                <h2>Ossai Agent</h2>
                <select name="" id="">
                  <option value="">Action</option>
                  <option value="">Edit</option>
                  <option value="">Delete</option>
                </select>
              </div>
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
                  <img src="/Pictures/water-closet-1.png" alt="" /> 1 guest
                  toilet
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MyListings;
