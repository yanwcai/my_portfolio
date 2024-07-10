import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
// import FeaturedSection from '../FeaturedSection';
import ProjectSection from "../ProjectSection";
import ConnectSection from '../ConnectSection';
import Footer from "../Footer";
import "../Footer.css";

const Home = () => {
    return ( 
        <>
            <HeroSection title="Welcome!" description={""}/>
            {/* <FeaturedSection /> */}
            <ProjectSection />
            
            <ConnectSection />
            <Footer />
        </>
    );
};

export default Home;