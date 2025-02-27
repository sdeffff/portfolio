import { memo } from "react";
import Project from "./project-components/Project";

//review part:
import video from "/videos/square-up-review.mp4"
import squareImg1 from "/imgs/project-previews/square-up.webp";
import squareImg2 from "/imgs/square-previews/square-up-preview-img-1.webp";
import squareImg3 from "/imgs/square-previews/square-up-preview-img-2.webp";

//features part:
import adaptImg from "/imgs/square-previews/features/adaptiveness.webp";
import cursorImg from "/imgs/square-previews/features/cursor-animations.webp";
import transitionReview from "/imgs/square-previews/features/transition.mp4";

//icons:
import reactIcon from "/icons/react.png";
import typescriptIcon from "/icons/typescript.png";
import tailwindIcon from "/icons/tailwind.png";
import cssIcon from "/icons/css.png";

import "../projects.css"

const SquareUp = memo(() => {
    //Passing props in objects and then passing them to <Project /> wrapper
    const media = {
        video,
        previewImg1: squareImg1,
        previewImg2: squareImg2,
        previewImg3: squareImg3,
    };

    const features = {
        features: true,
        feature2IsVideo: true,
        feature1Img: adaptImg,
        feature2Img: transitionReview,
        feature3Img: cursorImg,
        feature1Name: "adaptiveness",
        feature2Name: "transition",
        feature3Name: "cursor",
    };

    const techStack = {
        tech1Name: "React - (useState, useEffect, useRef)",
        tech2Name: "TypeScript - (handling props, and types)",
        tech3Name: "Tailwind - to make job with styles easier",
        tech4Name: "CSS - if i have some troubles with TW :)",
        tech1Img: reactIcon,
        tech2Img: typescriptIcon,
        tech3Img: tailwindIcon,
        tech4Img: cssIcon,
    };

    const links = {
        gitUrl: "https://github.com/sdeffff/Square",
        webUrl: "https://sdeffff.github.io/Square/",
    };

    return (
        <Project 
        project = "Square Up"
        media={media}
        features={features}
        desc={`This is my first big pet-project, where I used React + TypeScript.
                In my opinion this project really helped me to understand a lot of aspects
                in web developing, and some basics knowledges about web app's optimization.
                I also had really good practice here, f.e: react router dom, react hooks, lazy+suspense
                and practiced tailwind in conjunction with react.`}
        techStack={techStack}
        links={links}
        />
    )
});

export default SquareUp;