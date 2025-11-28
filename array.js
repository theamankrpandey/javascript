// array is defined as  a collection of element
// let arr=["apple","mango","grapes","avacado"]
// alert(arr[2]) //access element
// alert (arr.length)
// console.log(arr.slice(1,3))

// pop() push() shift() unshift()

// pop remove by default last element
// shift():-its remove by default first element
// push():-its add element in the last
// unshift():- add first element

// let num=[1,4,8,6,2,1]
// num.slice(2,0,9)
// slice (from where to add),how many to delete ,wha
// console.log(num)


// to string() => number to string
// nummber() parseint() parsefloat()=> string to number
// split('serprator') => string to array
//  join ('seperator ') => array to string

// let arr3 = ["apple","mango","banana"]
// console.log(arr3.join(',')) 

// let num=[2,3,4,1]
// console.log(num.reverse());
// console.log(num.sort())

// reverse a string
// let str="welcome"
// console.log( str.split('').reverse().join(''));

// let num =[1,6,14,16,11]
// for (let i=0; i<num.length;i++){
//     console.log(num[i])
// }

let num =[1,6,14,16,11]
for (let i=0; i<num.length;i++){
    if (num[i]%2==0){
        console.log(num[i])
    }
}