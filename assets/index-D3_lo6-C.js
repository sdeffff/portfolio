const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Hero-DhKJ1nUp.js","assets/react-CtW5r0F0.js","assets/react-router-dom-DyCDWfuU.js","assets/react-dom-CoD-mNjq.js","assets/scheduler-CzFDRTuY.js","assets/react-router-C7geVa70.js","assets/@remix-run-BOUEh3jQ.js","assets/Preloader-B8eiGbal.js","assets/Hero-FEEE3m-V.css","assets/ProjectsPage-B31IWcUw.js","assets/square-up-BsEJ74Ra.js","assets/projects-Dp3JXfX9.css","assets/SquareUp-Bn4Nf_vN.js","assets/css-DkH6u-q_.js","assets/MiniProjects-2rKCaCxT.js"])))=>i.map(i=>d[i]);
import{r as l,j as r}from"./react-CtW5r0F0.js";import{c as y}from"./react-dom-CoD-mNjq.js";import{L as E,B as _}from"./react-router-dom-DyCDWfuU.js";import{d as g,e as h}from"./react-router-C7geVa70.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BOUEh3jQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function p(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(t){if(t.ep)return;t.ep=!0;const e=p(t);fetch(t.href,e)}})();const v="modulepreload",L=function(u){return"/portfolio/"+u},x={},j=function(s,p,d){let t=Promise.resolve();if(p&&p.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),o=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));t=Promise.all(p.map(n=>{if(n=L(n),n in x)return;x[n]=!0;const c=n.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${f}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":v,c||(i.as="script",i.crossOrigin=""),i.href=n,o&&i.setAttribute("nonce",o),document.head.appendChild(i),c)return new Promise((a,m)=>{i.addEventListener("load",a),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})}))}return t.then(()=>s()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},P=l.lazy(()=>j(()=>import("./Hero-DhKJ1nUp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),R=l.lazy(()=>j(()=>import("./ProjectsPage-B31IWcUw.js"),__vite__mapDeps([9,1,2,3,4,5,6,10,7,11]))),w=l.lazy(()=>j(()=>import("./SquareUp-Bn4Nf_vN.js"),__vite__mapDeps([12,1,13,7,10,11]))),O=l.lazy(()=>j(()=>import("./MiniProjects-2rKCaCxT.js"),__vite__mapDeps([14,1,13,7,11])));function b(){const u=l.useRef(null),s=l.useRef(null),p=d=>d.split("").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("");return l.useEffect(()=>{const d=(e,o,n)=>{const c=e.clientX,f=e.clientY,i={transform:`translate(${c}px, ${f}px) scale(${o?6:1})`};if(u.current.animate(i,{duration:300}),u.current.style.transform=`translate(${c}px, ${f}px) scale(${o?6:1})`,s.current.style.opacity=0,n!==null){let a=n.children[0].children[0].src.split("/").pop().split(".")[0].split("-");for(let m=0;m<a.length;m++)a[m]=p(a[m]);a=a.join(" "),s.current.innerHTML=a,s.current.style.opacity=1}},t=e=>{if(window.innerWidth>1024){const o=e.target.closest(".int"),n=o!==null,c=e.target.closest(".proj");d(e,n,c)}};return window.addEventListener("mousemove",t),()=>{window.removeEventListener("mousemove",t)}},[]),r.jsxs(r.Fragment,{children:[r.jsx(E,{to:"/portfolio/",children:r.jsx("h2",{className:"font-extralight fixed",children:"M"})}),r.jsx("div",{id:"noise"}),r.jsx(l.Suspense,{fallback:"loading...",children:r.jsxs(g,{children:[r.jsx(h,{path:"/portfolio/",element:r.jsx(P,{})}),r.jsx(h,{path:"/portfolio/projects",element:r.jsx(R,{})}),r.jsx(h,{path:"/portfolio/projects/square-up",element:r.jsx(w,{})}),r.jsx(h,{path:"/portfolio/projects/mini-projects",element:r.jsx(O,{})})]})}),r.jsx("div",{className:"cursor-inner hidden lg:block",ref:u,children:r.jsx("p",{className:"project-name",ref:s})})]})}y(document.getElementById("root")).render(r.jsx(l.StrictMode,{children:r.jsx(_,{children:r.jsx(b,{})})}));export{j as _};
