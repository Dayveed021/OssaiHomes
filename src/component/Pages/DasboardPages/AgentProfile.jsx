import React, { useState } from "react";
import UserLayout from "./UserLayout";
import "../../../styles/UserDashboard/agentprofile.scss";

const AgentProfile = () => {
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
    <div className="profile">
      <h2>My Profile</h2>
      <div className="profile-con">
        <header>
          <h3
            onClick={handleNTabClick}
            style={{
              borderBottom: tab ? "" : "2px solid #3f7843",
            }}
          >
            Profile
          </h3>
          <h3
            onClick={handleTabClick}
            style={{ borderBottom: tab ? "2px solid #3f7843" : "" }}
          >
            Edit Profile
          </h3>
        </header>
        {tab ? (
          <>
            <div className="personal">
              <h3>Personal Details</h3>
              <div className="form-input">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div className="gov-docu">
                <p>Upload Your Government Issued ID</p>
                <button>Upload photo</button>
              </div>
            </div>
            <div className="personal">
              <h3>Business Details</h3>
              <div className="form-input">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div className="gov-docu">
                <p>Upload Your Government Issued ID</p>
                <button>Upload photo</button>
              </div>
            </div>
            <div className="personal">
              <h3>Address</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">State</label>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <label htmlFor="">City</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="personal">
              <h3>Contact Information</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" />
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Whatsapp Number</label>
                    <input type="number" />
                  </div>
                </div>
              </div>
              <div className="l-inputs">
                <label htmlFor="">Email Address</label>
                <input type="email" />
              </div>
            </div>
            <button>Save</button>
          </>
        ) : (
          <>
            <div className="personal">
              <h3>Personal Details</h3>
              <div className="form-input">
                <label htmlFor="">Name</label>
                <input type="text" readOnly />
              </div>
            </div>
            <div className="personal">
              <h3>Business Details</h3>
              <div className="form-input">
                <label htmlFor="">Name</label>
                <input type="text" readOnly />
              </div>
            </div>
            <div className="personal">
              <h3>Address</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">State</label>
                    <input type="text" readOnly />
                  </div>
                  <div className="inputs">
                    <label htmlFor="">City</label>
                    <input type="text" readOnly />
                  </div>
                </div>
              </div>
            </div>
            <div className="personal">
              <h3>Contact Information</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" readOnly />
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Whatsapp Number</label>
                    <input type="number" readOnly />
                  </div>
                </div>
              </div>
              <div className="l-inputs">
                <label htmlFor="">Email Address</label>
                <input type="email" readOnly />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AgentProfile;
