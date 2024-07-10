import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import project_img1 from '../images/MobileAppProject/welcome_screen.png';
import project_img2 from '../images/MobileAppProject/add_game_configuration.png';
import project_img3 from '../images/MobileAppProject/add_player_score.png';
import project_img4 from '../images/MobileAppProject/achievement_level.png';
import project_img5 from '../images/MobileAppProject/team_achievement_board.png';
import project_img6 from '../images/MobileAppProject/congrat_window.png';
import './Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="d-inline-block w-100"
          src={project_img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome Screen</h3>
          {/* <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={project_img2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Add Game Configuration</h3>
          <p>The users can add a new game configuration.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={project_img3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Add player scores</h3>
          <p>Each player's score can be added here.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-inline-block w-100"
          src={project_img4}
          alt="Forth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-inline-block w-100"
          src={project_img5}
          alt="Fifth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-inline-block w-100"
          src={project_img6}
          alt="Sixth slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ControlledCarousel;