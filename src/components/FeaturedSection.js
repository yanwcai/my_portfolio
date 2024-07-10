import * as React from 'react';
import '../App.css';
import "./FeaturedSection.css";
import featured_img from "../images/SFU_img1.jpeg";

const FeaturedSection = () => {
  return (
    <div className="featured-container" >
        <div className="featured-content" >
            <div className="text-content">
                <h2>AI Research Lab</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo quis nunc at molestie. Suspendisse ac elit lectus. </p>
                <button className="button">Learn More</button>
            </div>

            <div className="image-content">
                <img src={featured_img} alt="Featured" />
            </div>
        </div>
    </div>
  );
};

export default FeaturedSection;
