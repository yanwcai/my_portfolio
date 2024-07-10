import React from "react";
import Footer from "../../Footer";
import { BlogData } from "../../../BlogData";
import BlogPage from "../../BlogPage";
import "../../Footer.css"
 
const BlogThree = () => {
    const blogThree = BlogData[2]; 

    return (
        <>
            <BlogPage title={blogThree.title} intro={blogThree.intro} authors={blogThree.authors} date={blogThree.date} imageURL={blogThree.imageURL} content={blogThree.content} />
            <Footer />
        </>
    );
};
 
export default BlogThree;