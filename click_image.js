// error
// let show=()=>{
//     let a = document.querySelector('#myname')
//     alert(a)
// }


let show=()=>{
    let a = document.querySelector('#myname').value
    let box=document.querySelector('#aman')
    box.style.backgroundColor = a
}