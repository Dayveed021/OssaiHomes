import React, { useEffect, useState } from "react";
import "../../styles/MyList.scss";
import { Navbar } from "../Navbar";
import { Footer } from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { searchProperties } from "../../redux/search/searchSlice";
import { Link, useParams } from "react-router-dom";

function MyList() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  // Retrieve parameters from the URL
  // const { searchParams } = useParams();

  const region = localStorage.getItem("region");
  const category = localStorage.getItem("category");
  const city = localStorage.getItem("city");
  const type = localStorage.getItem("type");

  // Dispatch the searchProperties action when parameters change

  const property = useSelector((state) => state.search.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      searchProperties({
        location: region,
        type,
        category,
        city,
      })
    );
  }, [dispatch, region, type, category, city]);

  return (
    <>
      <Navbar />
      <div className="search-listing">
        <div className="filter-search">
          <form action="">
            <div className="location">
              <input type="search" placeholder="Location" />
            </div>

            <div className="category">
              <label for="price">Price</label>
              <select id="price" name="price">
                <option value=""></option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
              </select>
            </div>
            <div className="category">
              <label for="price">Category</label>
              <select id="category" name="category">
                <option value=""></option>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="category">
              <label for="type">Type</label>
              <select id="type" name="type">
                <option value=""></option>
                <option value="rent">Rent</option>
                <option value="buy">buy</option>
              </select>
            </div>

            <div className="category">
              <label for="bedrooms">Bedrooms</label>
              <select id="bedrooms" name="bedrooms">
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </form>
        </div>
        <div onClick={togglePopup} className="mobile-advanced-filter">
          <p>Show Advanced Filters</p>
        </div>
        {isPopupVisible && (
          <div className="advanced-search1">
            <h3>Advanced Search filter</h3>
            <form action="">
              <div className="location">
                <input type="search" placeholder="Location" />
              </div>

              <div className="category">
                <label for="category">Category</label>
                <select id="category" name="category">
                  <option></option>
                  <option value="apartment">Apartment</option>
                  <option value="duplex">Duplex</option>
                </select>
              </div>

              <div className="price">
                <div className="min-price">
                  <label for="min-price">Min Price</label>
                  <select id="min-price" name="min-price">
                    <option value=""></option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                  </select>
                </div>
                <div className="min-price">
                  <label for="max-price">Max price</label>
                  <select id="max-price" name="max-price">
                    <option value=""></option>
                    <option value="10000">10000</option>
                    <option value="20000">20000</option>
                  </select>
                </div>
              </div>

              <div className="price">
                <div className="min-price">
                  <label for="type">Type</label>
                  <select id="type" name="type">
                    <option value=""></option>
                    <option value="apartment">apartment</option>
                    <option value="duplex">duplex</option>
                  </select>
                </div>
                <div className="min-price">
                  <label for="furnish">Furnish</label>
                  <select id="furnish" name="furnish">
                    <option value=""></option>
                    <option value="fully">Fully</option>
                    <option value="partially">Partially</option>
                  </select>
                </div>
              </div>
              <div className="price">
                <div className="min-price">
                  <label for="bedrooms">Bedroom</label>
                  <select id="bedrooms" name="bedrooms">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="min-price">
                  <label for="time-listed">Time Listed</label>
                  <select id="time-listed" name="time-listed">
                    <option value=""></option>
                    <option value="8">8am</option>
                    <option value="9">9am</option>
                  </select>
                </div>
              </div>

              <div className="keywords">
                <input type="search" placeholder="keywords e.g pool,garage" />
              </div>
            </form>
          </div>
        )}

        <h2> Showing Listings "{property[0]?.city}" in Nigeria</h2>

        <div className="search-result">
          <div className="search-listing">
            <div className="heading-button">
              <p>Page 1 / 200: 400 properties available </p>
              <button>
                Sort by: Default{" "}
                <img src="/flaticons/expand-button3.png" alt="" />{" "}
              </button>
            </div>
            {property.map((result) => (
              <div className="listing-details">
                <div className="img-left">
                  <img
                    src={`https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties/images/${result.propertyImages[0]}`}
                    alt="property-img"
                  />
                </div>
                <div className="details-right">
                  <h3>{result.agent}</h3>
                  <p>{result.propertyDesc}</p>
                  <h4>{result.propertyLocation}</h4>
                  <div className="price-call-btn">
                    <p>
                      {" "}
                      <span>90000000</span>/month
                    </p>
                    <button>
                      <img src="/Pictures/telephone-call-1.png" alt="" />{" "}
                      <span>Call</span>
                    </button>
                  </div>
                  <div className="facilaties">
                    <div className="toilet">
                      <img src="/Pictures/water-closet-1.png" alt="" />{" "}
                      {result.tiolets} toilet(s)
                    </div>
                    <div className="bedroom">
                      <img src="/Pictures/double-bed-1.png" alt="" />{" "}
                      {result.bedrooms} bedroom(s)
                    </div>
                    <div className="bathroom">
                      <img src="/Pictures/bath-1.png" alt="" /> 6 bathroom(s)
                    </div>
                    <div className="heart">
                      <img src="/Pictures/heart-3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyList;
