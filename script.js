// //Dom means document object model

// // console.log(window);
// console.log(document.body);

// DOM

const title = document.getElementById("title")

// title.style.backgroundColor = "green"
// title.style.height = "100px"
// title.style.padding = "10px"
// title.style.borderRadius = "10px"

// const a = title.innerHTML
// const b = title.innerText
// const c = title.textContent
// console.log(a);
// console.log(b);
// console.log(c);

//Dom Create new element

const parent = document.querySelector(".parent");

// console.log(parent.children[0].innerHTML);

// for (i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color = "orange";
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const days = document.querySelector(".day");

// console.log(days.parentElement);
// console.log(days.nextElementSibling);

// console.log("NODES: " , parent.childNodes);

const div = document.createElement("h1");
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "kaif")
// div.innerText = "practice DOM"
const addText = document.createTextNode("parctice DOM");
div.appendChild(addText)
console.log(div);