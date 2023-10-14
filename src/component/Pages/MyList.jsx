import React, { useState } from "react";
import "../../styles/MyList.scss";
import { Navbar } from "../Navbar";
import { Footer } from "./Footer";

function MyList() {

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <>
      <Navbar />
      <div className="search-listing">
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
        <div onClick={togglePopup} className="mobile-advanced-filter">
          <p>Show Advanced Filters</p>
        </div>
        {isPopupVisible &&  (<div className="advanced-search1">
                      <h3>Advanced Search filter</h3>
                      <form action="">
                        <div className="location">
                          <input type="search"  placeholder="Location"/>
                        </div>

                        <div className="category">
                          <p>Category</p>
                          <select id="category" name="category">
                          <option></option>
                          <option value="apartment">Apartment</option>
                          <option value="duplex">Duplex</option>
                        </select>       
                        </div>

                        <div className="price">
                          <div className="min-price">
                            <input type="text"  placeholder="Min Price"/>
                            <select id="category" name="category">
                            <option value=""></option>
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>
                            </select>   
                          </div>
                          <div className="min-price">
                            <input type="text"  placeholder="Max Price"/>
                            <select id="category" name="category">
                              <option value=""></option>
                            <option value="10000">10000</option>
                            <option value="20000">20000</option>
                            </select>   
                          </div>
                        </div>

                        <div className="price">
                          <div className="min-price">
                            <input type="text"  placeholder="Type"/>
                            <select id="category" name="category">
                            <option value=""></option>
                            <option value="apartment">apartment</option>
                            <option value="duplex">duplex</option>
                            </select>   
                          </div>
                          <div className="min-price">
                            <input type="number"  placeholder="Furnish"/>
                            <select id="category" name="category">
                            <option value=""></option>
                            <option value="fully">Fully</option>
                            <option value="partially">Partially</option>
                            </select>   
                          </div>
                        </div>
                        <div className="price">
                          <div className="min-price">
                            <input type="text"  placeholder="Bedrooms"/>
                            <select id="category" name="category">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>   
                          </div>
                          <div className="min-price">
                            <input type="text"  placeholder="Time listed"/>
                            <select id="category" name="category">
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
                </div>)}

        <h2> Showing Listings "Warri" in Nigeria</h2>

        <div className="search-result">
          <div className="search-listing">
            <div className="heading-button">
              <p>Page 1 / 200: 400 properties available </p>
              <button>Sort by: Default <img  src="/flaticons/expand-button3.png" alt="" /> </button>
            </div>
            <div className="listing-details">
              <div className="img-left">
                <img src="/Pictures/Rectangle-244.png" alt="property-img" />
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
                <img src="/Pictures/Rectangle-242.png" alt="property-img" />
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
                <img src="/Pictures/Rectangle-243.png" alt="property-img" />
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
                <img src="/Pictures/Rectangle-247.png" alt="property-img" />
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
                <img src="/Pictures/Rectangle-246.png" alt="property-img" />
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
          </div>
          <div className="search-input">
                <div className="advanced-search">
                      <h3>Advanced Search filter</h3>
                      <form action="">
                        <div className="location">
                          <input type="text"  placeholder="Location"/>
                        </div>

                        <div className="category">
                          <p>Category</p>
                          <select id="category" name="category">
                          <option></option>
                          <option value="apartment">Apartment</option>
                          <option value="duplex">Duplex</option>
                        </select>       
                        </div>

                        <div className="price">
                          <div className="min-price">
                            <input type="text"  placeholder="Min Price"/>
                            <select id="category" name="category">
                            <option value=""></option>
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>
                            </select>   
                          </div>
                          <div className="min-price">
                            <input type="text"  placeholder="Max Price"/>
                            <select id="category" name="category">
                              <option value=""></option>
                            <option value="10000">10000</option>
                            <option value="20000">20000</option>
                            </select>   
                          </div>
                        </div>

                        <div className="price">
                          <div className="min-price">
                            <input type="text"  placeholder="Type"/>
                            <select id="category" name="category">
                            <option value=""></option>
                            <option value="apartment">apartment</option>
                            <option value="duplex">duplex</option>
                            </select>   
                          </div>
                          <div className="min-price">
                            <input type="number"  placeholder="Furnish"/>
                            <select id="category" name="category">
                            <option value=""></option>
                            <option value="fully">Fully</option>
                            <option value="partially">Partially</option>
                            </select>   
                          </div>
                        </div>
                        <div className="price">
                          <div className="min-price">
                            <input type="text"  placeholder="Bedrooms"/>
                            <select id="category" name="category">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>   
                          </div>
                          <div className="min-price">
                            <input type="text"  placeholder="Time listed"/>
                            <select id="category" name="category">
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

               

                <div className="nearby">
                  <h3>Nearby cities</h3>
                  <div className="check">
                    <input type="checkbox" id="myCheckbox"/>
                    <label for="myCheckbox">Ughelli</label>
                  </div>
                
                  <div className="check">
                    <input type="checkbox" id="myCheckbox"/>
                    <label for="myCheckbox">Warri</label>
                  </div>
                  <div className="check">
                    <input type="checkbox" id="myCheckbox"/>
                    <label for="myCheckbox">Jeddo</label>
                  </div>
                  <div className="check">
                    <input type="checkbox" id="myCheckbox"/>
                    <label for="myCheckbox">Ozoro</label>
                  </div>
                  <div className="check">
                    <input type="checkbox" id="myCheckbox"/>
                    <label for="myCheckbox">Ole</label>
                  </div>
                  <div className="check">
                    <input type="checkbox" id="myCheckbox"/>
                    <label for="myCheckbox">Asaba</label>
                  </div>
                  <div className="check">
                    <input type="checkbox" id="myCheckbox"/>
                    <label for="myCheckbox">Orerokpe</label>
                  </div>

                </div>
          </div>


        </div>
       
        

      
      </div>
      <Footer />
    </>
  );
}

export default MyList;
