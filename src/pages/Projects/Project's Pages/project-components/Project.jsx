import { memo } from "react";

import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

import Preloader from "../../../Preloader";

const Project = memo(( props ) => {
    document.title = props.project;

    return (
        <section className="project-page flex flex-col-reverse lg:flex-row gap-8 justify-center items-start px-4 text-[#dddddd] w-full lg:h-[100vh] overflow-hidden">
            <Preloader 
            txt={props.project}
            />

            <ProjectLeft 
            video={props.video}
            img1={props.previewImg1}
            img2={props.previewImg2}
            img3={props.previewImg3}
            features={props.features}
            feature1Img={props.feature1Img}
            feature2Img={props.feature2Img}
            feature2IsVideo={props.feature2IsVideo}
            feature3Img={props.feature3Img}
            feature1Name={props.feature1Name}
            feature2Name={props.feature2Name}
            feature3Name={props.feature3Name}
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
});

export default Project;