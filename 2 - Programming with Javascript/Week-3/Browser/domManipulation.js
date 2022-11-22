// example.com
const h2 = document.createElement("h2")
h2.innerText = "This is an h2 heading"
h2.setAttribute("id","sub-heading")
h2.setAttribute("class", "secondary")
h2 // <h2 id = "sub-heading" class "secondary">This is an h2 heading</h2>
document.body.appendChild(h2)

console.log(document) // returns DOM

document.querySelector("p")
document.querySelector("a")
document.querySelectorAll("p")
document.getElementById("heading")
document.getElementsByClassName("txt")