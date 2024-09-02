import { useEffect, useRef } from "react";

import ProjectList from "./projects-components/ProjectList";

import "./projects.css";
import { remove } from "three/examples/jsm/libs/tween.module.js";

const Projects = () => {
    const textRef = useRef(null),
          circleRef = useRef(null),
          scrollText = useRef(null),
          preloaderRef = useRef(null);

    useEffect(() => {
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
            textRef.current.className = textRef.current.className.replace("translate-y-24", "translate-y-2");
            circleRef.current.className = circleRef.current.className.replace("opacity-0", "opacity-100");
            preloaderRef.current.style.display = "none";
        }, 2500);

        return () => { clearTimeout(textTimeout); }
    }, []);

    useEffect(() => {
        const removePreloader = setTimeout(() => {
            preloaderRef.current.style.opacity = 0;
        }, 1900);
        
        return () => { clearTimeout(removePreloader) };
    }, []);

    const handleScroll = () => {
        window.scrollTo(650, 650);
    }

    return (
        <section>
            <div className="project-preloader bg-[#060606] fixed top-0 left-0 w-full h-full z-[90] opacity-100 duration-500 block" ref={preloaderRef}>
                <h1 className="text-white absolute right-10 top-4 text-2xl">CH 02: Projects</h1>
            </div>

            <div className="h-[100vh]">
                <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <h1  
                    ref={textRef}
                    className="projects-txt text-white text-[5rem] font-extralight uppercase tracking-widest translate-y-24 ease-in-out duration-700">My Projects</h1>
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