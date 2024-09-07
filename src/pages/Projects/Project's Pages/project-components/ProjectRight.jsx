import TechItem from "./TechItem"

const ProjectLeft = ( props ) => {
    return (
        <aside className="mt-5 flex flex-col gap-10">
            <article className="flex flex-col items-start gap-3">
                <h1 className="int text-5xl cursor-default">{props.projectName}</h1>

                <p className="text-md">{props.desc}</p>
            </article>

            <div className="flex flex-col items-start gap-1">
                <h1 className="technologies-head text-xl">Techlogies that are used in the project: </h1>

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

            <article className="flex flex-col items-start">
                <a href={props.gitUrl} target="_blank">GitHub</a>
                <a href={props.webUrl} target="_blank">Website</a>
            </article>
        </aside>   
    )
}

export default ProjectLeft;