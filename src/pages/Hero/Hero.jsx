import { lazy, Suspense, } from "react";
import { Link } from "react-router-dom";

const Vinyl = lazy(() => import("./hero-components/Vinyl"));

import Preloader from "../Preloader";

import gitLogo from "/icons/logo-git.svg";

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

                <div className="flex flex-col items-center gap-2">
                    <div className="flex flex-col items-center gap-1 md:flex-row md:gap-5 md:justify-center">
                        <Link to={"projects"} className="link int">
                            my projects
                        </Link>

                        <Link to={"about-me"} className="link int">
                            about me
                        </Link>
                    </div>

                    <a href="https://github.com/sdeffff" target="_blank">
                        <img className="int w-9 md:w-10" src={gitLogo} />
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

//npm knip
//use mapbox