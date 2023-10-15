import React from 'react';
import "../../styles/singleProperty.scss";
import { Navbar } from '../Navbar';
import { Footer } from './Footer';


const SingleProperty = () => {
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
                    hello
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

export default SingleProperty