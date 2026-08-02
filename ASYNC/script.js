// console.log("one");
// console.log("two");


// setTimeout(() =>{
//     console.log("Hello")
// }, 4000) // timeout

// console.log("three");
// console.log("four");
// console.log("five");

// function sum(a, b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a,b);
// }

// calculator (1,2,sum);

// const hello = () =>{
//     console.log("hello");
// };

// setTimeout(hello, 3000); 

// let age = 19;

// if(age > 18){
//     if(age >= 60){
//         console.log("senior");
//     }
//     else{
//         console.log("Middle");
//     }
// }else{
//  console.log("Child");
// }

let promise = new Promise((resolve, reject) =>{
    console.log("I am a Promise");
    // resolve("success");
    reject("Some error");
});
// function getData(dataId, getNextData){//2S
//     setTimeout(() =>{
//         console.log("data = ", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// // CallBack Hell
// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4);
//         });
//     });
// });
