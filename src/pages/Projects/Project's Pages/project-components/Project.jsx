import { useEffect, useRef } from "react";

import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

import Preloader from "../../../Preloader";

const Project = ( props ) => {
    document.title = props.project;

    return (
        <section className="project-page flex gap-8 justify-center items-start px-4 text-[#dddddd] w-full h-[100vh] overflow-hidden">
            <Preloader 
            txt={props.project}
            />

            <ProjectLeft 
            video={props.video}
            img1={props.previewImg1}
            img2={props.previewImg2}
            img3={props.previewImg3}
            features={props.features}
            adapt={props.adapt}
            cursor={props.cursor}
            transition={props.transition}
            />

            <ProjectRight 
            projectName={props.project}
            desc={props.desc}
            tech1Name={props.tech1Name}
            tech1Img={props.tech1Img}
            tech2Name={props.tech2Name}
            tech2Img={props.tech2Img}
            tech3Name={props.tech3Name}
            tech3Img={props.tech3Img}
            tech4Name={props.tech4Name}
            tech4Img={props.tech4Img}
            gitUrl={props.gitUrl}
            webUrl={props.webUrl}
            />
        </section>
    )
}

export default Project;