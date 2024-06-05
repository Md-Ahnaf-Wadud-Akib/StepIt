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

function sumOfProductPrice(input){
  let sum = 0;
  for(i = 0; i < input.length; i++){
    let element = input[i];
    sum = sum + element.price;
  }
  return sum;
}


const shoppingCart = [
  {
    productName: "Shirt",
    price: 500
  },
  {
    productName: "Pant",
    price: 550
  },
  {
    productName: "Shirt",
    price: 450
  }

];

let result = sumOfProductPrice(shoppingCart);
console.log(result);