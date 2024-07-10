import React from "react";
import Footer from "../../Footer";
import { BlogData } from "../../../BlogData";
import BlogPage from "../../BlogPage";
import "../../Footer.css"
 
const BlogFour = () => {
    const blogFour = BlogData[3]; // First blog

    return (
        <>
            <BlogPage title={blogFour.title} intro={blogFour.intro} authors={blogFour.authors} date={blogFour.date} imageURL={blogFour.imageURL} content={blogFour.content} />
            <Footer />
        </>
    );
};
 
export default BlogFour;