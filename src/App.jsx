import { lazy, Suspense, useEffect, useRef } from "react";

import { Route, Routes } from "react-router-dom";

import "./app.css";

import Preloader from "./pages/Preloader";
//Pages:
import Hero from "./pages/Hero/Hero";
import Projects from "./pages/Projects/Projects";

function App() {

  //using useEffect because if we won't use useEffect, it will send us errors
  //because our divs will be called before they will be created in the DOM
  useEffect(() => {
    const cursorInner = document.querySelector(".cursor-inner"),
          cursorArrow = document.querySelector(".cursor-arrow");

    const handleCursor = (e, interacting, proj) => {
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
    }

    window.onmousemove = e => {
      const interactable = e.target.closest(".int"),
            interacting = interactable !== null;

      const project = e.target.closest(".proj"),
            proj = project !== null;

      handleCursor(e, interacting, proj);
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
        <Route path="/" element={<Hero />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>

      <div className="cursor-inner">
        <img src="/arrow.png" alt="" className="cursor-arrow" />
      </div>
    </>
  )
}

export default App;