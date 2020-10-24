console.log("This tutorial is for popup window");

const parent = document.querySelector(".parent_model"),
  button = document.querySelector(".btn"),
  x = document.querySelector(".X"),
  model = document.querySelector(".model"),
  body = document.querySelector("section");

button.addEventListener("click", show);
function show() {
  parent.style.display = "block";
  body.style.filter = "blur(10px)";
}
x.addEventListener("click", disapper);
function disapper() {
  parent.style.display = "none";
  body.style.filter = "blur(0px)";
}

parent.addEventListener("click", disapperParent);
function disapperParent(e) {
  if (e.target.className == "parent_model") {
    parent.style.display = "none";
    body.style.filter = "blur(0px)";
  }

}