let setdata=()=>{
    // let mydata={
    //     name="aman",
    //     age=25,
    //     location="bhopal"
    // }

    let name ="sid"

    localStorage.setItem("myname",name)
    // localStorage.setItem("myname","aman")
    // localStorage.setItem("myage",21)
    location.reload()
}

let show=document.querySelector('#okk')
let data = 

show.innerHTML=localStorage.getItem("myname")

let 

let removedata=()=>{
    localStorage.removeItem("myname")
    location.reload()
}