import{p as a,R as m,j as s,F as h,a as e,C as p,r as g,b as f}from"./vendor.34d31b90.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function d(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(i){if(i.ep)return;i.ep=!0;const t=d(i);fetch(i.href,t)}};w();const c="./images/";var v=[{title:"@cleyton_jesus07",src:`${a.resolve(c,"pic1.jpg")}`,link:"https://www.instagram.com/cleyton_jesus07/"},{title:"@ravena_skt",src:`${a.resolve(c,"pic2.jpg")}`,link:"https://www.instagram.com/ravena_skt/"},{title:"@wtfleeeh",src:`${a.resolve(c,"pic3.jpg")}`,link:"https://www.instagram.com/wtfleeeh/"},{title:"@playstation_br",src:`${a.resolve(c,"pic4.jpg")}`,link:"https://www.instagram.com/playstation_br/"},{title:"@cloreto.exe",src:`${a.resolve(c,"pic5.jpg")}`,link:"https://www.instagram.com/cloreto.exe/"}],y="./images/instagram.svg",u="./images/logoInstagram.svg";function S(){const[l,r]=m.useState(v);return s(h,{children:[e(T,{}),e(b,{}),s("div",{className:"icon",children:[e("img",{src:u,alt:"icon"}),e("img",{src:y,alt:"name"})]}),e("div",{className:"container",children:e(p,{itemsToShow:6,itemsToScroll:6,showArrows:!0,pagination:!1,easing:"ease",tiltEasing:"ease",transitionMs:700,itemPadding:[50,10],breakPoints:[{width:1,itemsToShow:1,itemsToScroll:1,pagination:!0},{width:550,itemsToShow:2,itemsToScroll:2,pagination:!0},{width:850,itemsToShow:3,itemsToScroll:3,pagination:!0},{width:1150,itemsToShow:4,itemsToScroll:2},{width:1450,itemsToShow:5,itemsToScroll:5},{width:1750,itemsToShow:6,itemsToScroll:6}],children:l.map(({src:o,title:i,link:t},n)=>s("div",{className:"slide",children:[e(d,{src:o,link:t}),e("p",{children:i})]},n))})}),e("footer",{children:s("p",{children:["Desenvolvido por "," ",e("a",{href:"https://cleytonjesus07.github.io/LinkToLinktree/",children:"@cleyton_jesus07"})]})})]});function d({src:o,link:i}){return e("div",{className:"pic_box",children:e("div",{className:"pic_container",children:e("a",{href:i,target:"_blank",children:e("img",{src:o,alt:"foto de perfil"})})})})}}function T(){let l=g.exports.useRef(null);return s("div",{ref:r=>l=r,className:"loading",children:[e("div",{children:e("img",{src:u,alt:"logo"})}),e("div",{className:"container-fluid",children:e("div",{className:"fluid",onAnimationEnd:()=>{l.style.opacity=0,setTimeout(()=>l.style.visibility="hidden",2e3)}})})]})}function b(){return s("ul",{className:"background",children:[e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{})]})}f.render(e(m.StrictMode,{children:e(S,{})}),document.getElementById("root"));
