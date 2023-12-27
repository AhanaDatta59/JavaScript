// async function hello(){
//     console.log("Hello");
// }

// function api(){
//     return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 console.log("Weather data");
//                 resolve(200);
//             }, 2000)
//     })
// }

// async function getData(){
//     await api()//1
//     await api()//2
// }

//async await 
function getdata(event) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", event);
            resolve("done");
        },4000)
    })
}

async function allGet(){
    await getdata(1);
    await getdata(2);
}
