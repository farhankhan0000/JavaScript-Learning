let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (mark of marks){
    sum += mark;
}

let average_mark = sum/marks.length;
console.log(average_mark);