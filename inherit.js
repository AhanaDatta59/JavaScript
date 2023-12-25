class Parent{
    constructor(){
        console.log("Enter parent")
        console.log("Homo Sapiens")
    }
    parameter(){
        console.log("S");
    }
    hello(){
        console.log("Hello! Ahana");
    }
}

class Child extends Parent{
    bye(){
        console.log("Byeee")
    }
}

class Child2 extends Parent{
    constructor(branch){
        console.log("Child enter")
        super();
        this.branch=branch;
        console.log("child exit")
    }
    yo(){
        console.log("Yooooooo")
    }
    parameter(){
        console.log("Super");
    }
    
}
//let obj = new Child();
let obj2 = new Child2();

