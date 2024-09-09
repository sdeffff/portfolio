import { lazy, Suspense, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Vinyl = lazy(() => import("./hero-components/Vinyl"));

import "./hero.css";

const Hero = () => {
    const preloaderRef = useRef(null);

    useEffect(() => {
        const removePreloader = setTimeout(() => {
            preloaderRef.current.style.opacity = 0;

            setTimeout(() => {
                preloaderRef.current.style.display = "none";
            }, 450);
        }, 1800);

        return () => clearTimeout(removePreloader);
    }, []); 

    return (
        <section>
           <div ref={preloaderRef} className="preloader bg-[#060606] fixed top-0 left-0 w-full h-full z-[90] opacity-100 duration-500 block">
                <h1 className="text-white absolute right-10 top-4 text-2xl">CH 01: Main Page</h1>
            </div>

            <article 
            className="main-txt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-6 z-[2] font-extralight">
                <h2 
                className="text-[#dcdde1] text-4xl">
                    Hey, my name is&nbsp;
                    <span>
                        <a href="https://github.com/sdeffff" target="_blank" className="name int">
                            Maksym Pavlii
                        </a>
                    </span>, and I am&nbsp;

                    <span>
                        Front-End Developer
                    </span>
                </h2>

                <div className="flex items-center justify-center gap-5">

                    <Link to={"projects"} className="link int">
                        my projects
                    </Link>

                    <a href="#" className="link int">
                        about me
                        
                    </a>
                </div>
            </article>

            <Suspense fallback={<div>...</div>}>
                <Vinyl />
            </Suspense>
        </section>
    );
};

export default Hero;

//adjust light on 3d model, try to do it ok


//For portfolio:
//locomotive scroll
//cursor tracker
//text reveal animation
//transitions between pages
//зжать картинки + lazy loading
//npm knip
//use mapbox