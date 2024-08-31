import ProjectItem from "./ProjectItem";

import squareUp from "/square-up.png";
import miniProj from "/mini-projects.jpg";

const ProjectList = () => {
    return (
        <ul className="grid grid-cols-2 gap-y-10 place-items-center">
            <ProjectItem img={squareUp}/>
            <ProjectItem img={miniProj}/>
            <ProjectItem img={squareUp}/>
            <ProjectItem img={squareUp}/>
        </ul>
    )
}

export default ProjectList;