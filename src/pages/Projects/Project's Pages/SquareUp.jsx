import { useEffect, useRef } from "react";

import review from "/portfolio/videos/square-up-review.mp4";

//icons:
import reactIcon from "/portfolio/icons/react.png";
import typescript from "/portfolio/icons/typescript.png";
import tailwind from "/portfolio/icons/tailwind.png";
import css from "/portfolio/icons/css.png";

const SquareUp = () => {
    const squarePreloader = useRef(null),
          reviewRef = useRef(null);

    useEffect(() => {
        const removePreloader = setTimeout(() => {
            squarePreloader.current.style.opacity = 0;

            setTimeout(() => {
                squarePreloader.current.style.display = "none";
            }, 450);

            reviewRef.current.autoplay = true;
            reviewRef.current.play();
        }, 1800);

        return () => clearTimeout(removePreloader);
    }, []);

    return (
        <section className="text-white px-52 py-5"> 
            <div ref={squarePreloader} 
            className="preloader bg-[#060606] fixed top-0 left-0 w-full h-full z-[90] opacity-100 duration-500 block"
            >
                <h1 className="text-white absolute right-10 top-4 text-2xl">Square Up</h1>
            </div>
            
            
            <video ref={reviewRef} loop muted className="rounded-sm">
                <source src={review} type="video/mp4"/>
            </video>

            <article className="flex flex-col gap-2 mt-5">
                <h1 className="int text-5xl cursor-default">Square Up</h1>

                <p className="text-lg">
                    This is my first big pet-project, where I used React + TypeScript.
                    In my opinion this project really helped me to understand a lot of aspects
                    in web developing, and some basics knowledges about web app's optimization.
                    I also had really good practice in react(react router dom, react hooks, lazy+suspense)
                    and practiced tailwind in conjunction with react.
                </p>
            </article>

            <h1 className="technologies-head">Techlogies that are used in the project: </h1>
            
            <ul className="techlogies-list">
                <li>
                    React (useState, useEffect, useRef)

                    <img src={reactIcon}/>
                </li>
                <li>
                    TypeScript(props especially)

                    <img src={typescript}/>
                </li>
                <li>
                    Tailwind

                    <img src={tailwind}/>
                </li>
                <li>
                    CSS

                    <img src={css}/>
                </li>
            </ul>

            <img src="" loading="lazy"/>

            {/* some gifs or videos */}

            <img loading="lazy" src="" alt="" />
        </section>
    )
}

export default SquareUp;