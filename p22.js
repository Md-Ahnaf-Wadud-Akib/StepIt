// let marks = [2, 3, 4, 5, 6, 7, 8];

// console.log(Array.isArray(marks));
// console.log(marks.indexOf(8));

let even =[2, 4, 6, 8];
let odd = [1, 3, 5, 7];
let allNumbers = even.concat(odd);
// console.log(allNumbers);

let partial = even.slice(1, 3);
console.log(partial);
console.log(even);

let partial1 = odd.splice(1, 2);
console.log(partial1);
console.log(odd);