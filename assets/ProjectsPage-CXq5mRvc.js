import{j as e,r as s}from"./react-CtW5r0F0.js";import{L as m}from"./react-router-dom-DyCDWfuU.js";import{s as p}from"./square-up-BsEJ74Ra.js";import{P as u}from"./Preloader-D4WYZbAy.js";/* empty css                 */import"./react-dom-CoD-mNjq.js";import"./scheduler-CzFDRTuY.js";import"./react-router-C7geVa70.js";import"./@remix-run-BOUEh3jQ.js";const i=({img:t,path:r})=>e.jsx("li",{className:"int proj overflow-hidden",children:e.jsx(m,{to:r,children:e.jsx("img",{loading:"lazy",src:t,alt:"",className:"w-[45rem] rounded-sm opacity-60 duration-[350ms] ease-in-out cursor-pointer hover:opacity-100 hover:scale-[1.03]"})})}),d="/portfolio/imgs/mini-projects.webp",j=()=>e.jsxs("ul",{className:"grid grid-cols-2 gap-y-10 place-items-center pb-4",children:[e.jsx(i,{img:p,path:"/portfolio/projects/square-up"}),e.jsx(i,{img:d,path:"/portfolio/projects/mini-projects"})]}),P=()=>{const t=s.useRef(null),r=s.useRef(null),l=s.useRef(null);s.useEffect(()=>{window.scrollTo(0,0);const o="SCROLL DOWN SCROLL DOWN";for(let a=0;a<o.length;a++){let c=document.createElement("span");c.innerHTML=o[a],l.current.appendChild(c),c.style.transform=`rotate(${15*a}deg)`}},[]),s.useEffect(()=>{const o=setTimeout(()=>{t.current.className=t.current.className.replace("translate-y-24","translate-y-2"),r.current.className=r.current.className.replace("opacity-0","opacity-100")},2500);return()=>{clearTimeout(o)}},[]);const n=()=>{window.scrollTo(650,650)};return e.jsxs("section",{children:[e.jsx(u,{txt:"CH 02: Projects"}),e.jsxs("div",{className:"h-[100vh]",children:[e.jsx("div",{className:"absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden",children:e.jsx("h1",{ref:t,className:"projects-txt text-white text-[5rem] font-extralight uppercase tracking-widest translate-y-24 ease-in-out duration-700",children:"My Projects"})}),e.jsxs("article",{ref:r,className:"opacity-0 duration-[600ms]",children:[e.jsx("p",{className:"scroll-txt",ref:l}),e.jsx("div",{onClick:n,className:"int projects-circle"})]})]}),e.jsx(j,{})]})};export{P as default};
