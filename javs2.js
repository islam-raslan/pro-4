var slid = 1;
var h;
var o = document.getElementsByClassName("test");

showDivs(slid);
function plausDiv(n) {
  showDivs((slid += n));
}
function showDivs(n) {
  "use strict";

  if (n > o.length) {
    slid = 1;
  }
  if (n < 1) {
    slid = o.length;
  }
  for (h = 0; h < o.length; h++) {
    o[h].style.display = "none";
  }
  o[slid - 1].style.display = "block";
}
//////////////////////////////////////////////////////
/*var bu1, but2, mystyle, mypo;
but1 = document.getElementById("b1");
but2 = document.getElementById("b2");
mypo = document.getElementsByClassName("points")[0];
mystyle.style = `background-color: red;`;
bu1.onclick = function () {
  mypo.classList.add("po ");
};*/
////////
/*function myFunction() {
  var element = document.getElementsByClassName("points");
  for (i = 0; i < element.length; i = +1) {
    element[i].classList.toggle("po");
  }
}
/////////////////////////////////////////

var myNext = document.getElementById("points");
console.log(myNext.childNodes[1].nextElementSibling);
console.log(myNext.childNodes[1].nextSibling);
console.log(myNext.childNodes[3].previousElementSibling);
console.log(myNext.childNodes[1].previousSibling);
/////////////////////////////////////////
var myup, myopc;
myopc = document.getElementsByClassName("opc");
myup = document.getElementsByClassName("up");
function onhover() {
  "use strick";
  var style =
    " transition-duration: 1s; transform: translateY(90px); height=90px";
  myopc[0].style = style;
}
*/
