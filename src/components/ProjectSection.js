import * as React from "react";
import "../App.css";
import "./ProjectSection.css";
import ControlledCarousel from "./Carousel";
import project_img1 from '../images/MobileAppProject/welcome_screen.png';
import project_img2 from '../images/MobileAppProject/add_game_configuration.png';
import project_img3 from '../images/MobileAppProject/add_player_score.png';
import project_img4 from '../images/MobileAppProject/achievement_level.png';
import project_img5 from '../images/MobileAppProject/team_achievement_board.png';
import project_img6 from '../images/MobileAppProject/congrat_window.png';
import mongo_img1 from '../images/SynthesisProject/examples.jpg';
import mongo_img2 from '../images/SynthesisProject/results.jpg';

const mobile_images = [
  { src: project_img1, alt: 'First slide'},
  { src: project_img2, alt: 'Second slide'},
  { src: project_img3, alt: 'Third slide'},
  { src: project_img4, alt: 'Fourth slide'},
  { src: project_img5, alt: 'Fifth slide'},
  { src: project_img6, alt: 'Sixth slide'},
];

const mongo_images = [
  { src: mongo_img1, alt: 'First slide'},
  { src: mongo_img2, alt: 'Second slide'},
];

const ProjectSection = () => {
  // const renderCardCount = window.innerWidth < 300 ? 3 : BlogData.length;

  return (
    <div className="project-section-container">

        <div className="project-section-title">
          <h1>Academic and Personal Projects</h1>
        </div>

        <div>
          <div className="carousel-container">
            <div className="carousel-slider"><ControlledCarousel images={mobile_images}/></div>
            <div className="project-descript">
              <h2>Android Mobile Project</h2>
              <p>Group project from CMPT 276 Software Development Method course. </p>
              <p>This is an Android mobile application that can be used to record each players' score, and display the achievement level that the entire team achieves. One of the purposes of this application is to foster team collaboration. </p>
            </div>
          </div>
        </div>

        <div>
          <div className="carousel-container">
            <div className="carousel-slider"><ControlledCarousel images={mongo_images}/></div>
            <div className="project-descript">
              <h2>USRA Research Project: Synthesizing MongoDB queries with examples</h2>
              <p>Group research project. </p>
              <p>Topics and technologies: program synthesis with input and output examples, Java, MongoDB, software design patterns, unit testing, Python scripting.</p>
            </div>
          </div>
        </div>
        

    </div>
  );
};

export default ProjectSection;
