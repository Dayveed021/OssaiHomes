import React from "react";
import UserLayout from "./UserLayout";
import "../../../styles/UserDashboard/subscription.scss";

const Subscriptions = () => {
  return (
    <div>
      <UserLayout content={<Content />} />
    </div>
  );
};

export default Subscriptions;

const Content = () => {
  return (
    <div className="subscription">
      <div className="header-text">
        <h2>Our Subscription Packages</h2>
        <p>Reach hundreds of renters, buyers and applicants</p>
      </div>
      <div className="subscription-card-con">
        <div className="subscription-card">
          <div className="card-header">
            <h3>Free</h3>
            <p>₦0/ Month</p>
          </div>
          <div className="card-body">
            <ul>
              <li>2 Property Listing</li>
              <li>0 Automatic Boost</li>
              <li>0 Featured Listing</li>
              <li>0 Popular Listing</li>
            </ul>
            <button>
              <h3>SignUp</h3>
            </button>
          </div>
        </div>
        <div className="subscription-card">
          <div className="card-header">
            <h3>Starter</h3>
            <p>₦3000/ Month</p>
          </div>
          <div className="card-body">
            <ul>
              <li>10 Property Listings</li>
              <li>0 Automatic Boost</li>
              <li>0 Featured Listing</li>
              <li>0 Popular Listing</li>
            </ul>
            <button>
              <h3>SignUp</h3>
            </button>
          </div>
        </div>
        <div className="subscription-card">
          <div className="card-header">
            <h3>Basic</h3>
            <p>₦5000/ Month</p>
          </div>
          <div className="card-body">
            <ul>
              <li>10 Property Listings</li>
              <li>0 Automatic Boost</li>
              <li>0 Featured Listing</li>
              <li>0 Popular Listing</li>
            </ul>
            <button>
              <h3>SignUp</h3>
            </button>
          </div>
        </div>
        <div className="subscription-card">
          <div className="card-header">
            <h3>Business</h3>
            <p>₦8000/ Month</p>
          </div>
          <div className="card-body">
            <ul>
              <li>10 Property Listings</li>
              <li>0 Automatic Boost</li>
              <li>0 Featured Listing</li>
              <li>0 Popular Listing</li>
            </ul>
            <button>
              <h3>SignUp</h3>
            </button>
          </div>
        </div>
        <div className="subscription-card">
          <div className="card-header">
            <h3>Business+</h3>
            <p>₦10000/ Month</p>
          </div>
          <div className="card-body">
            <ul>
              <li>10 Property Listings</li>
              <li>0 Automatic Boost</li>
              <li>0 Featured Listing</li>
              <li>0 Popular Listing</li>
            </ul>
            <button>
              <h3>SignUp</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="questions">
          <h3>Can I upload a property for free</h3>
          <p>
            Yes you can try out our free account that grants you the ability to
            post a maximum number of properties at aa time.
          </p>
        </div>
        <div className="questions">
          <h3>What is the featured listing?</h3>
          <p>
            This adds your property to the “featured listing” section in our
            homepage.
          </p>
        </div>
        <div className="questions">
          <h3>What are the payment options?</h3>
          <p>
            Our payment options include a yearly subscription Debit card charge
            or you can transfer funds for temporary payment.
          </p>
        </div>
      </div>
    </div>
  );
};
