import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const Vinyl = lazy(() => import("./hero-components/Vinyl"));

import "./hero.css";

const Hero = () => {
    return (
        <>
            <article 
            className="main-txt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-6 z-[2] font-extralight">
                <h2 
                className="text-[#dcdde1] text-4xl">
                    Hey, my name is&nbsp;
                    <span>
                        <a href="https://github.com/sdeffff" className="name int">
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
        </>
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