const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");
let data;
const facts = async() => {
    let response =  await fetch(URL); // we are putting await since it might take time to fetch 
    console.log(response);//JSON format

    data = await response.json();//making json data readable
    // console.log(data);
    factPara.innerText = data[1].text;
}
btn.addEventListener("click", facts);