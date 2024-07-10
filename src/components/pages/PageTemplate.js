import React from "react";
import "../../App.css";
import PageSidebar from "../sidebars/Sidebar";
import { aboutListItems, researchListItems, educationListItems, policyListItems, newsListItems, eventsListItems } from "../sidebars/SidebarData";
import Footer from "../Footer";
import "../Footer.css";
import "./PageTemplate.css";

const AboutPageTemplate = ({ title, imageURL, paragraphOne }) => {
    return ( 
        <>
            <div className="page-container">
                <div className="title-section">
                    <h1>{ title }</h1>
                </div>

                <div className="content-container">
                    <div className="sidebar">
                        <PageSidebar listItems={ aboutListItems }/>
                    </div>
                    <div className="page-content">
                        <div className="page-content-img">
                            <img src={ imageURL } alt="page-img" />
                        </div>
                        <div className="page-content-text">
                            <p>{ paragraphOne }</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

const ResearchPageTemplate = ({ title, imageURL, paragraphOne }) => {
    return ( 
        <>
            <div className="page-container">
                <div className="title-section">
                    <h1>{ title }</h1>
                </div>

                <div className="content-container">
                    <div className="sidebar">
                        <PageSidebar listItems={researchListItems}/>
                    </div>
                    <div className="page-content">
                        <div className="page-content-img">
                            <img src={ imageURL } alt="page-img" />
                        </div>
                        <div className="page-content-text">
                            <p>{ paragraphOne }</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const EducationPageTemplate = ({ title, imageURL, paragraphOne }) => {
    return ( 
        <>
            <div className="page-container">
                <div className="title-section">
                    <h1>{ title }</h1>
                </div>

                <div className="content-container">
                    <div className="sidebar">
                        <PageSidebar listItems={educationListItems}/>
                    </div>
                    <div className="page-content">
                        <div className="page-content-img">
                            <img src={ imageURL } alt="page-img" />
                        </div>
                        <div className="page-content-text">
                            <p>{ paragraphOne }</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const NewsPageTemplate = ({ title, imageURL, paragraphOne }) => {
    return ( 
        <>
            <div className="page-container">
                <div className="title-section">
                    <h1>{ title }</h1>
                </div>

                <div className="content-container">
                    <div className="sidebar">
                        <PageSidebar listItems={newsListItems}/>
                    </div>
                    <div className="page-content">
                        <div className="page-content-img">
                            <img src={ imageURL } alt="page-img" />
                        </div>
                        <div className="page-content-text">
                            <p>{ paragraphOne }</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const PolicyPageTemplate = ({ title, imageURL, paragraphOne }) => {
    return ( 
        <>
            <div className="page-container">
                <div className="title-section">
                    <h1>{ title }</h1>
                </div>

                <div className="content-container">
                    <div className="sidebar">
                        <PageSidebar listItems={policyListItems}/>
                    </div>
                    <div className="page-content">
                        <div className="page-content-img">
                            <img src={ imageURL } alt="page-img" />
                        </div>
                        <div className="page-content-text">
                            <p>{ paragraphOne }</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

const EventsPageTemplate = ({ title, imageURL, paragraphOne }) => {
    return ( 
        <>
            <div className="page-container">
                <div className="title-section">
                    <h1>{ title }</h1>
                </div>

                <div className="content-container">
                    <div className="sidebar">
                        <PageSidebar listItems={eventsListItems}/>
                    </div>
                    <div className="page-content">
                        <div className="page-content-img">
                            <img src={ imageURL } alt="page-img" />
                        </div>
                        <div className="page-content-text">
                            <p>{ paragraphOne }</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};


export { AboutPageTemplate, ResearchPageTemplate, EducationPageTemplate, NewsPageTemplate, PolicyPageTemplate, EventsPageTemplate };