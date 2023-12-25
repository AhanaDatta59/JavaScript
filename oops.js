
// const student = {
//     fullName: "Ahana Datta",
//     marks: 90.9,
//     printMarks(){
//         console.log(this.marks);
//     }
// }

// const ahana = {
//     cgpa: 9.18,
// };

// ahana.__proto__ = student; 

class Toyotacar {
    constructor(brand){
        this.brand=brand;
        //console.log("Cons")
    }
    start(){
        console.log("Start car");
    }
    stop(){
        console.log("Stop car");
    }
}

let fortuner = new Toyotacar("branded");
let lexus = new Toyotacar("not branded");
//lexus.setBrand("branded")