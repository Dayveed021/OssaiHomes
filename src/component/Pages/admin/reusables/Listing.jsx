import React from 'react'
import "./reusables.scss";


const Listing = ({propertyImages,propertyTitle,address,city,state,created,updated,price,bathrooms,bedrooms,tiolets}) => {
  return (
            <div className="detail-list">
                    <div className="single-listing">
                    
                    <div className="image">
                        <img src={`https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties/images/${propertyImages}`} alt="room" />
                    </div>
                    <div className="list-content">
                        <h5 className="details">{propertyTitle}</h5>
                        <div className="address">
                            <img src="../../flaticons/location1.png" alt="icon" />
                            <p>{address}, {city}, {state} State</p>
                        </div>
                        <div className="date">
                            <p className="date-left">Added: {created}</p>
                            <p className="date-right">Updated: {updated}</p>
                        </div>
                        <div className="views">
                            <p className="view-left">Views: 0</p>
                            <p className="view-right">Automatic boost: 0</p>
                        </div>
                        <div className="prices">
                            <p className="price-left">{price}</p>
                            <p className="price-right">per year</p>
                        </div>
                        <div className="apartment-details">
                            <div>
                                <img src="/Pictures/double-bed-1.png" alt="" />
                                <p>{bedrooms} Bedrooms</p>
                            </div>
                            <div>
                                <img src="/Pictures/bath-1.png" alt="" />
                                <p>{bathrooms} bathrooms</p>
                            </div>
                            <div>
                                <img src="../../flaticons/water-closet1.png" alt="" />
                                <p>{tiolets} Toilet</p>
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