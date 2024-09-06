import ProjectItem from "./ProjectItem";

import squareUp from "/imgs/square-up.webp";
import miniProj from "/imgs/mini-projects.webp";

const ProjectList = () => {
    return (
        <ul className="grid grid-cols-2 gap-y-10 place-items-center">
            <ProjectItem img={squareUp} path={"/portfolio/projects/square-up"}/>
            <ProjectItem img={miniProj} path={"/portfolio"}/>
            <ProjectItem img={squareUp} path={"/portfolio"}/>
            <ProjectItem img={squareUp} path={"/portfolio"}/>
        </ul>
    )
}

export default ProjectList;