import { useEffect, useRef } from "react";

import ProjectList from "./projects-components/ProjectList";

import Preloader from "../Preloader";

import "./projects.css";

const Projects = () => {
    const textRef = useRef(null), //refference to "My Projects" text
          circleRef = useRef(null), //refference to circle
          scrollText = useRef(null); //refference to text that is spinning around the circle

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

        const textTimeout = setTimeout(() => {
            textRef.current.style.transform = "translateY(0)"
            circleRef.current.style.opacity = 1;
        }, 2050);

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

            <main>
                <div className="h-[100vh]">
                    <div className="absolute w-full text-center top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                        <h1  
                        ref={textRef}
                        className="projects-txt text-white text-4xl md:text-5xl lg:text-[5rem] font-extralight uppercase tracking-widest translate-y-24 ease-in-out duration-700 delay-100 cursor-default">My Projects</h1>
                    </div>

                    <article ref={circleRef} className="opacity-0 duration-[600ms]">
                        <p className="scroll-txt" ref={scrollText}></p>
                        <div onClick={handleScroll} className="int projects-circle"></div>
                    </article>
                </div>
            </main>
            
            <ProjectList />
        </section>
    )
}

export default Projects;