var myform,
  el1,
  el2,
  el3,
  el4,
  el5,
  atr1,
  atr2,
  atr3,
  el3a,
  el4a,
  el5a,
  mybut0,
  mybut1,
  mybut2,
  mybut3,
  mybut4;

//////////////////////////////////////
myform = document.getElementsByTagName("form")[0];
mybut0 = document.querySelectorAll("button")[0];
mybut1 = document.querySelectorAll("button")[1];
mybut2 = document.querySelectorAll("button")[2];
mybut3 = document.querySelectorAll("button")[3];
mybut4 = document.querySelectorAll("button")[4];

el1 = document.createElement("input");
atr1 = document.createAttribute("type");
atr1.value = "text";
el1.setAttributeNode(atr1);

el2 = document.createElement("input");
atr2 = document.createAttribute("type");
atr2.value = "password";
el2.setAttributeNode(atr2);

el3 = document.createElement("h1");
el3a = document.createTextNode("islam");

el4 = document.createElement("p");
el4a = document.createTextNode("raslan");

el5 = document.createElement("a");
el5a = document.createTextNode("page2.html");
/////////////////////////////////////

////////////////////////////
mybut0.onclick = function () {
  myform.prepend(el1);
};
mybut1.onclick = function () {
  myform.appendChild(el2);
};
mybut2.onclick = function () {
  myform.appendChild(el3);
  el3.appendChild(el3a);
};
mybut3.onclick = function () {
  myform.appendChild(el4);
  el4.appendChild(el4a);
};
mybut4.onclick = function () {
  myform.appendChild(el5);
  el5.appendChild(el5a);
};
