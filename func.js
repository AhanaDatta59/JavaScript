// function demo(msg){
//     console.log("Good");
//     console.log(msg);
// }
// demo("Ahana");

// const demo = (str) => {
//     let c=0;
//     str=str.toLowerCase();
//     for(let i=0;i<str.length;i++){
//         if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u')
//         c++;
//     }
//     return c;
// }
// console.log(demo("abcde"));

let arr = [1,2,3,4,5];
arr.forEach((val,ind,arr)=>{
    console.log(val,ind,arr)
})