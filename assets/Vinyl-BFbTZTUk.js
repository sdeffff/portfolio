import{r as i,j as f}from"./react-CtW5r0F0.js";import{S as g,P as R,W as L,D as v,A as C,G as x,a as y}from"./three-DTJQEudx.js";const A=()=>{const s=i.useRef(null),p=i.useRef(null),t=i.useRef(null);return i.useEffect(()=>{const a=new g,r=new R(5,window.innerWidth/window.innerHeight,.1,100),o=new L({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(0,0),t.current=o,s.current.appendChild(o.domElement);const l=new v(8359053,.15);l.position.set(-.11,1.6,.03),a.add(l);const h=new C(16777215,.5);a.add(h);const u=new x,d=new y;d.setDecoderConfig({type:"js"}),d.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),u.setDRACOLoader(d),u.load("/portfolio/3d/vinyl.glb",n=>{const e=n.scene;e.anisotropy=16,p.current=e,e.traverse(c=>{c.isMesh&&(c.material.transparent=!0,c.material.opacity=1)}),a.add(e),e.position.set(0,0,0),window.innerWidth<=768?e.scale.set(.7,.7,.7):e.scale.set(1,1,1),e.rotation.x=.22;const m=()=>{requestAnimationFrame(m),e.rotation.y+=.0065,o.render(a,r)};m()},void 0,n=>{console.error("An error occurred loading the model: ",n)}),r.position.set(-.003,4,1.53),r.lookAt(0,0,0);const w=()=>{if(t.current){const n=window.innerWidth,e=window.innerHeight;r.aspect=n/e,r.updateProjectionMatrix(),t.current.setSize(n,e)}};return window.addEventListener("resize",w),w(),()=>{s.current&&t.current&&(s.current.removeChild(t.current.domElement),t.current.dispose())}},[]),f.jsx("div",{ref:s})},W=i.memo(A);export{W as default};
