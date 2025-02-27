import { memo } from "react";
import Project from "./project-components/Project";

//review part:
import video from "/videos/mini-review.mp4";
import miniImg1 from "/imgs/mini-proj-previews/mini-proj-preview-1.webp";
import miniImg2 from "/imgs/mini-proj-previews/mini-proj-preview-2.webp";
import miniImg3 from "/imgs/mini-proj-previews/mini-proj-preview-3.webp";

//icons:
import htmlIcon from "/icons/html.png";
import cssIcon from "/icons/css.png";
import jsIcon from "/icons/js.png";

import "../projects.css"

const MiniProjects = memo(() => {
    const media = {
        video: video,
        previewImg1: miniImg1,
        previewImg2: miniImg2,
        previewImg3: miniImg3,
    }

    const techStack = {
        tech1Name: "HTML - Semantic HTML.",
        tech2Name: "CSS - Some default styles",
        tech3Name: "JavaScript - Main logic",
        tech1Img: htmlIcon,
        tech2Img: cssIcon,
        tech3Img: jsIcon,
    }

    const features = {features: false}

    const links = {
        gitUrl: "https://github.com/sdeffff/mini",
        webUrl: "https://sdeffff.github.io/mini/",
    }

    return (
        <Project 
        project = "Mini Projects"
        features={features}
        desc={`In this project, I wanted to show my skills and creativity by working exclusively with HTML, CSS, and JavaScript. 
            My goal is to demonstrate my front-end development capabilities. There are 9 mini-projects in this collection, each designed to highlight various skills such as working with APIs, handling events, manipulating the DOM, 
            and crafting responsive layouts using CSS.`}
        media={media}
        techStack={techStack}
        links={links}
        />
    )
});

export default MiniProjects;