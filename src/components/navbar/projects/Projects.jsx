import React from "react";
import Project from "./Project";

const ProjectCards = () => {
    return (
        <>
        <Project 
            name="E-Commerce Site" 
            desc="my e-commerce web app"
            src="/projectImages/royalApparel.png"
            hoversrc="/projectImages/royalApparel.png" />
        <Project 
            name="Instagram Redesign" 
            desc="my redesign project"
            src="/projectImages/instaRedesign.png"
            hoversrc="/projectImages/instaRedesign.png" />
        <Project 
            name="Hope Hacks Project" 
            desc="my hackathon project"
            src="/projectImages/hopeHacks.png"
            hoversrc="/projectImages/hopeHacks.png" />
        <Project 
            name="Gateway Project" 
            desc="my first ever website"
            src="/projectImages/gatewayproject.png"
            hoversrc="/projectImages/gatewayproject.png" />
        
        
        </>
    );
}

export default ProjectCards;