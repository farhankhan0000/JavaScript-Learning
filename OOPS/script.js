// const student = {
//     fullName: "Farhan Khan",
//     age: 20,
//     marks: 94.4,
//     printMarks : function () {
//         console.log("marks = ", this.marks);
//     },
// };

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
};

const karanArjun1 = {
    salary: 50000,
}

const karanArjun2 = {
    salary: 50000,
    calcTax() {
        console.log("Tax rate is 20%");
    }
}

const karanArjun3 = {
    salary: 50000,
}

const karanArjun4 = {
    salary: 50000,
}


karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
