!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=document.querySelector("body"),r=function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};e.addEventListener("click",(function(){t=setInterval(r,1e3),e.setAttribute("disabled",!0)})),n.addEventListener("click",(function(){clearInterval(t),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.901c83e6.js.map