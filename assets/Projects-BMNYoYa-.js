import{j as e,r}from"./index-Da5ZyI60.js";const c=({img:t})=>e.jsx("li",{className:"int proj overflow-hidden",children:e.jsx("img",{src:t,alt:"",className:"w-[45rem] rounded-sm opacity-60 duration-[350ms] ease-in-out cursor-pointer hover:opacity-100 hover:scale-[1.03]"})}),n="/portfolio/square-up.png",u="/portfolio/mini-projects.jpg",p=()=>e.jsxs("ul",{className:"grid grid-cols-2 gap-y-10 place-items-center",children:[e.jsx(c,{img:n}),e.jsx(c,{img:u}),e.jsx(c,{img:n}),e.jsx(c,{img:n})]}),x=()=>{const t=r.useRef(null),a=r.useRef(null);r.useEffect(()=>{const o=document.querySelector(".scroll-txt"),i="SCROLL DOWN SCROLL DOWN";for(let s=0;s<i.length;s++){let l=document.createElement("span");l.innerHTML=i[s],o.appendChild(l),l.style.transform=`rotate(${15*s}deg)`}},[]),r.useEffect(()=>{const o=setTimeout(()=>{t.current.className=t.current.className.replace("translate-y-24","translate-y-2"),a.current.className=a.current.className.replace("opacity-0","opacity-100")},2500);return()=>{clearTimeout(o)}},[]);const m=()=>{window.scrollTo(650,650)};return e.jsxs("section",{children:[e.jsxs("div",{className:"h-[100vh]",children:[e.jsx("div",{className:"absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden",children:e.jsx("h1",{ref:t,className:"projects-txt text-white text-[4.85rem] font-extralight uppercase tracking-widest translate-y-24 ease-in-out duration-700",children:"My Projects"})}),e.jsxs("article",{ref:a,className:"opacity-0 duration-[600ms]",children:[e.jsx("p",{className:"scroll-txt"}),e.jsx("div",{onClick:m,className:"int projects-circle"})]})]}),e.jsx(p,{})]})};export{x as default};