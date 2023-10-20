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

const popularListings = [
  {
    id: 1,
    title: "Beautiful House in Lagos",
    image: "https://example.com/house1.jpg",
    description: "This is a beautiful house located in Lagos, Nigeria.",
    address: "No 1, Lagos Street, Lagos, Nigeria",
    price: "₦5000",
  },
  {
    id: 2,
    title: "Luxury Apartment in Abuja",
    image: "https://example.com/house2.jpg",
    description: "This is a luxury apartment located in Abuja, Nigeria.",
    address: "No 1, Abuja Street, Abuja, Nigeria",
    price: "₦8000",
  },
  {
    id: 3,
    title: "Cozy Cottage in Enugu",
    image: "https://example.com/house3.jpg",
    description: "This is a cozy cottage located in Enugu, Nigeria.",
    address: "No 1, Enugu Street, Enugu, Nigeria",
    price: "₦3000",
  },
  {
    id: 4,
    title: "Spacious Villa in Port Harcourt",
    image: "https://example.com/house4.jpg",
    description: "This is a spacious villa located in Port Harcourt, Nigeria.",
    address: "No 1, Port Harcourt Street, Port Harcourt, Nigeria",
    price: "₦1200",
  },
  {
    id: 5,
    title: "Elegant Mansion in Ibadan",
    image: "https://example.com/house5.jpg",
    description: "This is an elegant mansion located in Ibadan, Nigeria.",
    address: "No 1, Ibadan Street, Ibadan, Nigeria",
    price: "₦15000",
  },
  {
    id: 6,
    title: "Modern Duplex in Kano",
    image: "https://example.com/house6.jpg",
    description: "This is a modern duplex located in Kano, Nigeria.",
    address: "No 1, Kano Street, Kano, Nigeria",
    price: "₦10000",
  },
  {
    id: 7,
    title: "Classy Bungalow in Owerri",
    image: "https://example.com/house7.jpg",
    description: "This is a classy bungalow located in Owerri, Nigeria.",
    address: "No 1, Owerri Street, Owerri, Nigeria",
    price: "₦4000",
  },
  {
    id: 8,
    title: "Exquisite 3 Bedroom Flat",
    description: "Beautiful flat with modern finishings",
    address: "No 3, Adeyinka street, Lekki Phase 1, Lagos",
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
    price: "₦300,000",
  },
  {
    id: 9,
    title: "Lovely 2 Bedroom Bungalow",
    description: "Charming bungalow with spacious compound",
    address: "No 12, Olu Adegbite street, Ikeja, Lagos",
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
    price: "₦250,000",
  },
  {
    id: 10,
    title: "Luxurious 4 Bedroom Duplex",
    description: "Premium duplex with high-end features",
    address: "No 6, Alhaji Abdul street, Victoria Island, Lagos",
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
    price: "₦500,000",
  },
  {
    id: 11,
    title: "Spacious 1 Bedroom Apartment",
    description: "Comfortable apartment in a serene environment",
    address: "No 5, Wole Olateju street, Surulere, Lagos",
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
    price: "₦150,000",
  },
  {
    id: 12,
    title: "Tastefully Furnished 2 Bedroom Flat",
    description: "Fully furnished flat with modern amenities",
    address: "No 8, Adekunle Fajuyi street, GRA, Ikeja, Lagos",
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
    price: "₦400,000",
  },
  {
    id: 13,
    title: "Beautiful 3 Bedroom Duplex",
    description: "Lovely duplex in a gated estate",
    address: "No 7, Bode Thomas street, Maryland, Lagos",
    image: "https://via.placeholder.com/300x200.png?text=Listing+Image",
    price: "₦350,000",
  },
];

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [listingsPerPage, setListingsPerPage] = useState(4);
  const totalPages = Math.ceil(popularListings.length / listingsPerPage);

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
  }, [popularListings]); // Re-run the effect when the popularListings prop changes

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

  const slicedListings = popularListings.slice(
    currentPage * listingsPerPage,
    (currentPage + 1) * listingsPerPage
  );

  return (
    <div>
      <Navbar />
      <div className="landing_page">
        <div className="hero-con">
          <div className="hero-opacity">
            <div className="hero-contents">
              <h1>Find a property in Nigeria</h1>
              <input type="text" placeholder="Search a Region" />
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
                  <select name="" id="">
                    <option value="">Min-price</option>
                  </select>
                  <select name="" id="">
                    <option value="">Max-price</option>
                  </select>
                  <select name="" id="">
                    <option value="">Bedroom</option>
                  </select>
                  <select name="" id="">
                    <option value="">Type</option>
                  </select>
                  <button className="search-btn">Search</button>
                </div>
                <button className="search-btn-2">Search</button>
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
                <div className="opt-main" key={listing.id}>
                  <div className="opt-con">
                    <img src={listing.image} alt={listing.title} />
                    <div className="opt-det">
                      <h3>
                        {listing.title.length > 21
                          ? listing.title.slice(0, 21) + "..."
                          : listing.title}
                      </h3>
                      <p>
                        {listing.description.length > 30
                          ? listing.description.slice(0, 33) + "..."
                          : listing.description}
                      </p>
                      <p>
                        {listing.address.length > 27
                          ? listing.address.slice(0, 30) + "..."
                          : listing.address}
                      </p>
                      <div className="price">
                        <h2>
                          {listing.price} <span>/ month</span>
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
              <div className="nxt">
                {Array.from(Array(totalPages)).map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={i === currentPage ? faCircle : faCircle}
                    style={{ height: "10px", width: "10px", margin: "0 5px" }}
                    color={i === currentPage ? "black" : "gray"}
                  />
                ))}
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
