import * as React from 'react';
import '../App.css';
import "./AboutSection.css";
import profile_img from "../images/Profile.JPG";

const AboutSection = () => {
  return (
    <div className="about-container" >
        <div className="about-content" >
            <div className="text-content">
                <h2>About Me</h2>
                <p>I am a CS student at Simon Fraser University. My interests are software development and web technologies.  </p>
                {/* <button className="button">Learn More</button> */}
            </div>

            <div className="image-content">
                <img src={profile_img} alt="profile" />
            </div>
        </div>
    </div>
  );
};

export default AboutSection;
