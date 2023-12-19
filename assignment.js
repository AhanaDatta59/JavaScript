// let tag=document.querySelector("h2");
// console.dir(tag.innerText);
// tag.innerText+=" Ahana Datta"
// console.log(tag.innerText)

let divs=document.querySelectorAll(".box");
console.dir(divs);
// divs[0].innerText+=" Good"
// console.dir(divs[0].innerText);
// divs[1].innerText+=" better"
// divs[2].innerText+=" best"

let ind=0;
for(let div of divs){
div.innerText+=`\nGood ${ind}`;
ind++;
}