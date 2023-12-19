let btn=document.createElement("button")
btn.innerText="Hey!Click here"
//console.dir(btn)

btn.style.background="red"
btn.style.color="white"

document.querySelector("body").prepend(btn)

let par=document.querySelector("p");
console.log(par)
// par.getAttribute("para")
// par.setAttribute("para","newPara")