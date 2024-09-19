import { lazy, Suspense, useEffect, useRef } from "react";

import { Route, Routes, Link } from "react-router-dom";

import "./app.css";
//Pages:
const Hero = lazy(() => import("./pages/Hero/Hero"));
const ProjectsPage = lazy(() => import("./pages/Projects/ProjectsPage"));
const About = lazy(() => import("./pages/About/About"));

const SquareUp = lazy(() => import("./pages/Projects/Project's Pages/SquareUp"));
const MiniProjects = lazy(() => import("./pages/Projects/Project's Pages/MiniProjects"));

function App() {
  //asd

  const cursorRef = useRef(null),
        projectName = useRef(null),
        logoRef = useRef(null);

  useEffect(() => {
    logoRef.current.style.opacity = 1;
  }, []);

  //Function to make first word of project uppercased
  const firstToUpper = (str) => {
    str = str.split("");
    
    str.splice(0, 1, str[0].toUpperCase());

    return str.join("");
  }

  //using useEffect because if we won't use useEffect, it will send us errors
  //because our divs will be called before they will be created in the DOM
  useEffect(() => {
    const handleCursor = (e, interacting, project) => {
      const x = e.clientX,
            y = e.clientY;

      const expand = { transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`, }

      //animating the tracker
      cursorRef.current.animate(expand, {duration: 210});

      //and adding styles to it
      cursorRef.current.style.transform = `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`;

      projectName.current.style.opacity = 0;
      //logic to reveal project name near cursor tracker
      if(project !== null) {
        //getting src of the image and removing all symbols
        let name = project.children[0].children[0].src.split('/').pop().split('.')[0].split('-');

        for(let i = 0; i < name.length; i++) {
          name[i] = firstToUpper(name[i]);
        }

        name = name.join(" ");

        //passing the value to our <p> tag
        projectName.current.innerHTML = name;
        projectName.current.style.opacity = 1;
      }
    }

    const onMouseMove = (e) => {
      if(window.innerWidth > 1024) {  
        const interactable = e.target.closest(".int"),
              interacting = interactable !== null;

        const project = e.target.closest(".proj");

        //Interacting - expanding of tracker
        //project - element that has proj in className
        handleCursor(e, interacting, project);
      }
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [])

  return (
    <>
    <Link to={"/portfolio/"}>
      <h2 ref={logoRef} className="logoImg int font-extralight fixed top-4 right-5 lg:right-0 lg:left-5 z-[10] text-2xl duration-[400ms] delay-[2000ms] opacity-0">M</h2>
    </Link>

    <div id="noise"></div>

    <Suspense fallback="loading...">
      <Routes>
        <Route path="/portfolio/" element={<Hero />}></Route>
        <Route path="/portfolio/projects" element={<ProjectsPage />}></Route>
        <Route path="/portfolio/projects/square-up" element={<SquareUp />}></Route>
        <Route path="/portfolio/projects/mini-projects" element={<MiniProjects />}></Route>
        <Route path="/portfolio/about-me" element={<About />}></Route>
      </Routes>
    </Suspense>

      <div className="cursor-inner hidden lg:block" ref={cursorRef}>

        <p className="project-name" ref={projectName}></p>
      </div>
    </>
  )
}

export default App;


//1. Creating new branch
//git checkout -b branch_name
//git repo push

//2. Merging
//git checkout main
//git fetch lab/o

//git pull lab/o main

//git checkout new_branch
//git pull lab/o new_branch

//git checkout main
//git merge new_branch

//3. Pushing merged changes to repo: git push lab/o

//4. Deleteing branches:
//local: git branch -d new_branch
//git push lab/o --delete new_branch