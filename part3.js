// // QUE 13 
// let a = [10, 20, 30, 40, 50];
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// QUE 14
// let b  = 0;
// for (let i = 0; i < a.length; i++) {
//   b  += a[i];
// }
// console.log("Sum =", b );

// QUE 15 
// let c = [12, 45, 7, 89, 23];
// let max = c[0];
// for (let i = 1; i < c.length; i++) {
//   if (c[i] > max) {
//     max = c[i];
//   }
// }
// console.log("Largest number =", max);

// // QUE 16
// let d = [10, 15, 20, 25, 30];
// let evenCount = 0;
// for (let i = 0; i < d.length; i++) {
//   if (d[i] % 2 === 0) {
//     evenCount++;
//   }
// }
// console.log("Even numbers count =", evenCount);

// // QUE 17
// let e = [1, 2, 3, 4, 5];
// let reversedArr = [];
// for (let i = e.length - 1; i >= 0; i--) {
//   reversedArr.push(e[i]);
// }
// console.log("Reversed array =", reversedArr);

// // QUE 18
// let f = [5, 10, 15, 20];
// let num = 15;
// let found = false;
// for (let i = 0; i < f.length; i++) {
//   if (f[i] === num) {
//     found = true;
//     break;
//   }
// }
// console.log(found ? "Number exists" : "Number does not exist");

// // QUE 19
// let g = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArr = [];
// for (let i = 0; i < g.length; i++) {
//   if (!uniqueArr.includes(g[i])) {
//     uniqueArr.push(g[i]);
//   }
// }
// console.log("Array without duplicates =", uniqueArr);

// // QUE 20
// let fruit = ["apple", "kiwi", "banana", "mango", "orange"];
// for (let i = 0; i < fruit.length; i++) {
//   if (fruit[i].length > 4) {
//     console.log(fruit[i]);
//   }
// }