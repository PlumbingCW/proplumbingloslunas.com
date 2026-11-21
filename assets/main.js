(function(){
var d=document,h=d.documentElement;h.classList.add("js");
var tg=d.querySelector(".nav-toggle"),ov=d.querySelector(".mob-overlay"),dr=d.querySelector(".mob-drawer");
function setNav(o){h.classList.toggle("nav-open",o);h.style.overflow=o?"hidden":"";if(tg)tg.setAttribute("aria-expanded",o?"true":"false");if(dr)dr.setAttribute("aria-hidden",o?"false":"true");}
if(tg){tg.addEventListener("click",function(){setNav(!h.classList.contains("nav-open"));});}
if(ov){ov.addEventListener("click",function(){setNav(false);});}
d.querySelectorAll(".mob-drawer a,.mob-drawer .close").forEach(function(e){e.addEventListener("click",function(){setNav(false);});});
d.addEventListener("keydown",function(e){if(e.key==="Escape")setNav(false);});
d.querySelectorAll(".faq-q").forEach(function(b){b.addEventListener("click",function(){
var a=b.parentNode.parentNode.querySelector(".faq-a"),open=b.getAttribute("aria-expanded")==="true";
b.setAttribute("aria-expanded",open?"false":"true");a.style.maxHeight=open?"0px":a.scrollHeight+"px";});});
d.querySelectorAll(".dd-btn").forEach(function(b){b.addEventListener("click",function(){var p=b.parentNode;p.classList.toggle("open");b.setAttribute("aria-expanded",p.classList.contains("open")?"true":"false");});});
})();
