import React, { useEffect, useState } from "react";
import UserLayout from "./UserLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/UserDashboard/my_listings.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from 'moment';

const MyListings = () => {
  return (
    <div>
      <UserLayout content={<Content />} />
    </div>
  );
};

const Content = () => {
  const [tab, setTab] = useState(false);
  const [data, setData] = useState(null);


  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  
  

  const { user } = useSelector(
    (state) => state.auth
  );

  const handleTabClick = () => {
    setTab(true);
  };

  const handleNTabClick = () => {
    setTab(false);
  };

  useEffect(()=>{
     
    const fetchData = async () => {
      try {
        const response = await fetch("https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties/agent",{
          method: "GET",
          headers: {
            "Authorization": `Bearer ${user.access_token}`
          }
        });

        if(response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalNumberOfPages = Math.ceil((data ? data.length : 0) / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalNumberOfPages; i++) {
    pageNumbers.push(i);
  }


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data ? data.slice(indexOfFirstItem,indexOfLastItem) : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="my-listings">
      <div className="mylistings-top">
        <div className="top-title">
          <h2>My Listings</h2>
          <Link to="/dashboard/publish_property">
            <button>Post a property</button>
          </Link>
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
              onClick={handleNTabClick}
              style={{ borderBottom: tab ? "" : "2px solid #3f7843" }}
            >
              Published
            </h3>
            <h3
              onClick={handleTabClick}
              style={{ borderBottom: tab ? "2px solid #3f7843" : "" }}
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
          ""
        ) : (
          <div>
            <div>
              {data && data.length > 0 && (
                <div>
                    {data && currentItems.map((item,index)=>{
                  return(
                    <div className="listing-details">
            
                      <div className="img-left">
                        <img src={`https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties/images/${item.propertyImages[0]}`} alt="property-img" />
                      </div>
                    <div className="details-right">
                      <div className="name-action">
                        <h2>{item.agent.name}</h2>
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
                        <p>Create At {moment(item.createdAt).format('MM-DD-YYYY')}</p>
                        <p> Last Updated {moment(item.updatedAt).format('MM-DD-YYYY')}</p>
                      </div>
                      <p>Automatic Boost: 0</p>
                      <div className="price-call-btn">
                        <p>
                          {" "}
                          <span>{item.pricePerMonth}</span>/month
                        </p>
                        <button>
                          <img src="/Pictures/telephone-call-1.png" alt="" />{" "}
                          <span>Call</span>
                        </button>
                      </div>
                      <div className="facilaties">
                        <div className="toilet">
                          <img src="/Pictures/water-closet-1.png" alt="" /> {item.tiolets} guest
                          toilet
                        </div>
                        <div className="bedroom">
                          <img src="/Pictures/double-bed-1.png" alt="" /> {item.bedrooms} bedrooms
                        </div>
                        <div className="bathroom">
                          <img src="/Pictures/bath-1.png" alt="" /> {item.bathrooms} bathrooms
                        </div>
                        <input type="checkbox" />
                      </div>
                    </div>
                </div>
                  )
                })}
                </div>
              )}
            </div>
            
          </div>
          
          
        )}

          <div className="page-numbers">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </button>
              {pageNumbers.map(number => (
              <p key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                {number}
              </p>
            ))}

              <button onClick={() => paginate(currentPage + 1)} disabled={currentItems.length < itemsPerPage}>
              Next
              </button>
          </div>

       
        
      </div>
    </div>
  );
};

export default MyListings;
