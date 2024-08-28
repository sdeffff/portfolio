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
    const cursorInner = document.querySelector(".cursor-inner");

    const handleCursor = (e, interacting) => {
      const x = e.clientX,
            y = e.clientY;

      const animation = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
      }

      cursorInner.animate(animation, {duration: 450});

      cursorInner.style.transform = `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`;
    }

    window.onmousemove = e => {
      const interactable = e.target.closest(".int"),
            interacting = interactable !== null;

      handleCursor(e, interacting);
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

      <div className="cursor-inner"></div>
    </>
  )
}

export default App;