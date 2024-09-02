import { lazy, Suspense, useEffect, useRef } from "react";

import { Route, Routes } from "react-router-dom";

import Preloader from "./pages/Preloader";

import "./app.css";
import arrowIcon from "./assets/arrow.png";
//Pages:
const Hero = lazy(() => import("./pages/Hero/Hero"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

function App() {
  const cursorRef = useRef(null),
        cursorArrow = useRef(null),
        projectName = useRef(null);

  //using useEffect because if we won't use useEffect, it will send us errors
  //because our divs will be called before they will be created in the DOM
  const firstToUpper = (str) => {
    return str
      .split("")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }

  useEffect(() => {
    const handleCursor = (e, interacting, proj, project) => {
      const x = e.clientX,
            y = e.clientY;

      const expand = { transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`, }

      const reveal = { opacity: `${proj ? 100 : 0}` }

      cursorRef.current.animate(expand, {duration: 450});

      cursorRef.current.style.transform = `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`;

      projectName.current.style.opacity = 0;
      if(project !== null) {
        let name = project.children[0].src.split('/').pop().split('.')[0].split('-');

        for(let i = 0; i < name.length; i++) {
          name[i] = firstToUpper(name[i]);
        }

        name = name.join(" ");

        projectName.current.innerHTML = name;
        projectName.current.style.opacity = 1;
      }
    }

    const onMouseMove = (e) => {
      const interactable = e.target.closest(".int"),
            interacting = interactable !== null;

      const project = e.target.closest(".proj"),
            proj = project !== null;

      handleCursor(e, interacting, proj, project);
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [])

  return (
    <>
    <Preloader />
    <div id="noise"></div>

    <Suspense>
      <Routes>
        <Route path="/portfolio/" element={<Hero />}></Route>
        <Route path="/portfolio/projects" element={<Projects />}></Route>
      </Routes>
    </Suspense>

      <div className="cursor-inner" ref={cursorRef}>

        <p className="project-name" ref={projectName}></p>
      </div>
    </>
  )
}

export default App;