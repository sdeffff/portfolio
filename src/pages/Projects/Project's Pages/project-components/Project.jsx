import { useEffect, useRef } from "react";

import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

const Project = ( props ) => {
    const projectPreloader = useRef(null);

    useEffect(() => {
        const removePreloader = setTimeout(() => {
            projectPreloader.current.style.opacity = 0;

            setTimeout(() => {
                projectPreloader.current.style.display = "none";
            }, 450);
        }, 1800);

        return () => clearTimeout(removePreloader);
    }, []);

    return (
        <section className="project-page flex gap-8 justify-center items-start px-4 text-[#dddddd] h-[100vh] overflow-hidden">
            <div ref={projectPreloader} 
                className="preloader bg-[#060606] fixed top-0 left-0 w-full h-full z-[90] opacity-100 duration-500 block"
            >
                <h1 className="text-[#dddddd] absolute right-10 top-4 text-2xl pointer-events-none">{props.project}</h1>
            </div>

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