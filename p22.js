// let marks = [2, 3, 4, 5, 6, 7, 8];

// console.log(Array.isArray(marks));
// console.log(marks.indexOf(8));

// let even =[2, 4, 6, 8];
// let odd = [1, 3, 5, 7];
// let allNumbers = even.concat(odd);
// // console.log(allNumbers);

// let partial = even.slice(1, 3);
// console.log(partial);
// console.log(even);

// let partial1 = odd.splice(1, 2, 99, 88, 77);
// console.log(partial1);
// console.log(odd);

// function picnic(inputArray){
//   let abcArray = [];
//   for(let i = 0; i < inputArray.length; i++){
//     let element = inputArray[i];
//     if(abcArray.includes(element) === false){
//       abcArray.push(element);
//     }
//   }
//   return abcArray;
// }

// let students = [
//   "Ahnaf",
//   "Akib",
//   "Fahmida",
//   "Protiva",
//   "Rahman",
//   "Protiva",
//   "Akib",
//   "Humayra",
//   "Humayra",
// ];

// let result = picnic(students);
// console.log(result);

// function foobarFunction(number){
//   for(let i = 1; i <= number; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log("Foobar");
//     }
//     else if(i % 3 === 0){
//       console.log("Foo")
//     }
//     else if(i % 5 === 0){
//       console.log("Bar");
//     }
//     else{
//       console.log(i);
//     }
//   }

// }

// let input = 100;
// foobarFunction(input);

// function choosePhone(inputArray){
//     let chepestPhone = inputArray[0];
//     for(let i = 0; i < inputArray.length; i++){
//         let index = i;
//         let element = inputArray[index];
//         if(element.price < chepestPhone.price){
//             chepestPhone = element;
//         }

//     }
//     return chepestPhone;
// }

// let phoneDetails = [
//   {
//     name: "Samsung",
//     camera: 50,
//     storage: 128,
//     price: 7000,
//     color: "Black"
//   },
//   {
//     name: "Oppo",
//     camera: 20,
//     storage: 28,
//     price: 4000,
//     color: "Black"
//   },
//   {
//     name: "Nokia",
//     camera: 80,
//     storage: 128,
//     price: 12000,
//     color: "Silver"
//   }
// ];

// let result = choosePhone(phoneDetails);
// console.log(result);

// function phoneQuery(inputArray){
//   cheapestPhone = inputArray[0];
//   for(i = 0; i < inputArray.length; i++){
//     let index = i;
//     let element = inputArray[index];
//     if(element.price < cheapestPhone.price){
//       cheapestPhone = element;
//   }

// }
//   return cheapestPhone;
// }

// let phoneDetails = [
//   {
//     name: "Samsung",
//     camera: 50,
//     price: 8000,
//     color: "Silver",
//     ram: 8
//   },
//   {
//     name: "Oppo",
//     camera: 20,
//     price: 5000,
//     color: "Silver",
//     ram: 2
//   },
//   {
//     name: "Nokia",
//     camera: 50,
//     price: 12000,
//     color: "Black",
//     ram: 16
//   }
// ]

// let result = phoneQuery(phoneDetails);
// console.log("The cheapest phone is: ", result);

// function sumOfProductPrice(input){
//   let sum = 0;
//   for(i = 0; i < input.length; i++){
//     let element = input[i];
//     sum = sum + element.price;
//   }
//   return sum;
// }

// const shoppingCart = [
//   {
//     productName: "Shirt",
//     price: 500
//   },
//   {
//     productName: "Pant",
//     price: 550
//   },
//   {
//     productName: "Shirt",
//     price: 450
//   }

// ];

// let result = sumOfProductPrice(shoppingCart);
// console.log(result);

// function sumOfProductPrices(input){
//   let sum = 0;
//   for(i = 0; i < input.length; i++){
//     let index = i;
//     let element = input[index];
//     let individualProductCost = element.productPrice * element.productQuantity;
//     sum = sum + individualProductCost;
//   }
//   return sum;
// }

// let shoppingCart = [
//   { productName: "Shirt", productPrice: 500, productQuantity: 2 },
//   { productName: "Pant", productPrice: 700, productQuantity: 3 },
//   { productName: "Shoe", productPrice: 1200, productQuantity: 1 },
//   { productName: "Cap", productPrice: 50, productQuantity: 5 },
// ];

// let result = sumOfProductPrices(shoppingCart);
// console.log(result);

// function ticketPrice(ticketQuantity){
//     const first100TicketPrice = 100;
//     const second100TicketPrice = 90;
//     const third100TicketPrice = 80;
//     if(ticketQuantity <= 100){
//         let totalTicketPrice = first100TicketPrice * ticketQuantity;
//         return totalTicketPrice;
//     }
//     else if(ticketQuantity <= 200){
//         let first100TicketRate = first100TicketPrice * 100;
//         let extraTicket = ticketQuantity - 100;
//         let extraTicketRate = extraTicket * second100TicketPrice;
//         let totalTicketPrice200 = first100TicketRate + extraTicketRate;
//         return totalTicketPrice200;
//     }
//     else{
//         let first100rate = first100TicketPrice * 100;
//         // let second100 = ticketQuantity - 100;
//         let second100Rate = 100 * second100TicketPrice;
//         let third100 = ticketQuantity - 200;
//         let third100Rate = third100 * third100TicketPrice;
//         let totalTicketprice300 = first100rate + second100Rate + third100Rate;
//         return totalTicketprice300;
//     }
// }

// let numberOfTicket = 320;
// let result = ticketPrice(numberOfTicket);
// console.log("The price of all tickets are:", result);

// function add(num1, num2) {
    
//     if(typeof num1 !== "number" || typeof num2 !== "number"){
//         let show = "Please enter a valid number!!"
//         return show;
//     }
//     else{
//         let sum = num1 + num2;
//         return sum;
//     }
    
// }

// let input1 = 2;
// let input2 = "3";
// let result = add(input1, input2);
// console.log("The sum of", input1, "&", input2, "is:", result);

function add(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        let num1Int = parseInt(num1);
        let num2Int = parseInt(num2);
        let sum = num1Int + num2Int;
        return sum;
    }
}

let input1 = "2";
let input2 = "3";
let result = add(input1, input2);
console.log(result);