!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(){timerId=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));d.style.backgroundColor=e,t.disabled=!0}),1e3),e.disabled&&(e.disabled=!1)})),e.addEventListener("click",(function(){clearInterval(timerId),e.disabled=!0,t.disabled&&(t.disabled=!1)}))}();
//# sourceMappingURL=01-color-switcher.8fa56968.js.map