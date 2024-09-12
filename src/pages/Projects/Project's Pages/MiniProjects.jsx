import Project from "./project-components/Project";

import htmlIcon from "/icons/html.png";
import cssIcon from "/icons/css.png";
import jsIcon from "/icons/js.png";

import "../projects.css"

const MiniProjects = () => {
    return (
        <Project 
        project = "Mini Projects"
        features={false}
        desc={`In this project I wanted to show my abilities to work only with HTML, CSS and JS.
            You can see some default projects there like 'Random Quote', 'Weather App' or 'Random Colors'
            and so on... `}
        tech1Name={"HTML - Semantic HTML."}
        tech1Img={htmlIcon}
        tech2Name={"CSS - Some default styles"}
        tech2Img={cssIcon}
        tech3Name={"JavaScript - Main logic"}
        tech3Img={jsIcon}
        gitUrl={"https://github.com/sdeffff/mini"}
        webUrl={"https://sdeffff.github.io/mini/"}
        />
    )
}

export default MiniProjects;