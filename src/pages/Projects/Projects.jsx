import { useEffect, useRef } from "react";
import "./projects.css";

const Projects = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const textTimeout = setTimeout(() => {
            textRef.current.className = textRef.current.className.replace("translate-y-24", "translate-y-2");
        }, 2500);

        return () => {
            clearTimeout(textTimeout);
        }
    }, []);

    return (
        <section>
            <div className="h-[100vh]">
                <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <h1  
                    ref={textRef}
                    className="projects-txt text-white text-[4.5rem] font-extralight uppercase tracking-widest translate-y-24 ease-in-out duration-700">My Projects</h1>
                </div>
            </div>
            <ul className="grid grid-cols-2 place-items-center">
                <li className="int proj">
                    <img src="/square.png" alt="" />
                </li>

                <li className="int proj">
                    <img src="/square.png" alt="" />
                </li>
            </ul>
        </section>
    )
}

export default Projects;