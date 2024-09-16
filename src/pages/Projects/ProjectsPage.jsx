import { useEffect, useRef } from "react";

import ProjectList from "./projects-components/ProjectList";

import Preloader from "../Preloader";

import "./projects.css";

const Projects = () => {
    const textRef = useRef(null),
          circleRef = useRef(null),
          scrollText = useRef(null);

    document.title = "My Projects";

    useEffect(() => {
        window.scrollTo(0, 0);

        const str = "SCROLL DOWN SCROLL DOWN";

        for(let i = 0; i < str.length; i++) {
            let span = document.createElement("span");
            span.innerHTML = str[i];

            scrollText.current.appendChild(span);
            span.style.transform = `rotate(${15 * i}deg)`;
        }
    }, []);

    useEffect(() => {
        const textTimeout = setTimeout(() => {
            textRef.current.className = textRef.current.className.replace("translate-y-24", "translate-y-0");
            circleRef.current.className = circleRef.current.className.replace("opacity-0", "opacity-100");
        }, 2500);

        return () => { clearTimeout(textTimeout); }
    }, []);

    const handleScroll = () => {
        window.scrollTo(650, 650);
    }

    return (            
        <section>
            <Preloader 
            txt={"CH 02: Projects"}
            />

            <div className="h-[100vh]">
                <div className="absolute w-full text-center top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <h1  
                    ref={textRef}
                    className="projects-txt text-white text-4xl md:text-5xl lg:text-[5rem] font-extralight uppercase tracking-widest translate-y-24 ease-in-out duration-700 cursor-default">My Projects</h1>
                </div>

                <article ref={circleRef} className="opacity-0 duration-[600ms]">
                    <p className="scroll-txt" ref={scrollText}></p>
                    <div onClick={handleScroll} className="int projects-circle"></div>
                </article>
            </div>
            
            <ProjectList />
        </section>
    )
}

export default Projects;