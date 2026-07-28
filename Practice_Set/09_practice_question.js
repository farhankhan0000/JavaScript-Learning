// function countVowels(str) {
//     let count = 0;
//     for (const letter of str){
//         if(letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u"){
//             count++;
//         }
//     }
//     return count;
    
// }

// const Vowels = (str1)=>{
//     let count = 0;
//     for (const letter of str){
//         if(letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("Hey I am Farhan Khan"))

// array = [1, 2, 3, 4, 5, 6];

// array.forEach((num) => {
//     console.log(num**2);
// });


// marks = [93, 99, 88, 79, 85];

// let goodStudent = marks.filter((val) => {
//     if(val > 90){
//         return val;
//     }
// });

// console.log(goodStudent);

let n = Number(prompt("enter the number"));

let arr = [];
for(let i = 1; i <= n; i++){
    arr[i] = i;
    console.log(arr[i]);
}

sum = arr.reduce((res,current) => {
    return res+current;
});

multi = arr.reduce((res,current) => {
    return res*current;
});

console.log(sum);
console.log(multi);
