import React from "react";
import Footer from "../../Footer";
import BlogPage from "../../BlogPage";
import  { FeatureBlogData, BlogData } from "../../../BlogData";
import "../../HeroSection.css";
import "../../Footer.css";
import "../../BlogPage.css";
 
const FeatureBlogPage = () => {
    return (
        <>  
            <BlogPage title={FeatureBlogData.title} intro={FeatureBlogData.intro} authors={FeatureBlogData.authors} date={FeatureBlogData.date} imageURL={FeatureBlogData.imageURL} content={FeatureBlogData.content} />
            <Footer />
        </>
    );
};
 
export default FeatureBlogPage;