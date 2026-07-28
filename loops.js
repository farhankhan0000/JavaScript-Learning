// for(let i = 1; i <= 5; i++){
//     console.log("Farhan Khan");
// }

// console.log("Loop has ended");

// Calculate sum of 1 to 5

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum);

//While loop
// let i = 1;
// while(i <= 5){
//     console.log("i = ", i);
//     i++;
// }

//for-of loop
// let str = "FarhanKhan";
// let size = 0;
// for(let i of str){
//     console.log("i = ", i);
//     size++;
// }

// console.log(size);

//for-in loop
let student = {
    name : "Farhan Khah",
    age : 20,
    cgpa : 8.2,
    ispass: true
}

for (let i in student){
    console.log("key = ", i, "value = ", student[i]);
}