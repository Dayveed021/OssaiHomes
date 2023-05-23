import React from "react";
import UserLayout from "./UserLayout";
import "../../../styles/UserDashboard/user-home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const pictures = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
  },
];

const UserDashboard = () => {
  return (
    <>
      <UserLayout content={<Content />} />
    </>
  );
};

const Content = () => {
  return (
    <div className="container">
      <main>
        <h3 className="home-title">List a Property</h3>
        <div className="property-con">
          {pictures.map((images) => (
            <div className="properties">
              <img src={images.image} alt="" />
              <div className="labels">
                <div className="order">
                  <span>Order</span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div className="delete">
                  <span>Delete</span>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </div>
              </div>
            </div>
          ))}
          <div className="upload">
            {/* <FontAwesomeIcon icon={faCloudArrowUp} size="6x" /> */}
            <FontAwesomeIcon icon={faUpload} size="6x" />
            <span>Upload Photo</span>
          </div>
        </div>
        <div className="save-next">
          <button className="save-btn">Save</button>
          <button className="nxt-btn">Next</button>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
