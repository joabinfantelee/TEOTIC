var lastScrollTop = 0;
window.addEventListener("scroll", function(){
var st = window.pageYOffset || document.documentElement.scrollTop;
if (st > lastScrollTop){
document.getElementById("menu-container").style.opacity = "0";
document.getElementById("menu-container").style.top = "-100%";
document.getElementById("gradient1").style.height = "100px";
} else {
document.getElementById("menu-container").style.opacity = "1";
document.getElementById("menu-container").style.top = "0";
document.getElementById("gradient1").style.height = "105px";
}
lastScrollTop = st;
}, false);
