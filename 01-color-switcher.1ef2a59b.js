function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const t=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),o=document.querySelector("body");let l=null;d.disabled=!0,t.addEventListener("click",(()=>{o.style.backgroundColor=e(),l=setInterval((()=>{o.style.backgroundColor=e()}),1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(()=>{clearInterval(l),d.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1ef2a59b.js.map
