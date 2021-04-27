//hamburger code from https://www.youtube.com/watch?v=dIyVTjJAkLw

const hamburgerbutton = document.querySelector('#hamburger');
let hamburgeropen = false;
hamburgerbutton.addEventListener('click', () => {
  if(hamburgeropen == false) {
    hamburgerbutton.classList.add('open');
    hamburgeropen = true;
  }
  else {
    hamburgerbutton.classList.remove('open');
    hamburgeropen = false;
  }
});

function myFunction() {
  var x = document.getElementById("navigation_links");
  if (x.className === "nav_links") {
    x.className += " responsive";
  } else {
    x.className = "nav_links";
  }
}
var navmenu = document.getElementById("navigation");
document.querySelector("#hamburger").addEventListener("click", function() {
  console.log("press hamburger menu");
  if (document.getElementById("navigation").classList.contains("navclosed") == true){
//    document.getElementById("navigation_links").style.height = "300px";
    document.getElementById("navigation").classList.remove("navclosed");
    navmenu.classList.add('slideopen')
//    navmenu.classList.toggle('active');
  }
  else {
//    document.getElementById("navigation_links").style.height = "auto";
      document.getElementById("navigation").classList.add("navclosed");
    navmenu.classList.remove('slideopen');
  }
//	var x = document.getElementById("navigation_links");
// if (x.className === "nav_links") {
//   x.className += " responsive";
// } else {
//   x.className = "nav_links";
//  }
});