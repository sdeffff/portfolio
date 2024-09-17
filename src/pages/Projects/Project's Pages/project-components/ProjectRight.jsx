import TechItem from "./TechItem"

import gitIcon from "/icons/logo-git.svg";
import webIcon from "/icons/web-icon.svg";

const ProjectLeft = ( props ) => {
    return (
        <aside className="mt-5 flex flex-col gap-10 w-[32rem]">
            <article className="flex flex-col items-start gap-3">
                <h1 className="project-head int text-5xl cursor-default">{props.projectName}</h1>

                <p className="text-base w-[21.5rem] md:w-[46rem] lg:w-fit">{props.desc}</p>
            </article>

            <div className="flex flex-col items-start gap-1">
                <h1 className="technologies-head text-lg w-72 md:w-full md:text-xl">Techlogies that are used in the project: </h1>

                <ul className="techlogies-list">
                    <TechItem 
                        techName = {props.tech1Name}
                        techImg = {props.tech1Img}
                    />
                    <TechItem 
                        techName = {props.tech2Name}
                        techImg = {props.tech2Img}
                    />
                    <TechItem 
                        techName = {props.tech3Name}
                        techImg = {props.tech3Img}
                    />
                    <TechItem 
                        techName = {props.tech4Name}
                        techImg = {props.tech4Img}
                    />
                </ul>
            </div>

            <article className="flex flex-col items-start gap-2">
                <a href={props.gitUrl} target="_blank" className="int source-link text-lg flex items-center gap-2 text-[#F3DBC7]">
                    GitHub

                    <img src={gitIcon} alt="" className="w-6" />
                </a>
                <a href={props.webUrl} target="_blank" className="int source-link text-lg flex items-center gap-2 text-[#F3DBC7]">
                    Website

                    <img src={webIcon} alt="" className="w-6 fill-white" />    
                </a>
            </article>
        </aside>   
    )
}

export default ProjectLeft;