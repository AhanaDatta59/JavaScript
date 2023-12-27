
// function asyncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data1")
//             resolve("successful 1")
//         }, 4000)
//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data2")
//             resolve("successful 2")
//         }, 4000)
//     })
// }

// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log("Success", res)
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log("Second Success", res);
//     })
// })


// console.log("t")
// console.log("t")

// setTimeout(() => {
//     console.log("Hello")
// }, 4000) //time out

// console.log("t")
// console.log("t")

// function sum(a,b){
//     console.log(a+b);
// };

// function cal(a,b,sumCallBack){
//     sumCallBack(a,b);
// }

// function getdata(event, nextEvent) {
//     setTimeout(() => {
//         console.log("Goodness",event)
//         if(nextEvent)
//         {
//             nextEvent();
//         }
//     },4000)
// }

// //callback hell problem
// getdata(1,()=>{
//     getdata(2, ()=>{
//         getdata(3)
//     });
// })


// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         console.log("I am a promise");
//        //resolve("Resolve is called");
//        reject("Rejected")
//     })
// }
// let promise = getPromise();
// promise.then( (res) => {
//     console.log("resolved", res)
// })
// promise.catch((err)=>{
//     console.log("rejected", err)
// })


// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a promise")
//     //resolve(123)
//     reject(12345)
// });

// function getData(data, nextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Goodness",data)
//             resolve("success");
//             if(nextData){
//                nextData();
//             }
//          },4000)
//     })
// }

//promise chaining
function getData(data){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Goodness",data)
            resolve("success");
         },4000)
    })
}
getData(1).then((res)=>{
    //console.log(res);
    return getData(2);
})
.then((res)=>{
        //console.log(res)
        return getData(3);
    })
    .then((res)=>{
        console.log(res)
    })