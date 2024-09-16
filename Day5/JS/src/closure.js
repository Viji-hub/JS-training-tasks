// function nestedFn() {
//     function fn1() {
//         var a = 1;
//         console.log('a', a);
//         function fn2() {
//             let a = 2;
//             console.log('b', a);
//             function fn3() {
//                 const a = 3;
//                 console.log('c', a);
//             }
//             fn3();
//         }
//         fn2();
//     }
//     return fn1;
// }

// let result = nestedFn();
// console.log('dhjehje');
// result();

// -------------------------------------------------------------

// function add(a) {
//     // console.log(a);
//     return function curry (b) {
//       if (b) {
//           // console.log(a, b);
//           return add(a + b);
//       }
//       return a;
//     };
//   }
// const curry = add(1);
// console.log(curry(10)); 
// console.log(add(1)(2)(3)());
// console.log(add(1)(2)(3)(4)());
// const total = add(5)(10)(10)();
// console.log(total);


function add(a) {
  return function (b) {
    if(b) {
      return add(a+b);
    }
    return a;
  }
}
const sum = add(3)(3)(2)();
// debugger;
console.log(sum);

//----------------------------------------------------------------

// const person = {
//   fname : 'Viji',
//   lname : 'Krish',
//   showDetails : function(city, country) {
//     console.log(`${this.fname} ${this.lname} from ${city}, ${country}`);
//   }
// }

// const employee = {
//   fname: 'Meera',
//   lname: 'Raghu'
// }

// person.showDetails('Chennai', 'India');
// person.showDetails.call(employee, 'Banglore', 'Karnataka');

// person.showDetails.apply(employee, ['Banglore', 'Karnataka']);

// const displayFn = person.showDetails.bind(employee, 'Banglore');
// displayFn('Karnataka');
// displayFn('India');

// var func = function() {
//   console.log(this)
// }.bind(1);

// func()

// var updateZipCode = function () {
//   console.log(this);
// };
// updateZipCode.call({ zip: '11787'});


// var updateZipCode = function (newZip, country) {
//   console.log(newZip + ' ' + country);
// };
// var zipCode = {
//   zip: '11787'
// };
// updateZipCode.call(zipCode, '11888', 'us');

// var updateZipCode = function (newZip, country) {
//   console.log(newZip + ' ' + country);
// };
// var zipCode = {
//   zip: '11787'
// };
// updateZipCode.apply(zipCode, ['11888', 'us']);


// "use strict";
// var zipcode = {
//     checkZipcode : function() {
//         console.log(this);
//         function updateZipCode() {
//             console.log(this);
//         }
//         updateZipCode.call(this);
//     }
// }
// zipcode.checkZipcode();


// 'use strict';
// var getSum = () => 5;
// var getTotal = function(num1, num2 = num1 * getSum()) {
//     console.log(num1 + num2);
// };
// getTotal(10);


// const numbers = [5, 6, 2, 3, 7]; 
// const maxNum = Math.max.apply(null, numbers); console.log(maxNum);
