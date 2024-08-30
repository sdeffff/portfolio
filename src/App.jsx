import { lazy, Suspense, useEffect, useRef } from "react";

import { Route, Routes } from "react-router-dom";

import "./app.css";

import Preloader from "./pages/Preloader";
//Pages:
const Hero = lazy(() => import("./pages/Hero/Hero"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

function App() {
  //using useEffect because if we won't use useEffect, it will send us errors
  //because our divs will be called before they will be created in the DOM
  const firstToUpper = (str) => {
    str = str.split('');

    str.splice(0, 1, str[0].toUpperCase());

    return str.join('');
  }

  useEffect(() => {
    const cursorInner = document.querySelector(".cursor-inner"),
          cursorArrow = document.querySelector(".cursor-arrow"),
          projectText = document.querySelector(".project-name");

    const handleCursor = (e, interacting, proj, project) => {
      const x = e.clientX,
            y = e.clientY;

      const expand = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`,
      }

      const reveal = {opacity: `${proj ? 100 : 0}`,}

      cursorInner.animate(expand, {duration: 450});
      cursorArrow.animate(reveal, {duration: 100});

      cursorInner.style.transform = `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`;
      cursorArrow.style.opacity = `${proj ? 100 : 0}`;

      //do till the end this feature
      if(project !== null) {
        let name = project.children[0].src.split('/');
        name = name[name.length - 1].split('.')[0];
        name = name.split('-');

        for(let i = 0; i < name.length; i++) {
          name[i] = firstToUpper(name[i]);
        }

        name = name.join(" ");

        projectText.innerHTML = name;
      }
    }

    window.onmousemove = e => {
      const interactable = e.target.closest(".int"),
            interacting = interactable !== null;

      const project = e.target.closest(".proj"),
            proj = project !== null;

      handleCursor(e, interacting, proj, project);
    }

    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, [])

  return (
    <>
    <Preloader />
    <div id="noise"></div>

      <Routes>
        <Route path="/" element={<Suspense><Hero /></Suspense>}></Route>
        <Route path="/projects" element={<Suspense><Projects /></Suspense>}></Route>
      </Routes>

      <div className="cursor-inner">
        <img src="/arrow.png" alt="" className="cursor-arrow" />

        <p className="project-name"></p>
      </div>
    </>
  )
}

export default App;