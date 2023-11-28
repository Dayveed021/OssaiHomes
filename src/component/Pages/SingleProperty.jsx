import React, { useEffect, useState } from "react";
import "../../styles/singleProperty.scss";
import { Navbar } from "../Navbar";
import { Footer } from "./Footer";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  allProperties,
  singleProperty,
} from "../../redux/properties/propertySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const SingleProperty = () => {
  const { propertyId } = useParams();

  const dispatch = useDispatch();
  const property = useSelector((state) => state.property.data);
  const properties = useSelector((state) => state.property.allData);
  useEffect(() => {
    dispatch(singleProperty(propertyId));
    dispatch(allProperties());
  }, []);

  const { propertyImages } = property;

  const items = [];

  const Image = propertyImages?.map((image) => {
    items.push(
      `https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties/images/${image}`
    );
  });

  const images = () => {
    let full = Image;
    return full;
  };

  useEffect(() => {
    images();
  }, []);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <Navbar />
      <div className="single-property">
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
        <div className="property-agent">
          <div className="property">
            <Carousel items={items} />
            <Gallery items={items} />
            <GalleryMobile items={items} />
            <div className="agent-price">
              <h2>{property.agent?.name}</h2>
              <h3>
                <span>{property.totalPackage}</span>/Year
              </h3>
            </div>
            <div className="address">
              <img src="/flaticons/location.png" alt="" />
              <p>{property.propertyLocation}</p>
            </div>
            <div className="details">
              <div className="bedroom">
                <p className="small">Sitting Room</p>
                <p className="big">{property.sittingRoom} Sitting Room(s)</p>
              </div>
              <div className="bedroom">
                <p className="small">bedroom</p>
                <p className="big">{property.bedrooms} Bedroom(s)</p>
              </div>
              <div className="bedroom">
                <p className="small">Tiolet</p>
                <p className="big">{property.tiolets} Tiolet(s)</p>
              </div>
              <div className="bedroom">
                <p className="small">Monthly price</p>
                <p className="big">{property.pricePerMonth} / month</p>
              </div>
            </div>
            <div className="property-description">
              <h3>Property description</h3>
              <p>{property.propertyDesc}</p>
            </div>
            <div className="map">
              <h4>Map</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.8919422033!2d5.836506189557786!3d5.575006655749263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041aef61e80653b%3A0xa9d80bc26021d7b2!2s330102%2C%20Iterigbi%2C%20Delta!5e0!3m2!1sen!2sng!4v1697458375961!5m2!1sen!2sng"
                title={property.propertyLocation}
                allowfullscreen=""
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="agent-filter">
            <div className="agent-contact">
              <h3>Contact Agent</h3>
              <div className="phone">
                <img src="/flaticons/telephone-call.png" alt="" />
                <p>08131877486</p>
              </div>
              <div className="phone">
                <img src="/flaticons/whatsapp.png" alt="" />
                <p>0813187486</p>
              </div>
              <div className="phone">
                <img src="/flaticons/mail.png" alt="" />
                <p>{property.agent?.email}</p>
              </div>
              <div className="share-favourite">
                <div className="share">
                  <img src="/flaticons/share.png" alt="" />
                  <p>Share</p>
                </div>

                <div className="share">
                  <img src="/flaticons/favourite.png" alt="" />
                  <p>Favourite</p>
                </div>
              </div>
            </div>
            {/* <div className="advanced-search">
              <h3>Advanced Search filter</h3>
              <form action="">
                <div className="location">
                  <input type="text" placeholder="Location" />
                </div>

                <div className="category">
                  <label for="category">category</label>
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
                    <label for="max-price">Max Price</label>
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
            </div> */}
          </div>
        </div>
        <div className="similar-properties">
          <h2>Similar properties</h2>
          {properties.slice(0, 3).map((all) => (
            <div className="listing-details" key={all._id}>
              <div className="img-left">
                <img
                  src={`https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties/images/${all.propertyImages[0]}`}
                  alt="property-img"
                />
              </div>
              <div className="details-right">
                <h3>{all.agent?.name}</h3>
                <p>
                  {all.propertyDesc?.length > 30
                    ? all.propertyDesc.slice(0, 33) + "..."
                    : all.propertyDesc}
                </p>
                <div className="price-call-btn">
                  <p>
                    <span>{all.pricePerMonth}</span>/ month
                  </p>
                  <button>
                    <img src="/Pictures/telephone-call-1.png" alt="" />{" "}
                    <span>Call</span>
                  </button>
                </div>
                <div className="facilaties">
                  <div className="toilet">
                    <img src="/Pictures/water-closet-1.png" alt="" /> toilet(s)
                  </div>
                  <div className="bedroom">
                    <img src="/Pictures/double-bed-1.png" alt="" /> bedroom(s)
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

          <Link to="/mylist" className="properties">
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            <p>
              Back to property list
              <hr />
            </p>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <img
        className="prev"
        onClick={prevSlide}
        src="/flaticons/prev.png"
        alt=""
      />
      <div className="slide">
        <img src={items[currentSlide]} alt={`Slide ${currentSlide}`} />
      </div>
      <img
        className="next"
        onClick={nextSlide}
        src="/flaticons/next.png"
        alt=""
      />
    </div>
  );
};

const Gallery = ({ items }) => {
  const [startIdx, setStartIdx] = useState(0);

  const nextSlide = () => {
    setStartIdx((prevStartIdx) => Math.min(prevStartIdx + 1, items.length - 5));
  };

  const prevSlide = () => {
    setStartIdx((prevStartIdx) => Math.max(prevStartIdx - 1, 0));
  };

  return (
    <div className="gallery">
      {/* <img
        className="prev-btn"
        onClick={prevSlide}
        disabled={startIdx === 0}
        src="/flaticons/smallprev.png"
        alt=""
      /> */}
      <div className="slides-container">
        {items.slice(startIdx, startIdx + 5).map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${startIdx + index}`} />
          </div>
        ))}
      </div>

      {/* <img
        className="next-btn"
        onClick={nextSlide}
        disabled={startIdx === items.length - 5}
        src="/flaticons/smallnext.png"
        alt=""
      /> */}
    </div>
  );
};

const GalleryMobile = ({ items }) => {
  const [startIdx, setStartIdx] = useState(0);

  const nextSlide = () => {
    setStartIdx((prevStartIdx) => Math.min(prevStartIdx + 1, items.length - 3));
  };

  const prevSlide = () => {
    setStartIdx((prevStartIdx) => Math.max(prevStartIdx - 1, 0));
  };

  return (
    <div className="gallerymobile">
      {/* <img
        className="prev-btn"
        onClick={prevSlide}
        disabled={startIdx === 0}
        src="/flaticons/smallprev.png"
        alt=""
      /> */}
      <div className="slides-container">
        {items.slice(startIdx, startIdx + 3).map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${startIdx + index}`} />
          </div>
        ))}
      </div>

      {/* <img
        className="next-btn"
        onClick={nextSlide}
        disabled={startIdx === items.length - 5}
        src="/flaticons/smallnext.png"
        alt=""
      /> */}
    </div>
  );
};

export default SingleProperty;
