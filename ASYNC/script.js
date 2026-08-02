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


// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a Promise");
//     // resolve("success");
//     // reject("Some error");
// });

// const getPromise = () =>{
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         reject("network error");
//         // resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fullfilled", res);
// })

// promise.catch((err) => {
//     console.log("Rejected", err);
// })


// function getData(dataId){//2S
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//         }, 3000);
//     });
// }


// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// })

// // CallBack Hell
// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () =>{
//             getData(4);
//         });
//     });
// });




// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }


// console.log("fetching data1......");
// asyncFunc1().then((res) => {
//     console.log("fetching data2......");
//     asyncFunc2().then((res) => {
//     });
// });



// console.log("fetching data2......");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })


function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 2000);
    })
}

async function getWeatherData(){
    await api(); //1st
    await api(); //2nd
}