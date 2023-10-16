import React, { useState } from 'react';
import "../../styles/singleProperty.scss";
import { Navbar } from '../Navbar';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';


const SingleProperty = () => {
    const items = [
        "/Pictures/Rectangle-242.png",
        "/Pictures/Rectangle-243.png",
        "/Pictures/Rectangle-244.png",
        "/Pictures/Rectangle-245.png",
        "/Pictures/Rectangle-246.png",
        "/Pictures/Rectangle-247.png"
    ]
  return (
    <div>
        <Navbar />
        <div className="single-property">
            <div className="filter-search">
            <form action="">
                <div className="location">
                <input type="search"  placeholder="Location"/>
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
            <div className="property-agent">
                <div className="property">
                    <Carousel items={items} />
                    <Gallery items={items} />
                    <div className="agent-price">
                        <h2>Ossai Agent</h2>
                        <h3><span>6000000</span>/Year</h3>
                    </div>
                    <div className="address">
                        <img src="/flaticons/location.png" alt="" />
                        <p>No. 10 Iterigbi Warri Delta State</p>
                    </div>
                    <div className="details">
                        <div className="bedroom">
                            <p className="small">bathroom</p>
                            <p className="big">4 Bathrooms</p>
                        </div>
                        <div className="bedroom">
                            <p className="small">bedroom</p>
                            <p className="big">4 Bedrooms</p>
                        </div>
                        <div className="bedroom">
                            <p className="small">Guest Tiolet</p>
                            <p className="big">1 Guest Tiolet</p>
                        </div>
                        <div className="bedroom">
                            <p className="small">Monthly price</p>
                            <p className="big">5000000 / month</p>
                        </div>
                    </div>
                    <div className="property-description">
                        <h3>Property description</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......
                        </p>
                    </div>

                    <div className="amenities">
                        <div className="outdoor">
                            <h4>Outdoor</h4>
                            <ul>
                                <li>Balcony</li>
                                <li>Garage</li>
                                <li>Pool</li>
                                <li>Play Ground</li>
                            </ul>
                        </div>
                        <div className="outdoor">
                            <h4>House</h4>
                            <ul>
                                <li>Furnishing</li>
                                <li>Smoke Detector</li>
                                <li>Water Heater</li>
                                <li>Parking Garage</li> 
                            </ul>
                        </div>
                        <div className="outdoor">
                            <h4>Management</h4>
                            <ul>
                                <li>On site</li>
                                <li>Emergency maintence</li> 
                            </ul>
                        </div>
                    </div>
                    <div className="map">
                        <h4>Map</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.8919422033!2d5.836506189557786!3d5.575006655749263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041aef61e80653b%3A0xa9d80bc26021d7b2!2s330102%2C%20Iterigbi%2C%20Delta!5e0!3m2!1sen!2sng!4v1697458375961!5m2!1sen!2sng" title="address-map" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="similar-properties">
                        <h2>Similar properties</h2>
                        <div className="listing-details">
                            <div className="img-left">
                                <img src="/Pictures/Rectangle-245.png" alt="property-img" />
                            </div>
                            <div className="details-right">
                                <h3>Ossai Agent</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......
                                </p>
                                <h4>Warri Delta State</h4>
                                <div className="price-call-btn">
                                <p> <span>90000000</span>/month</p>
                                <button><img src="/Pictures/telephone-call-1.png" alt="" /> <span>Call</span></button>
                                </div>
                                <div className="facilaties">
                                <div className="toilet">
                                    <img src="/Pictures/water-closet-1.png" alt="" /> 1 guest toilet
                                </div>
                                <div className="bedroom">
                                    <img src="/Pictures/double-bed-1.png" alt="" /> 6 bedrooms
                                </div>
                                <div className="bathroom">
                                    <img src="/Pictures/bath-1.png" alt="" /> 6 bathrooms
                                </div>
                                <div className="heart">
                                    <img src="/Pictures/heart-3.png" alt="" />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="listing-details">
                            <div className="img-left">
                                <img src="/Pictures/Rectangle-245.png" alt="property-img" />
                            </div>
                            <div className="details-right">
                                <h3>Ossai Agent</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......
                                </p>
                                <h4>Warri Delta State</h4>
                                <div className="price-call-btn">
                                <p> <span>90000000</span>/month</p>
                                <button><img src="/Pictures/telephone-call-1.png" alt="" /> <span>Call</span></button>
                                </div>
                                <div className="facilaties">
                                <div className="toilet">
                                    <img src="/Pictures/water-closet-1.png" alt="" /> 1 guest toilet
                                </div>
                                <div className="bedroom">
                                    <img src="/Pictures/double-bed-1.png" alt="" /> 6 bedrooms
                                </div>
                                <div className="bathroom">
                                    <img src="/Pictures/bath-1.png" alt="" /> 6 bathrooms
                                </div>
                                <div className="heart">
                                    <img src="/Pictures/heart-3.png" alt="" />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="listing-details">
                            <div className="img-left">
                                <img src="/Pictures/Rectangle-245.png" alt="property-img" />
                            </div>
                            <div className="details-right">
                                <h3>Ossai Agent</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......
                                </p>
                                <h4>Warri Delta State</h4>
                                <div className="price-call-btn">
                                <p> <span>90000000</span>/month</p>
                                <button><img src="/Pictures/telephone-call-1.png" alt="" /> <span>Call</span></button>
                                </div>
                                <div className="facilaties">
                                <div className="toilet">
                                    <img src="/Pictures/water-closet-1.png" alt="" /> 1 guest toilet
                                </div>
                                <div className="bedroom">
                                    <img src="/Pictures/double-bed-1.png" alt="" /> 6 bedrooms
                                </div>
                                <div className="bathroom">
                                    <img src="/Pictures/bath-1.png" alt="" /> 6 bathrooms
                                </div>
                                <div className="heart">
                                    <img src="/Pictures/heart-3.png" alt="" />
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="listing-details">
                            <div className="img-left">
                                <img src="/Pictures/Rectangle-245.png" alt="property-img" />
                            </div>
                            <div className="details-right">
                                <h3>Ossai Agent</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu.......
                                </p>
                                <h4>Warri Delta State</h4>
                                <div className="price-call-btn">
                                <p> <span>90000000</span>/month</p>
                                <button><img src="/Pictures/telephone-call-1.png" alt="" /> <span>Call</span></button>
                                </div>
                                <div className="facilaties">
                                <div className="toilet">
                                    <img src="/Pictures/water-closet-1.png" alt="" /> 1 guest toilet
                                </div>
                                <div className="bedroom">
                                    <img src="/Pictures/double-bed-1.png" alt="" /> 6 bedrooms
                                </div>
                                <div className="bathroom">
                                    <img src="/Pictures/bath-1.png" alt="" /> 6 bathrooms
                                </div>
                                <div className="heart">
                                    <img src="/Pictures/heart-3.png" alt="" />
                                </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/mylist" className="properties">
                            <img src="/flaticons/back2.png" alt="" />
                            <p>
                                Back to property list 
                                <hr />
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="agent-filter">
                    you say
                </div>
        </div>
            </div>
            
    
        <Footer />
    </div>
  )
}


const Carousel = ({ items }) => {
    const [ currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel">
            <img className="prev" onClick={prevSlide} src="/flaticons/prev.png" alt="" />
            <div className="slide">
                <img src={items[currentSlide]} alt={`Slide ${currentSlide}`} />
            </div>
            <img className="next" onClick={nextSlide} src="/flaticons/next.png" alt="" />
        </div>
    )
}


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
            <img className="prev-btn" onClick={prevSlide} disabled={startIdx === 0} src="/flaticons/smallprev.png" alt="" />
            <div className="slides-container">
                {items.slice(startIdx, startIdx + 5).map((image, index) => (
                    <div className="slide" key={index}>
                        <img src={image} alt={`Slide ${startIdx + index}`} />
                    </div>
                 ))}
            </div>

            <img className="next-btn" onClick={nextSlide} disabled={startIdx === items.length - 5} src="/flaticons/smallnext.png" alt="" />
        </div>
    )
  
}
export default SingleProperty