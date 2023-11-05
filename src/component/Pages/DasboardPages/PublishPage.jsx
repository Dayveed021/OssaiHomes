import React, { useState } from "react";
import UserLayout from "./UserLayout";
import "../../../styles/UserDashboard/publish.scss";

const PublishPage = () => {
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
      <h2>Publish a Property</h2>
      <div className="profile-con">
        <header>
          <h3
            onClick={handleNTabClick}
            style={{
              borderBottom: tab ? "" : "2px solid #3f7843",
            }}
          >
            Publish
          </h3>
          <h3
            onClick={handleTabClick}
            style={{ borderBottom: tab ? "2px solid #3f7843" : "" }}
          >
            Unpublish
          </h3>
        </header>
        {tab ? (
          <>
            <div className="personal">
              <div className="form-input">
                <label htmlFor="">Title</label>
                <input type="text" />
              </div>
            </div>
            <div className="personal">
              <h3>Address</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Category</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Type</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Subtype</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Bedroom</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Bathroom</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Toilet</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="personal">
              <h3>Location Details</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">State</label>
                    <input type="number" />
                  </div>
                  <div className="inputs">
                    <label htmlFor="">City</label>
                    <input type="number" />
                  </div>
                </div>
              </div>
              <div className="l-inputs">
                <label htmlFor="">Street/Estate</label>
                <input type="email" />
              </div>
            </div>
            <div className="personal">
              <h3>Pricing</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Currency</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Price Tag</label>
                    <input type="number" />
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Append to</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="personal">
              <h3>Personal Information</h3>
              <div className="form-input">
                <label htmlFor="">Property Details</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="text-area"
                ></textarea>
              </div>
              <button>Select Amenities</button>
            </div>
            <div className="personal">
              <div className="form-input">
                <label htmlFor="">Youtube Link</label>
                <input type="text" />
              </div>
            </div>
            <button>Save</button>
          </>
        ) : (
          <>
            <div className="personal">
              <div className="form-input">
                <label htmlFor="">Title</label>
                <input type="text" />
              </div>
            </div>
            <div className="personal">
              <h3>Address</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Category</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Type</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Subtype</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Bedroom</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Bathroom</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Toilet</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="personal">
              <h3>Location Details</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">State</label>
                    <input type="number" />
                  </div>
                  <div className="inputs">
                    <label htmlFor="">City</label>
                    <input type="number" />
                  </div>
                </div>
              </div>
              <div className="l-inputs">
                <label htmlFor="">Street/Estate</label>
                <input type="email" />
              </div>
            </div>
            <div className="personal">
              <h3>Pricing</h3>
              <div className="form-input">
                <div className="d-inputs">
                  <div className="inputs">
                    <label htmlFor="">Currency</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Price Tag</label>
                    <input type="number" />
                  </div>
                  <div className="inputs">
                    <label htmlFor="">Append to</label>
                    <select name="" id="">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="personal">
              <h3>Personal Information</h3>
              <div className="form-input">
                <label htmlFor="">Property Details</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="text-area"
                ></textarea>
              </div>
              <button>Select Amenities</button>
            </div>
            <div className="personal">
              <div className="form-input">
                <label htmlFor="">Youtube Link</label>
                <input type="text" />
              </div>
            </div>
            <button>Save</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PublishPage;
