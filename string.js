// string is a primitive datatype
// it's used to represent text
// it's represent by double quotes(" ") and single quotes(' ')


// var myname="aman"
// console.log(myname.length)
// console.log(myname[0])


// for merge string(add) use Concat
// var myname="this is string"
// var name="aman"
// console.log(myname.concat(name))

// replace touppercase tolowercase trim


// var fruits=["apple","banana",123,true]
// var f='apple-banana ma-go grapes'
// console.log(f.split('-'))


// var a=6
// a=a.parseint(6)
// console.log(typeof(a))


console.log(b)
let b=5


// alert("'hello cybrom'")

// template leterals
// 1st use it supports single and double quotes
// let str=`this is 'string' from "cybrom"`
// alert(str)

// 2nd use it supports multi line string
// let str2=`hjbjhbw skjdduh hdibd udujdb
// sbhdbiddnodn dndudh jd d dijdi `
// console.log(str2)

// 3rd use it supports html tags
// let str3=`this is <i> cybrom </i> of mp nagar`
// document.write(str3)

// 4th use it supports dynamic value of variable
//  let myname="aman"
//  let age=21
// alert("my name" + myname + "my age is" + age)
// alert(`I am ${myname} and I am ${age} year old`)



// 1. Character count (prompt + alert)
// Prompt the user for a word (use prompt()), then alert the number of
// characters of that word Example UI message: "Enter a word:".

function greet(){
    user_ans = prompt("enter a word")
    alert(user_ans)
}

greet()