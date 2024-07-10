import React from "react";
import "./BlogPage.css";
 
const BlogPage = ( { title, intro, authors, date, imageURL, content } ) => {
    return (
        <>  
            <div className="blog-header">
                <h1>{title}</h1>
                <p >{intro}</p>
                <p>{authors} | {date}</p>
                
            </div>

            <div className="blog-img">
                <img src={imageURL} alt="blog-img"></img>
            </div>

            <div className="blog-content">
                <p style={{ marginLeft: '20px' }}>
                    {content}
                </p>
            </div>
        </>
    );
};
 
export default BlogPage;