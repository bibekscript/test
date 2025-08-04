//function isPrime(num)
//  if (num <= 1) return false;
// for (let i = 2; i <= Math.sqrt(num); i++) {
//   if (num % i ===0) {
//     return false;
//  }
// }
//return true;
//}
//console.log(isPrime(6));

/*let student = [
 { name : "Bibek"},
 { roll : 10}
];

console.log(student.name);
*/
/*
let shoping =[
{name:"mobile",quantity:2,price:10000},
{name: "TV",quantity:1, price:15000},
{name:"fridge",quantity:2,price:20000}

]
//let cart=shoping.filter(item => item.price >10000);
let totalPrice= shoping.reduce((total,item) =>{
return total +(item.price*item.quantity)
},0);
//console.log(cart);
console.log(totalPrice);
*/

// const exampleFunction = (list) => {
//   // console.log(list);
//   const filterNumber = list.filter((value, i) => {
//     return typeof value === "number";
//   });
//   return filterNumber;
// };

// const list = ["a", "b", 1, 2];

// const output = exampleFunction(list);
// console.log(output);

// if (num % 2 === 0) {
//   return "even";
// }
// console.log(num);

const number = (num) => {
  const number = num.filter((value, i) => {
    return value % 2 === 0;
  });

  return number;
};

const num = [1, 3, 5, 8, 9, 13, 66, 88, 104];
console.log(number(num));
/*
function number(num) {
  if (num % 2 === 0) {
    return "even";
  }
}
console.log(number(1));
*/
