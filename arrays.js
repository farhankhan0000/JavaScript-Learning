// let marks = [92, 37, 84, 29, 99];
// console.log(marks);
// console.log(marks.length);

// for (let i = 0; i < marks.length; i++){
//     console.log(marks[i]);
// }

// let heroes = ["Spider Man", "Iron Man", "Luffy", "Zoro", "Guts"];

// for (let hero of heroes){
//     console.log(hero);
// }

// let foodItems = ["Papaya", "Orange", "Potato", "Tomato"];
// foodItems.push("Burger", "Pizza", "Mango");
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log(deletedItem);
// console.log(foodItems.toString());

// let dc_heroes = ["super Man", "Flash", "Bat Man", "Aqua Man", "Wonder Woman"];

// let heroes = marvel_heroes.concat(dc_heroes);
// console.log(heroes);

// marvel_heroes.unshift("Captain America");

// let marvel_heroes = ["Iron Man", "Spider Man", "Hulk", "Thor", "Ant Man"];
// console.log(marvel_heroes);
// console.log(marvel_heroes.slice(1, 3));

// let array = [1, 2, 3, 4, 5, 6, 7];
// array.splice(1, 2, 9, 10);
// array.splice(2, 0, 101);
// array.splice(4, 1);



// arr = [1, 2, 3, 4, 5, 6];

// array.forEach((square) => {
//     console.log(square*square);
//  });

// let nums = [67, 52, 39];

// let newArr = nums.map((val) => {
//     return val*val;
// })

// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr);

// let arr = [1, 2, 3, 4];

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// })

// console.log(output);

let arr = [1, 2, 3, 4];

const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev:curr;
})

console.log(output);