// mobile sidenav bar functions
function openNav() {
    document.getElementById("sidenavm").style.width = "230px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}
  
function closeNav() {
    document.getElementById("sidenavm").style.width = "0";
    document.body.style.backgroundColor = "#cac4bf";
}

// SCRAPPED IDEA
// changes desktop/tablet sidebar icons when corresponding sections are in view; originally sourced from javascripttutorial.net
// function isInViewport(sec) {
//   const rect = sec.getBoundingClientRect();
//   return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
// function transformBtn(btn) {
//   document.getElementById(btn).style.opacity = "1.0";
//   document.getElementById(btn).style.width = "40px";
// } 
// function ogBtn(btn) {
//   document.getElementById(btn).style.opacity = "0.5";
//   document.getElementById(btn).style.width = "30px";
// } 

// const secAbout = document.querySelector('.about-content');
// document.addEventListener('scroll', function () {
//   isInViewport(secAbout) ? transformBtn("aboutBtn") : ogBtn("aboutBtn");
// }, {
//   passive: true
// });