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

// let num =[1,6,14,16,11]
// for (let i=0; i<num.length;i++){
//     if (num[i]%2==0){
//         console.log(num[i])
//     }
// }


// 1. Character count (prompt + alert)
// Prompt the user for a word (use prompt()), then alert the number of
// characters of that word Example UI message: "Enter a word:".


// function greet(){
//     user_ans = String(prompt("enter a word"))
//     alert(user_ans)
// }

// greet()


// 2. Full name using .concat()2. Full name using .concat()
// Prompt the user for firstName and lastName. Use .concat() to form fullName
// (and also show concatenation using +). Alert or console.log the message:
// Hello, <fullName>.

// function hello(){
//     first = prompt("enter first name"   )
//     last = prompt("enter second name")
//     full = first.concat(" "+last)
//     alert(full)
// }
// hello()



// 3. Extract with .slice()
// Given the string const s = "JavaScript is fun"; extract the substring "Script" and
// console.log it.

// let s = "JavaScript is fun"
// l=s.slice(4,10)
// console.log(l)



// 4. Split comma list & alert second item
// Prompt for a comma-separated list (example input: apple,banana,cherry). Use
// .split(',') to make an array and alert the second item.

// function s() {
//     let n = "apple,banana,cherry";  
//     let l = n.split(",");            
//     alert(l[1]);                        
// }
// s();


// 5. Reverse words and show result
// Prompt for a short sentence, split it into words, reverse the words array
// (.reverse()), join the words back with spaces (.join(' ')) and alert the reversed
// sentence.

// function h() {
//     let user = prompt("enter a sentence");
//     let l = user.split(" ");      
//     let rev = l.reverse();        
//     let f = rev.join(" ");    

//     alert(f);
// }

// h();
