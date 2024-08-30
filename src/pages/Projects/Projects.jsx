import { useEffect, useRef } from "react";
import "./projects.css";

const Projects = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const scrollText = document.querySelector(".scroll-txt");
        
        const str = "SCROLL DOWN SCROLL DOWN";
        
        for(let i = 0; i < str.length; i++) {
            let span = document.createElement("span");
            span.innerHTML = str[i];

            scrollText.appendChild(span);
            span.style.transform = `rotate(${15 * i}deg)`;
        }
    }, []);



    useEffect(() => {
        const textTimeout = setTimeout(() => {
            textRef.current.className = textRef.current.className.replace("translate-y-24", "translate-y-2");
        }, 2500);

        return () => {
            clearTimeout(textTimeout);
        }
    }, []);

    const handleScroll = () => {
        window.scrollTo(650, 650);
    }

    return (
        <section>
            <div className="h-[100vh]">
                <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <h1  
                    ref={textRef}
                    className="projects-txt text-white text-[4.85rem] font-extralight uppercase tracking-widest translate-y-24 ease-in-out duration-700">My Projects</h1>
                </div>

                <article>
                    <p className="scroll-txt"></p>
                    <div onClick={handleScroll} className="int projects-circle"></div>
                </article>
            </div>
            <ul className="grid grid-cols-2 gap-y-10 place-items-center">
                <li className="int proj">
                    <img src="/square-up.png" alt="" />
                </li>

                <li className="int proj">
                    <img src="/square-up.png" alt="" />
                </li>

                <li className="int proj">
                    <img src="/square-up.png" alt="" />
                </li>

                <li className="int proj">
                    <img src="/square-up.png" alt="" />
                </li>
            </ul>
        </section>
    )
}

export default Projects;