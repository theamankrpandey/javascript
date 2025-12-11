let setdata=()=>{
    let data{
        name="aman",
        age=25,
        location="bhopal"
    }
    localStorage.setItem("myname","aman")
    localStorage.setItem("myage",21)
    location.reload()
}

let show=document.querySelector('#okk')
show.innerHTML=localStorage.getItem("myname")

let removedata=()=>{
    localStorage.removeItem("myname")
    location.reload()
}