//hamburger code from https://www.youtube.com/watch?v=dIyVTjJAkLw

const hamburgerbutton = document.querySelector('#hamburger');
let hamburgeropen = false;
hamburgerbutton.addEventListener('click', () => {
  if(hamburgeropen == false) {
    hamburgerbutton.classList.add('open');
    hamburgeropen = true;
    console.log("Opened hamburger menu")
  }
  else {
    hamburgerbutton.classList.remove('open');
    hamburgeropen = false;
    console.log("Closed hamburger menu");
  }
//  hamburgerbutton.focus();
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

//code from https://codepen.io/desandro/pen/LmWozd and https://www.nickang.com/2018-03-06-add-event-listener-for-loop-problem-in-javascript/


var cards = document.querySelectorAll('.card');

cards.forEach(function(card, index) {
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
  });
});
//  card[i].addEventListener('click', function(i) {
//    card.classList.toggle('is-flipped');
// });
//}
//card.addEventListener( 'click', function() {
//card.classList.toggle('is-flipped');
//});

//code to assist with tab accessibility in mobile view, from https://www.nickang.com/2018-03-06-add-event-listener-for-loop-problem-in-javascript/
//var enterKeyCode = 13;
hamburgerbutton.addEventListener("click", function(event) {
  var navopen = navmenu.checked;

  if(navopen) {
      navmenu.checked = false;
  } else {
      navmenu.checked = true;
  }
});

hamburgerbutton.onfocus = openthenav;

function openthenav() {
  console.log("hamburger in focus");
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && hamburgeropen == false) {
      hamburgerbutton.click();
    }
  })
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && hamburgeropen == true) {
    hamburgerbutton.click();
  }
})