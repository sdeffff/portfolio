import { useEffect, useRef } from "react";

import Preloader from "../Preloader";

import "./about.css";

const About = () => {
    document.title = "About Me"

    const lineRef = useRef(null);

    useEffect(() => {
        const lineTimeout = setTimeout(() => {
            lineRef.current.className = lineRef.current.className.replace("w-0", "w-full");
        }, 1400);

        return () => clearTimeout(lineTimeout);
    }, []);

    return (
        <section className="w-full h-[100vh]">
                <Preloader 
                    txt={"CH 03: About Me"}
                />

            <section className="text-[#dcdde1] flex flex-col gap-5 items-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="about-head text-4xl cursor-default">About Me</h1>

                <div ref={lineRef} className="w-0 bg-[#dcdde1] h-[2px] rounded-sm duration-700 ease-in-out"></div>

                <p className="about-txt text-xl">
                    Hi there, my name is Maksym, or Max is also acceptable. I am a front-end developer
                    from Ukraine. Web development is really my passion, 
                    I am always curious about learning new technologies and ways to develop progressive 
                    web applications. I am also interested in web-design. I really like jazz music and 00s films
                </p>

                <a href="#" className="about-resume int text-2xl">Resume</a>
            
            </section>
        </section>
    )
}

export default About;