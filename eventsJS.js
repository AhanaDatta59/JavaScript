let btn1=document.querySelector("#btn1")
// btn1.onclick = (e) => {
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX, e.clientY)//positional
//     console.log("btn1 was licked");
// }
btn1.addEventListener("click", (e) =>{
    console.log(e, e.type, e.target)
    console.log("Handler 1")
})
btn1.addEventListener("click", () =>{
    console.log("Handler 2")
})
const handler3 = () => {
    console.log("Handler 3")
}
btn1.addEventListener("click",handler3)
btn1.addEventListener("click", () =>{
    console.log("Handler 4")
})

btn1.removeEventListener("click",handler3)
let div=document.querySelector("div")
// div.onmouseover = (evt) =>{
//     console.log(evt)
//     console.log(evt.type)
//     console.log("Youre in div")
// }