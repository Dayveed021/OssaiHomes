import React from "react";
import "../../styles/Landing.scss";
import house from "./icons/house 1.png";
import duplex from "./icons/duplex 1.png";
import building from "./icons/icons8-buildings-64 1.png";
import home from "./Pics/Image2.png";
const LandingPage = () => {
  return (
    <div>
      <div className="landing_page">
        <div className="hero-con">
          <div className="hero-opacity">
            <div className="hero-contents">
              <h1>Find a property in Nigeria</h1>
              <input type="text" placeholder=" Search a Region" />
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
                <button>Search</button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
