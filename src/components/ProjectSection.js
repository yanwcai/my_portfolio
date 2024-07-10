import * as React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./ProjectSection.css";
import project_img1 from "../images/blog_img1.jpeg";
import { BlogData } from "../ProjectData";
import { ActionAreaCard } from "./BlogCard";
import ControlledCarousel from "./Carousel";

const ProjectSection = () => {
  // const renderCardCount = window.innerWidth < 300 ? 3 : BlogData.length;

  return (
    <div className="project-section-container">
      <div className="project-content">
        <div className="project-section-title">
          <h1>Academic and Personal Projects</h1>
          {/* <h3>Featured Story</h3> */}
        </div>


        <div className="carousel-container">
          <div className="carousel-slider"><ControlledCarousel /></div>
          <div className="project-descript">
            <h2>
              <Link to='mobile_project' className="project-link">Android Mobile Project</Link>
            </h2>
            <p>Group project from CMPT 276 Software Development Method course. </p>
            <p>This is an Android mobile application that can be used to record each players' score, and display the achievement level that the entire team achieves. One of the purposes of this application is to foster team collaboration. </p>
          </div>
          
        </div>

        {/* <div className="main-project">
              <div className="main-project-img">
                <img src={project_img1} alt="feature project" />
              </div>
            
              <div className="main-project-content">
                <h2> </h2>
              </div>
            </div> */}      

        {/* <div className="other-projects">
              <div className="card-row">
                {BlogData.slice(0, renderCardCount).map((card) => (
                  <ActionAreaCard key={card.id} title={card.title} authors={card.authors} date={card.date} imageURL={card.imageURL} link={card.link}/>
                ))}
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default ProjectSection;
