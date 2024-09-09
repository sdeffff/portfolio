import Project from "./project-components/Project";

//review part:
import video from "/videos/square-up-review.mp4"
import squareImg1 from "/imgs/square-up-preview-img-1.webp";
import squareImg2 from "/imgs/square-up-preview-img-2.webp";
import squareImg3 from "/imgs/square-up-preview-img-3.webp";

//features part:
import adaptImg from "/imgs/adaptiveness.webp";
import cursorImg from "/imgs/cursor-animations.webp";
import transitionReview from "/imgs/transition.mp4";

//icons:
import reactIcon from "/icons/react.png";
import typescriptIcon from "/icons/typescript.png";
import tailwindIcon from "/icons/tailwind.png";
import cssIcon from "/icons/css.png";

import "../projects.css"

const SquareUp = () => {
    return (
        <Project 
        project = "Square Up"
        video={video}
        previewImg1={squareImg1}
        previewImg2={squareImg2}
        previewImg3={squareImg3}
        features={true}
        adapt={adaptImg}
        cursor={cursorImg}
        transition={transitionReview}
        desc={`This is my first big pet-project, where I used React + TypeScript.
                In my opinion this project really helped me to understand a lot of aspects
                in web developing, and some basics knowledges about web app's optimization.
                I also had really good practice here, f.e: react router dom, react hooks, lazy+suspense
                and practiced tailwind in conjunction with react.`}
        tech1Name={"React - (useState, useEffect, useRef)"}
        tech1Img={reactIcon}
        tech2Name={"TypeScript - (handling props, and types)"}
        tech2Img={typescriptIcon}
        tech3Name={"Tailwind - to make job with styles easier"}
        tech3Img={tailwindIcon}
        tech4Name={"CSS - if i have some troubles with TW :)"}
        tech4Img={cssIcon}
        gitUrl={"https://github.com/sdeffff/Square"}
        webUrl={"https://sdeffff.github.io/Square/"}
        />
    )
}

export default SquareUp;