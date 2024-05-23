// toLowerCase

// var person1 = "Ahnaf";
// var person2 = "AhnaF";

// if(person1.toLowerCase === person2.toLowerCase){
//     console.log("Person1 and Person2 are the same person");
// }
// else{
//     console.log("they are two different person");
// }

// toUpperCase

// var admin = "Ahanf";
// var pass = "Ahnaf";

// if(admin.toUpperCase === pass.toUpperCase){
//     console.log("login");
// }
// else{
//     console.log("invalid user");
// }

// ------------------------------
// Includes:

// var identity = "Ahnaf Akib";
// var searchResult = identity.includes("Akib");
// console.log(searchResult);

// function search(input){
//     var lowarCaseInput = input.toLowerCase();
//     var lowarCaseString = testString.toLowerCase();
//     if(lowarCaseString.includes(lowarCaseInput)){
//         console.log("the word exists in the string");
//     }
//     else{
//         console.log("error 404");
//     }

// }

// var testString = "I am a blue bird nissan";
// var searchText = "Nissan";
// var output = search(searchText);

// ------------------------------------------------------
// String split

// var stringAbc =
//   "Spa is a drinking water company. No one knows if the water is safe to drink or not, but it's an expensive bottle of water";

//   var splitString = stringAbc.split(".");
//   console.log(splitString);

// --------------------------------------
// String join

// var stringAbc = [
//   "Nissan Blue bird is a car",
//   "There is nothing Blue about the car",
//   "neither there is anything about bird.",
// ];

// var result = stringAbc.join(" and ");
// console.log(result);

// -----------------------------------------
// Js math properties

// var power = Math.pow(2, 2);
// console.log(power);

// var student1 = 20;
// var student2 = 30;
// var gap = Math.abs(student1 - student2);
// console.log(gap);

// function friendRequest(value1, value2){
//     if(value1 > value2){
//         var difference = value1 - value2;
//     }
//     else{
//         difference = value2 - value1;
//     }
//     return difference;
// }

// var student1Mark = 20;
// var student2mark = 30;
// var output = friendRequest(student1Mark, student2mark);
// console.log(output);

// var randomNumber = Math.random()*10;
// console.log(randomNumber);
// console.log(Math.round(randomNumber));
// console.log(Math.ceil(randomNumber));
// console.log(Math.floor(randomNumber));

// ------------------------------
// Destructuring 
// #way: 1
// var value1 = 5;
// var value2 = 7;
// console.log(value1, value2);
// const temp = 5;

// value1 = value2;
// value2 = temp;
// console.log(value1, value2);

// #way: 2

// var num1 = 5;
// var num2 = 7;
// console.log(num1, num2);
// [num1, num2] = [num2, num1];
// console.log(num1, num2);

