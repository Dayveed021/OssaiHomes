import React, { useState } from 'react';
import "../../styles/singleProperty.scss";
import { Navbar } from '../Navbar';
import { Footer } from './Footer';


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