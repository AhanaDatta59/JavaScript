// let arr=[1,2,3,4,5];
// let newArr=arr.map((val)=>{
//     return val*2;
// })
// console.log(newArr);//[1, 2, 3, 4, 5]
// console.log(arr);

// let arr=[1,2,3,4,5];
// let newArr=arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(newArr);//[1, 2, 3, 4, 5]
// console.log(arr);

let arr=[4,6,9,0,1,3];
let output=arr.reduce((res,cur)=>{
    res=Math.max(res,cur);
    return res;
})
console.log(output)
