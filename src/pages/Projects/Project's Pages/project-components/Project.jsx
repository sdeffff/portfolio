import { memo } from "react";

import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

import Preloader from "../../../Preloader";

//Wrapper for another projects
const Project = memo(( { project, desc, media, features, techStack, links } ) => {
    document.title = project;

    return (
        <section className="project-page flex flex-col-reverse lg:flex-row gap-8 justify-center items-start px-4 text-[#dddddd] w-full lg:h-[100vh] overflow-hidden">
            <Preloader 
            txt={project}
            />

            {/* Passing objects to component and using spread operator passing it like props */}
            <ProjectLeft {...media} {...features} />

            <ProjectRight projectName={project} desc={desc} {...techStack} {...links} />
        </section>
    )
});

export default Project;