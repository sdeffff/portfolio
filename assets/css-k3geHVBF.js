import{r as l,j as t}from"./react-CtW5r0F0.js";import{g as x}from"./logo-git-C1fTOa3k.js";import{P as d}from"./Preloader-DNf5lAFe.js";const h=l.memo(e=>{const c=l.useRef(null),s=l.useRef(null),[r,i]=l.useState(!1);l.useEffect(()=>{const n=setTimeout(()=>{c.current.autoplay=!0,c.current.play()},1800);return()=>clearTimeout(n)},[]);const m=()=>{s.current&&!r&&(i(!0),s.current.paused&&s.current.play())};return t.jsxs("aside",{className:"flex flex-col items-center justify-center lg:justify-normal w-full lg:w-[32rem] xl:w-[53.5rem] gap-4 mt-5 pb-10 lg:h-[100vh] lg:overflow-y-scroll",children:[t.jsxs("div",{className:"previews flex flex-col items-center justify-center gap-2",children:[t.jsx("video",{src:e.video,ref:c,type:"video/mp4",loop:!0,muted:!0,playsinline:!0}),t.jsx("img",{loading:"lazy",src:e.img2}),t.jsx("img",{loading:"lazy",src:e.img1}),t.jsx("img",{loading:"lazy",src:e.img3})]}),e.features?t.jsxs("article",{className:"project-features flex flex-col",children:[t.jsx("h2",{className:"project-features-head text-xl",children:"Project Features"}),t.jsxs("ul",{className:"features-reviews flex flex-col xl:flex-row gap-4",children:[t.jsx("li",{className:"int",name:"adaptiveness",children:t.jsx("img",{loading:"lazy",src:e.adapt})}),t.jsx("li",{className:"int",name:"transition",children:t.jsx("video",{ref:s,muted:!0,onMouseOver:m,onMouseOut:()=>i(!1),playsinline:!0,children:t.jsx("source",{src:e.transition,type:"video/mp4"})})}),t.jsx("li",{className:"int",name:"cursor",children:t.jsx("img",{loading:"lazy",src:e.cursor})})]})]}):""]})}),a=l.memo(({techName:e,techImg:c})=>t.jsxs("li",{className:"flex items-center gap-2",children:[t.jsx("p",{className:"text-[0.9rem] md:text-lg",children:e}),t.jsx("img",{src:c,loading:"lazy",alt:"",className:"w-5 md:w-6"})]})),g="/portfolio/icons/web-icon.svg",o=l.memo(e=>t.jsxs("aside",{className:"mt-5 flex flex-col gap-10 w-[32rem]",children:[t.jsxs("article",{className:"flex flex-col items-start gap-3",children:[t.jsx("h1",{className:"project-head int text-5xl cursor-default",children:e.projectName}),t.jsx("p",{className:"text-base w-[21.5rem] md:w-[46rem] lg:w-fit",children:e.desc})]}),t.jsxs("div",{className:"flex flex-col items-start gap-1",children:[t.jsx("h1",{className:"technologies-head text-lg w-72 md:w-full md:text-xl",children:"Techlogies that are used in the project: "}),t.jsxs("ul",{className:"techlogies-list",children:[t.jsx(a,{techName:e.tech1Name,techImg:e.tech1Img}),t.jsx(a,{techName:e.tech2Name,techImg:e.tech2Img}),t.jsx(a,{techName:e.tech3Name,techImg:e.tech3Img}),t.jsx(a,{techName:e.tech4Name,techImg:e.tech4Img})]})]}),t.jsxs("article",{className:"flex flex-col items-start gap-2",children:[t.jsxs("a",{href:e.gitUrl,target:"_blank",className:"int source-link text-lg flex items-center gap-2 text-[#F3DBC7]",children:["GitHub",t.jsx("img",{src:x,alt:"",className:"w-6"})]}),t.jsxs("a",{href:e.webUrl,target:"_blank",className:"int source-link text-lg flex items-center gap-2 text-[#F3DBC7]",children:["Website",t.jsx("img",{src:g,alt:"",className:"w-6 fill-white"})]})]})]})),N=l.memo(e=>(document.title=e.project,t.jsxs("section",{className:"project-page flex flex-col-reverse lg:flex-row gap-8 justify-center items-start px-4 text-[#dddddd] w-full lg:h-[100vh] overflow-hidden",children:[t.jsx(d,{txt:e.project}),t.jsx(h,{video:e.video,img1:e.previewImg1,img2:e.previewImg2,img3:e.previewImg3,features:e.features,adapt:e.adapt,cursor:e.cursor,transition:e.transition}),t.jsx(o,{projectName:e.project,desc:e.desc,tech1Name:e.tech1Name,tech1Img:e.tech1Img,tech2Name:e.tech2Name,tech2Img:e.tech2Img,tech3Name:e.tech3Name,tech3Img:e.tech3Img,tech4Name:e.tech4Name,tech4Img:e.tech4Img,gitUrl:e.gitUrl,webUrl:e.webUrl})]}))),w="/portfolio/icons/css.png";export{N as P,w as c};