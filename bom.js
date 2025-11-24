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




function greet(){
    var userans=prompt("enter a number")
    if (userans <0){
        window.alert(-userans)
    }
    else{
        window.alert(userans)
    }
}
greet()