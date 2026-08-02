// const student = {
//     fullName: "Farhan Khan",
//     age: 20,
//     marks: 94.4,
//     printMarks : function () {
//         console.log("marks = ", this.marks);
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     }
// };

// const karanArjun1 = {
//     salary: 50000,
// }

// const karanArjun2 = {
//     salary: 50000,
//     calcTax() {
//         console.log("Tax rate is 20%");
//     }
// }

// const karanArjun3 = {
//     salary: 50000,
// }

// const karanArjun4 = {
//     salary: 50000,
// }


// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;


// class ToyotaCar{
//     constructor(brand, mileage){
//         console.log("Creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);


class Parent{
    hello () {
        console.log("hello");
    }
}

class Child extends Parent{

}

let obj = new Child();
obj.hello();


class Person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat () {
        console.log("eat");
    }

    sleep () {
        console.log("sleep");
    }
}

class Engineer extends Person{
    work() {
        console.log("build something");
    }
}

let Farhan = new Engineer();

console.log(Farhan.species);
Farhan.eat();
Farhan.sleep();
Farhan.work();