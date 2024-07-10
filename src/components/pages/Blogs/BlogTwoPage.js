import React from "react";
import Footer from "../../Footer";
import { BlogData } from "../../../BlogData";
import BlogPage from "../../BlogPage";
import "../../Footer.css"
 
const BlogTwo = () => {
    const blogTwo = BlogData[1]; 

    return (
        <>
            <BlogPage title={blogTwo.title} intro={blogTwo.intro} authors={blogTwo.authors} date={blogTwo.date} imageURL={blogTwo.imageURL} content={blogTwo.content} />
            <Footer />
        </>
    );
};
 
export default BlogTwo;