// document.getElementById("id_name") //string
// document.getElementsByTagName("tag_name") //[]
// document.getElementsByClassName("className") //[]

// document.querySelector("#id_name") //string
// document.querySelector(".className") //string
// document.querySelector("tag_name") //string

// document.querySelectorAll("") //[]

const element = document.getElementById("first"); //div
// element.innerHTML = "<button>Click me</button>";
element.style.backgroundColor = "red";
element.classList.add("new1");
element.classList.add("new2");
element.classList.remove("new1");
element.classList.toggle("test");

const h3 = document.createElement("h3");
h3.innerText = "this is heading 3";
document.body.appendChild(h3);

const button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
  button.textContent = "clicked";
});
