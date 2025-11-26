// console.log(a)
// alert ("welcome ankit")


// function hello(){
//     console.log("hello i am aman")
// }
// function deepak(){
//     console.log("hello i am deepak")
// }
// hello()
// deepak()
// console.log(a==b)
// var a=5
// var b='5'
// === is used for checking data type and comparison
// console.log(a===b)

// 1st priority string
// 2nd priority number
 
// function add(){
//     var a=5
//     var b=5
//     var c="d"
//     console.log(a+b+c)
// }
// add()


// function greet(){
//     // bom=> browser object model(alert(),prompt())
//    var userans =  window.prompt("hello")
//    console.log(userans)
//    if (userans>=18){
//     window.alert("u can vote")
//    }
//    else{
//     window.alert("u cant vote")
//    }
// }
// greet()




// function greet(){
//     var userans=prompt("enter a number")
//     if (userans <0){
//         window.alert(-userans)
//     }
//     else{
//         window.alert(userans)
//     }
// }
// greet()


// 1. Ask the user for their age using prompt() and show an alert 'You can vote' if age >= 18 else 'Too young'.

// function vote(){
//     user = window.prompt("enter your age")
//     if (user >=18){
//         window.alert("u can vote")
//     }
//     else{
//         window.alert("Too Young")
//     }
// }
// vote()

// 2. Prompt the user for a password and check it against a hardcoded value; alert
//  'Access granted' or 'Access denied'.
// function password(){
//     ans=1234
//     user_ans = window.prompt("enter your password")
//     if (user_ans==ans){
//         window.alert("Access Granted")
//     }
//     else{
//         window.alert("Access Denied")
//     }
// }
// password()

// 3. Create a grade checker: prompt for marks (0-100) and use if-else-if to alert Grade A/B/C/F.

// function grade(){
//     user_ans=window.prompt("enter your marks")
//     if (user_ans>=80 && user_ans<=100){
//         alert("grade A")
//     }
//     else if (user_ans>=60 && user_ans<80){
//         alert("grade B")
//     }
//     else if (user_ans>=40 && user_ans<60){
//         alert("grade C")
//     }
//     else if (user_ans>0 && user_ans<40){
//         alert("grade D")
//     }
//     else{
//         alert("Invalid Value")
//     }
// }   
// grade() 

// 4. Prompt for a number and alert whether it is positive, negative, or zero.
// function number(){
//     user_ans = prompt("enter a number")
//     if (user_ans < 0){
//         alert("its negative Number")
//     }
//     else if (user_ans>0){
//         alert("its positive number")
//     }
//     else{
//         alert("its zero")
//     }
// }
// number()


function add(){
   a= Number(prompt("enter a first number"))
   b= Number(prompt("enter your second number"))
   c=a+b
   alert(c)
}
add()