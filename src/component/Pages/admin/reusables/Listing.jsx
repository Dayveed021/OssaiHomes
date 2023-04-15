import React from 'react'
import "./reusables.scss";


const Listing = () => {
  return (
            <div className="detail-list">
                    <div className="single-listing">
                    
                    <div className="image">
                        <img src="../../flaticons/Rectangle346.png" alt="room" />
                    </div>
                    <div className="list-content">
                        <h5 className="details">Furnished 5 Bedroom</h5>
                        <div className="address">
                            <img src="../../flaticons/location1.png" alt="icon" />
                            <p>No. 10 Iterigbe, Warri, Delta State</p>
                        </div>
                        <div className="date">
                            <p className="date-left">Added: 21-02-23</p>
                            <p className="date-right">Updated: 21-02-23</p>
                        </div>
                        <div className="views">
                            <p className="view-left">Views: 0</p>
                            <p className="view-right">Automatic boost: 0</p>
                        </div>
                        <div className="prices">
                            <p className="price-left">25,000,000</p>
                            <p className="price-right">per year</p>
                        </div>
                        <div className="apartment-details">
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>6 Toilet</p>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    <div  className="btn-list">
                        <button>Action <img src="../../flaticons/expand-button3.png" alt="" /></button>
                    </div>
                </div>
  )
}

export default Listing