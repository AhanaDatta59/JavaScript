//light mode dark mode
let btn=document.querySelector("#mode")
let body=document.querySelector("body")
let currNode="light";
btn.addEventListener("click",()=>{
    if(currNode==="light"){
    currNode="dark";
    // document.querySelector("body").style.background="black";
    body.classList.add("dark")
    body.classList.remove("light")
    }
    else{
        currNode="light"
        body.classList.add("light")
        body.classList.remove("dark")
        // document.querySelector("body").style.background="white";
    }
    console.log(currNode)
})