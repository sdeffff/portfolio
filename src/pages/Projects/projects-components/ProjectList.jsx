import ProjectItem from "./ProjectItem";

import squareUp from "/imgs/project-previews/square-up.webp";
import miniProj from "/imgs/project-previews/mini-projects.webp";
import chat from "/imgs/project-previews/chat.jpg";

const ProjectList = () => {
    return (
        <ul className="grid grid-cols-1 gap-y-10 place-items-center pb-4 px-1 md:px-0 lg:grid-cols-2">
            <ProjectItem img={squareUp} path={"/portfolio/projects/square-up"}/>
            <ProjectItem img={miniProj} path={"/portfolio/projects/mini-projects"}/>
            <ProjectItem img={chat} path={"/portfolio/projects/supachat"}/>
        </ul>
    )
}

export default ProjectList;