import React from "react";
import Project from "./Project";

const ProjectCards = () => {
    return (
        <>
        <Project 
            name="E-Commerce Site" 
            desc="my e-commerce web app"
            src="/projectImages/royalApparel.png"
            hoversrc="/projectImages/royalApparel.png"
            link="https://winstonmchetz-ecommerce.herokuapp.com/"
            git="https://github.com/winston1337/Ecommerce-Version-2" />
        <Project 
            name="Instagram Redesign" 
            desc="my redesign project"
            src="/projectImages/instaRedesign.png"
            hoversrc="/projectImages/instaRedesign.png"
            link="http://54.85.159.219:5000/home"
            git="https://github.com/winston1337/Instagram-Redesign" />
        <Project 
            name="Hope Hacks Project" 
            desc="my hackathon project"
            src="/projectImages/hopeHacks.png"
            hoversrc="/projectImages/hopeHacks.png"
            link="https://main.dsdoqtqnv1isp.amplifyapp.com/index.html"
            git="https://github.com/tloaeza0/hopeHacks" />
        <Project 
            name="Gateway Project" 
            desc="my first ever website"
            src="/projectImages/gatewayproject.png"
            hoversrc="/projectImages/gatewayproject.png"
            link="https://travel-website.winstonmchetz.repl.co/index.html"
            git="https://github.com/winston1337/gateway-project" />
        
        
        </>
    );
}

export default ProjectCards;