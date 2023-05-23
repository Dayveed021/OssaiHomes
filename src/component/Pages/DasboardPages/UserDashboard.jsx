import React, { useState } from "react";
import UserLayout from "./UserLayout";
import house from "../Pics/user.webp";
import "../../../styles/UserDashboard/user-home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUpload } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const pictures = [
  {
    id: 1,
    image:
      "https://netstorage-legit.akamaized.net/images/vllkyt5iogeq5uhe1.jpg",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNOUwovMtgkiSePd933X3-T0wPmIxcvkus7fZRkTzf2m3wS_df0Ti9b929xOdG0CPEjE&usqp=CAU",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiPsnRLX955IvEYIBE4l5Qsdi3UDmLKPVMapP15bEwBmidxH7cYOUDT4hwJ1nx5cJ2_U&usqp=CAU",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYIgdHuM5QVSW3Xp-jR3JDt1_SLJ6_FeDwgrlIVbblgwjntMRyC16aJTk6FPy_ugvrnU&usqp=CAU",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwAPo5W89exLPBlHU1g5WxOph7ga4GBKMVzU_jTTdEqKzIWeQeNgoJdHyQTAo-pGML7E&usqp=CAU",
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
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
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
            <label htmlFor="upload-input">
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                  className="uploaded-image"
                />
              ) : (
                <div className="not-uploaded">
                  <FontAwesomeIcon icon={faUpload} size="6x" cursor="pointer" />
                  <span>Upload Photo</span>
                </div>
              )}
            </label>
            <input
              id="upload-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
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
