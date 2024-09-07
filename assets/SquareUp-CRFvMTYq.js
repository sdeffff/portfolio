import{r as a,j as t}from"./react-CtW5r0F0.js";const l=e=>{const c=a.useRef(null);return a.useEffect(()=>{const i=setTimeout(()=>{c.current.autoplay=!0,c.current.play()},1800);return()=>clearTimeout(i)},[]),t.jsxs("aside",{className:"w-[260rem] flex flex-col items-center gap-2 mt-5 overflow-y-scroll h-[100vh]",children:[t.jsx("video",{src:e.video,ref:c,loop:!0,muted:!0,children:t.jsx("source",{type:"video/mp4"})}),t.jsx("img",{src:e.img1,className:"pointer-events-none"}),t.jsx("img",{src:e.img1,className:"pointer-events-none"}),t.jsx("img",{src:e.img1,className:"pointer-events-none"}),t.jsx("img",{src:e.img2,className:"pointer-events-none"})]})},s=({techName:e,techImg:c})=>t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx("p",{className:"text-lg",children:e}),t.jsx("img",{src:c,loading:"lazy",alt:"",className:"w-6"})]}),r=e=>t.jsxs("aside",{className:"mt-5 flex flex-col gap-10",children:[t.jsxs("article",{className:"flex flex-col items-start gap-3",children:[t.jsx("h1",{className:"int text-5xl cursor-default",children:e.projectName}),t.jsx("p",{className:"text-md",children:e.desc})]}),t.jsxs("div",{className:"flex flex-col items-start gap-1",children:[t.jsx("h1",{className:"technologies-head text-xl",children:"Techlogies that are used in the project: "}),t.jsxs("ul",{className:"techlogies-list",children:[t.jsx(s,{techName:e.tech1Name,techImg:e.tech1Img}),t.jsx(s,{techName:e.tech2Name,techImg:e.tech2Img}),t.jsx(s,{techName:e.tech3Name,techImg:e.tech3Img}),t.jsx(s,{techName:e.tech4Name,techImg:e.tech4Img})]})]}),t.jsxs("article",{className:"flex flex-col items-start",children:[t.jsx("a",{href:e.gitUrl,target:"_blank",children:"GitHub"}),t.jsx("a",{href:e.webUrl,target:"_blank",children:"Website"})]})]}),m=e=>{const c=a.useRef(null);return a.useEffect(()=>{const i=setTimeout(()=>{c.current.style.opacity=0,setTimeout(()=>{c.current.style.display="none"},450)},1800);return()=>clearTimeout(i)},[]),t.jsxs("section",{className:"project-page flex gap-8 justify-center items-start px-4 text-[#dddddd] h-[100vh] overflow-hidden",children:[t.jsx("div",{ref:c,className:"preloader bg-[#060606] fixed top-0 left-0 w-full h-full z-[90] opacity-100 duration-500 block",children:t.jsx("h1",{className:"text-[#dddddd] absolute right-10 top-4 text-2xl",children:e.project})}),t.jsx(l,{video:e.video,img1:e.previewImg1,img2:e.previewImg2}),t.jsx(r,{projectName:e.project,desc:e.desc,tech1Name:e.tech1Name,tech1Img:e.tech1Img,tech2Name:e.tech2Name,tech2Img:e.tech2Img,tech3Name:e.tech3Name,tech3Img:e.tech3Img,tech4Name:e.tech4Name,tech4Img:e.tech4Img,gitUrl:e.gitUrl,webUrl:e.webUrl})]})},o="/portfolio/videos/square-up-review.mp4",n="/portfolio/imgs/square-up-preview-img-1.webp",h="/portfolio/imgs/square-up-preview-img-2.webp",d="/portfolio/icons/react.png",g="/portfolio/icons/typescript.png",u="/portfolio/icons/tailwind.png",x="/portfolio/icons/css.png",j=()=>t.jsx(m,{project:"Square Up",video:o,previewImg1:n,preciewImg2:h,desc:`This is my first big pet-project, where I used React + TypeScript.
                In my opinion this project really helped me to understand a lot of aspects
                in web developing, and some basics knowledges about web app's optimization.
                I also had really good practice here, f.e: react router dom, react hooks, lazy+suspense
                and practiced tailwind in conjunction with react.`,tech1Name:"React - (useState, useEffect, useRef)",tech1Img:d,tech2Name:"TypeScript - (handling props, and types)",tech2Img:g,tech3Name:"Tailwind - to make job with styles easier",tech3Img:u,tech4Name:"CSS - if i have some troubles with TW :)",tech4Img:x,gitUrl:"https://github.com/sdeffff/Square",webUrl:"https://sdeffff.github.io/Square/"});export{j as default};