// var result,
//   numbers = [2, 3, 4, 5, 6, 7, 8];

// result = numbers.slice(2, 4);

// // console.log(result);

// var include = numbers.includes(5);

// console.log(include);

// function moneyAmmount(money){
//     if(money >= 100){
//         console.log("Bring some food for me");
//     }
//     else{z
//         console.log("Bring some water please");
//     }

// }

// // var money = 110;

// moneyAmmount(120);

// function avarageMark(value1, value2, value3) {
//   var result = (value1 + value2 + value3) / 3;
//   return result;
// }
// const assignmentMarks1 = 50;
// const assignmentMarks2 = 65;
// const assignmentMarks3 = 54;

// var finalResult = avarageMark(assignmentMarks1, assignmentMarks2, assignmentMarks3);
// console.log(finalResult);

// function add(num1, num2){
//     var sum = num1 + num2;
//     return sum;
// }

// var result1 = add(2, 3);
// var result2 = add(4, 5);
// var totalValue = add(result1, result2);
// console.log("Your first result is: ", result1);
// console.log("Your second result is: ", result2);
// console.log("Your total value is: ", totalValue);

// var pawsStep = {
//   name: "Nikko",
//   age: 4,
//   weight: "3.6KG"
// }

// // console.log(pawsStep.age);

// pawsStep.name = "Oreo";

// // console.log(pawsStep.name);

// var properties = pawsStep["name"];
// // console.log(properties);

// properties = Object.keys(pawsStep);
// properties = Object.values(pawsStep);
// console.log(properties);

// var pawsStep = {
//   name: "Oreo",
//   age: 4,
//   weight: "9kg",
//   breed: "local"
// }

// var ageStatus = pawsStep.age;
// console.log(ageStatus);

// var breedType = pawsStep["breed"];
// console.log(breedType);

// var objectCategory = Object.keys(pawsStep);
// console.log(objectCategory);

// var objectValues = Object.values(pawsStep);
// console.log(objectValues);

// console.log(pawsStep);

// var abcArray = ["Fahmida", "Rahman", "Protiva"];

// for(var i = 0; i < abcArray.length; i++){
//   var result = abcArray[i];
//   console.log(result);
// }

// const colors = "pink";

// if(colors === "black"){
//   console.log("the color is black");
// }
// else if (colors === "green"){
//   console.log("the color is green");
// }

// else if (colors === "red"){
//   console.log("the color is red");
// }
// else {
//   console.log("there is no color");
// }

// var color = "black";

// switch (color) {
//   case "white":
//     console.log("the color is white");
//     break;
//   case "pink":
//     console.log("the color is pink");
//     break;
//   case "yellow":
//     console.log("the color is yellow");
//     break;
//   case "black":
//     console.log("the color is black");
//     break;
//   default:
//     console.log("the are no color");
// }

// function foo() {
//   console.log("foo");
//   bar();
// }

// function bar() {
//   console.log("bar");
// }

// foo();

// var organization = "Paw's Step";

// switch (organization) {
//   case "Oreo":
//     console.log("the name is Oreo");
//     break;
//   case "Timtim":
//     console.log("the name is Timtim");
//     break;
//   case "Minmin":
//     console.log("the name is Minmin");
//     break;
//   case "Paw's Step":
//     console.log("the name is Paw's Step");
//     break;
//   default:
//     console.log("there is no name found matched");
// }


// function inchesToFeet(inchesValue){
//   var feet = inchesValue/12;
//   return feet;
// }

// var inches = 130;

// var result = inchesToFeet(inches);
// console.log("the result is: ", result);


// function milesToKilometers(milesVaule){
//   var kilometers = milesVaule * 1.609;
//   return kilometers;
// }

// var miles = 2.5;
// var result = milesToKilometers(miles);
// console.log("the result is: ", result);


// var num = 97;

// if(num % 2 === 0){
//   console.log(true);
// }
// else{
//   console.log(false);
// }

// function evenOddChecker(num){
//   if(num % 2 != 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// var inputValue = 31;
// var result = evenOddChecker(inputValue);
// console.log("the result is:", result);

// function leapYear(year){
//    if(year % 4 === 0){
//     return true;
//    }
//    else{
//     return false;
//    }
// }

// var yearValue = 2024;

// var abcArray = [2 ,3 ,4 ]

// var i;
// for(i = 1; i<11; i++){
//     console.log(i);
// }

// var i, num = 5;
// for(i=1; i<11; i++){
//     var result = i * num;
//     console.log(i, "*", num, "=", result);
// }

// var color = "red;"

// if(color == "black"){
//     console.log("the color is red");
// }
// else{
//     console.log("there is no color");
// }


// function oddNumbersArray(arrayInput){
//     var oddArray = [];
//     for(var i = 0; i< arrayInput.length; i++){
//         var arrayIndex = i;
//         var arrayElement = arrayInput[arrayIndex];
//         // console.log(arrayIndex, arrayElement);
//         if(arrayElement % 2 === 1){
//             oddArray.push = arrayElement;
//         }
//     }
//     return oddArray;
// }

// function sumOfArrayElement(inputArrayValue){
//     var sum = 0;
//     for( var i = 0; i < inputArrayValue.length; i++){
//         var element = inputArrayValue[i];
//         sum = sum + element;
        
//     }
//     return sum;
// }

// var abcArray = [23, 25, 84, 64, 29, 28, 24, 75];
// var outputOddArrayElements = oddNumbersArray(abcArray);
// var result = sumOfArrayElement(outputOddArrayElements);
// console.log(result);


// function oddNumbersArray(arrayInput){
//     var oddArray = [];
//     for(var i = 0; i< arrayInput.length; i++){
//         var arrayElement = arrayInput[i];
//         if(arrayElement % 2 === 1){
//             oddArray.push(arrayElement); // Push odd elements into oddArray
//         }
//     }
//     return oddArray; // Return the oddArray
// }

// function sumOfArrayElement(inputArrayValue){
//     var sum = 0; // Initialize sum to 0
//     for(var i = 0; i < inputArrayValue.length; i++){
//         var element = inputArrayValue[i];
//         sum = sum + element;
//     }
//     return sum;
// }

// var abcArray = [23, 25, 84, 64, 29, 28, 24, 75];
// var outputOddArrayElements = oddNumbersArray(abcArray);
// var result = sumOfArrayElement(outputOddArrayElements);
// console.log(result);


// function factorial(value){
//     var sum = 1;
//     for(var i = value; i > 0; i--){
//         sum = sum * i;
        
//     }
//     return sum;
// }

// var input = 3;
// var result = factorial(input);
// console.log(result);


function factorial(number){
    while(number > 0){

    }
}



