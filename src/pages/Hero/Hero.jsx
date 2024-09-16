import { lazy, Suspense, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Vinyl = lazy(() => import("./hero-components/Vinyl"));

import Preloader from "../Preloader";

import "./hero.css";

const Hero = () => {
    document.title = "Maksym"

    return (
        <section>
            <Preloader 
            txt={"CH 01: Main Page"}
            />

            <article 
            className="main-txt w-full p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-6 z-[2] font-extralight lg:w-fit">
                <h2 
                className="text-[#dcdde1] text-3xl cursor-default md:text-4xl">
                    Hey, my name is&nbsp;
                    <span className="int">
                        Maksym Pavlii
                    </span>, and I am&nbsp;

                    <span className="int">
                        Front-End Developer
                    </span>
                </h2>

                <div className="flex flex-col items-center gap-1 md:flex-row md:gap-5 md:justify-center">
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