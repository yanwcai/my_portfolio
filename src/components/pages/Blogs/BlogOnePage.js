import React from "react";
import Footer from "../../Footer";
import { BlogData } from "../../../BlogData";
import BlogPage from "../../BlogPage";
import "../../Footer.css"
 
const BlogOne = () => {
    const blogOne = BlogData[0]; // First blog

    return (
        <>
            <BlogPage title={blogOne.title} intro={blogOne.intro} authors={blogOne.authors} date={blogOne.date} imageURL={blogOne.imageURL} content={blogOne.content} />
            <Footer />
        </>
    );
};
 
export default BlogOne;