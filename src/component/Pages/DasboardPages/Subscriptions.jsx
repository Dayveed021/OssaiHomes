import React, { useState, useEffect } from 'react';
import UserLayout from "./UserLayout";
import "../../../styles/UserDashboard/subscription.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Subscriptions = () => {
  return (
    <div>
      <UserLayout content={<Content />} />
    </div>
  );
};

export default Subscriptions;

const Content = () => {

  const [data, setData] = useState(null);
  const [packageID, setPackageID] = useState("");
  const [ result, setResult ] = useState("");
  const [subscriptionResults, setSubscriptionResults] = useState({});

  const navigate = useNavigate();

  const { user } = useSelector(
    (state) => state.auth
  );
  const subscribe = async (id) => {

    try {
      const response = await fetch(`https://homelanda-1d0d1907d8ae.herokuapp.com/v1/subscriptions/buypackage/${id}`, {
        method: 'PATCH',
        headers: {
          "Authorization": `Bearer ${user.access_token}`
        }
      });
      // const data = await response.json();

      if (response.ok) {
        setSubscriptionResults(prevResults => ({
          ...prevResults,
          [id]: 'Subscription was Successfully',
        }));

        // Redirect to /dashboard/publish_property upon successful subscription

        //navigate('/dashboard/publish_property');
      } else {
        const errorData = await response.json();
        setSubscriptionResults(prevResults => ({
          ...prevResults,
          [id]: errorData.message || 'Failed To Subscribe',
        }));
      }
    } catch (error) {
      setSubscriptionResults(prevResults => ({
        ...prevResults,
        [id]: 'Failed to subscribe',
      }));
      console.error('Error:', error);
    }



  }
  useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
          try {
              const response = await fetch('https://homelanda-1d0d1907d8ae.herokuapp.com/v1/subscriptions'); // Replace with your API endpoint
              if (response.ok) {
                  const result = await response.json();
                  setData(result);
                  console.log(response);
              } else {
                  throw new Error('Failed to fetch data');
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      // Call the fetchData function
      fetchData();
  }, []);



  return (
    <div className="subscription">
      <div className="header-text">
        <h2>Our Subscription Packages</h2>
        <p>Reach hundreds of renters, buyers and applicants</p>
      </div>
      <div className="subscription-card-con">
        
        {data && data.map((item,index)=>(<div className="subscription-card">
          <div className="card-header">
            <h3>{item.packageName}</h3>
            <p>₦{item.packagePrice}/ Month</p>
          </div>
          <div className="card-body">
            <ul>
              <li>{item.propertyLimit} Property Listings</li>
              <li>0 Automatic Boost</li>
              <li>0 Featured Listing</li>
              <li>0 Popular Listing</li>
            </ul>
            <button onClick={() => subscribe(item._id)} >
              <h3>SignUp</h3>
            </button>
            {subscriptionResults[item._id] && <div>{subscriptionResults[item._id]}</div>}

          </div>
        </div>))}
        
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
