import ProjectItem from "./ProjectItem";

import squareUp from "/imgs/square-up.webp";
import miniProj from "/imgs/mini-projects.webp";

const ProjectList = () => {
    return (
        <ul className="grid grid-cols-1 gap-y-10 place-items-center pb-4 px-1 md:px-0 lg:grid-cols-2">
            <ProjectItem img={squareUp} path={"/portfolio/projects/square-up"}/>
            <ProjectItem img={miniProj} path={"/portfolio/projects/mini-projects"}/>
        </ul>
    )
}

export default ProjectList;