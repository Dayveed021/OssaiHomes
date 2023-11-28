import React, { useState, useEffect } from "react";
import "../../styles/Landing.scss";
import house from "./icons/house 1.png";
import duplex from "./icons/duplex 1.png";
import building from "./icons/icons8-buildings-64 1.png";
import home from "./Pics/Image2.png";
import { Navbar } from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./Footer";
import { searchProperties } from "../../redux/search/searchSlice";
import { allProperties } from "../../redux/properties/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const property = useSelector((state) => state.property.allData);

  const [currentPage, setCurrentPage] = useState(0);
  const [listingsPerPage, setListingsPerPage] = useState(4);
  const totalPages = Math.ceil(property.length / listingsPerPage);

  let navigate = useNavigate();

  const [searchParams, setSearchParams] = useState({
    region: "",
    category: "",
    city: "",
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      [name]:
        name === "region" || name === "city" ? value.toLowerCase() : value,
    }));
  };

  const performSearch = () => {
    navigate("/search", searchParams);

    localStorage.setItem("region", searchParams.region);
    localStorage.setItem("category", searchParams.category);
    localStorage.setItem("city", searchParams.city);
    localStorage.setItem("type", searchParams.type);
  };

  let dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.property
  );

  console.log(property, "property");

  useEffect(() => {
    function handleResize() {
      let newListingPerPage = 4;
      if (window.innerWidth <= 993) {
        newListingPerPage = 3;
      }
      if (window.innerWidth <= 768) {
        newListingPerPage = 2;
      }
      if (window.innerWidth <= 425) {
        newListingPerPage = 1;
      }
      setListingsPerPage(newListingPerPage);
    }

    handleResize(); // Set initial value on component mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [property]); // Re-run the effect when the popularListings prop changes

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPages - 1);
    }
  };

  const slicedListings = property?.slice(
    currentPage * listingsPerPage,
    (currentPage + 1) * listingsPerPage
  );

  useEffect(() => {
    dispatch(allProperties());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="landing_page">
        <div className="hero-con">
          <div className="hero-opacity">
            <div className="hero-contents">
              <h1>Find a property in Nigeria</h1>
              <input
                type="text"
                placeholder="Search a Region"
                name="region"
                value={searchParams.location}
                onChange={handleInputChange}
              />
              <div
                className="search"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div className="search-props">
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={searchParams.city}
                    onChange={handleInputChange}
                  />
                  <div className="select">
                    <select
                      name="type"
                      id=""
                      value={searchParams.type}
                      onChange={handleInputChange}
                    >
                      <option value="">Type</option>
                      <option value="Buy">Buy</option>
                      <option value="Rent">Rent </option>
                    </select>
                    <select
                      name="category"
                      id=""
                      value={searchParams.category}
                      onChange={handleInputChange}
                    >
                      <option value="">Category</option>
                      <option value="Duplex">Duplex</option>
                      <option value="Mansion">Mansion</option>
                      <option value="Apartment">Apartment</option>
                    </select>
                  </div>

                  <button className="search-btn" onClick={performSearch}>
                    Search
                  </button>
                </div>
                <button className="search-btn-2" onClick={performSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="service-con">
            <h1>Our Services</h1>
            <div className="service-cards">
              <div className="card">
                <div className="card-content">
                  <h2>RENT</h2>
                  <img src={house} alt="house" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    facere atque nisi minima doloribus, hic dolore quo vel
                    cumque, laborum voluptates. Architecto asperiores voluptatem
                    illo mollitia sint rerum voluptatibus perspiciatis?
                  </p>
                </div>
                <div className="card-content">
                  <h2>BUY</h2>
                  <img src={duplex} alt="house" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    facere atque nisi minima doloribus, hic dolore quo vel
                    cumque, laborum voluptates. Architecto asperiores voluptatem
                    illo mollitia sint rerum voluptatibus perspiciatis?
                  </p>
                </div>
                <div className="card-content">
                  <h2>LIST</h2>
                  <img src={building} alt="house" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    facere atque nisi minima doloribus, hic dolore quo vel
                    cumque, laborum voluptates. Architecto asperiores voluptatem
                    illo mollitia sint rerum voluptatibus perspiciatis?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured">
          <div className="featured-con">
            <h1>Featured Listings</h1>
            <div className="listings">
              <div className="list-con">
                <div className="list-card">
                  <img src={home} alt="" />
                  <div className="list-desc">
                    <h2>5 Bedroom Duplex</h2>
                    <ul>
                      <li>Warri Delta State</li>
                      <li>No.2 Iterigbi Warri Delta State</li>
                    </ul>
                    <div className="price">
                      <h2>
                        &#8358;200000 <span>/ month</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="list-card">
                  <img src={home} alt="" />
                  <div className="list-desc">
                    <h2>5 Bedroom Duplex</h2>
                    <ul>
                      <li>Warri Delta State</li>
                      <li>No.2 Iterigbi Warri Delta State</li>
                    </ul>
                    <div className="price">
                      <h2>
                        &#8358;200000 <span>/ month</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="list-card">
                  <img src={home} alt="" />
                  <div className="list-desc">
                    <h2>5 Bedroom Duplex</h2>
                    <ul>
                      <li>Warri Delta State</li>
                      <li>No.2 Iterigbi Warri Delta State</li>
                    </ul>
                    <div className="price">
                      <h2>
                        &#8358;200000 <span>/ month</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="list-card">
                  <img src={home} alt="" />
                  <div className="list-desc">
                    <h2>5 Bedroom Duplex</h2>
                    <ul>
                      <li>Warri Delta State</li>
                      <li>No.2 Iterigbi Warri Delta State</li>
                    </ul>
                    <div className="price">
                      <h2>
                        &#8358;200000 <span>/ month</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="list-card">
                  <img src={home} alt="" />
                  <div className="list-desc">
                    <h2>5 Bedroom Duplex</h2>
                    <ul>
                      <li>Warri Delta State</li>
                      <li>No.2 Iterigbi Warri Delta State</li>
                    </ul>
                    <div className="price">
                      <h2>
                        &#8358;200000 <span>/ month</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="list-card">
                  <img src={home} alt="" />
                  <div className="list-desc">
                    <h2>5 Bedroom Duplex</h2>
                    <ul>
                      <li>Warri Delta State</li>
                      <li>No.2 Iterigbi Warri Delta State</li>
                    </ul>
                    <div className="price">
                      <h2>
                        &#8358;200000 <span>/ month</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              style={{
                padding: "15px 40px 15px 40px",
                fontSize: "16px",
              }}
            >
              View More
            </button>
          </div>
        </div>
        <div className="popular">
          <div className="popular-con">
            <div className="p-title">
              <h1>Popular Listings</h1>
              <span>
                <div className="arrow-con" onClick={handlePrevPage}>
                  <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black" />
                </div>
                <div className="arrow-con" onClick={handleNextPage}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="2x"
                    color="black"
                  />
                </div>
              </span>
            </div>
            <div className="options">
              {slicedListings.map((listing) => (
                <div className="opt-main" key={listing._id}>
                  <div className="opt-con">
                    <img
                      src={`https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties/images/${listing.propertyImages[0]}`}
                      alt={listing.title}
                    />
                    <div className="opt-det">
                      <Link to={`/property/${listing._id}`}>
                        <h3>
                          {listing.propertyTitle?.length > 21
                            ? listing.propertyTitle.slice(0, 21) + "..."
                            : listing.propertyTitle}
                        </h3>
                      </Link>
                      <p>
                        {listing.propertyDesc?.length > 30
                          ? listing.propertyDesc.slice(0, 33) + "..."
                          : listing.propertyDesc}
                      </p>
                      <p>
                        {listing.propertyLocation?.length > 27
                          ? listing.propertyLocation.slice(0, 30) + "..."
                          : listing.propertyLocation}
                      </p>
                      <div className="price">
                        <h2>
                          {listing.pricePerMonth} <span>/ month</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mobilecntrl">
              <div className="arrow-con-2" onClick={handlePrevPage}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </div>
              <div className="page-indicator">
                Page {currentPage + 1}/{totalPages}
              </div>
              <div className="arrow-con-2" onClick={handleNextPage}>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
