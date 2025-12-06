let formvalidate=()=>{
    let name=document.querySelector('#name').value
    let number=document.querySelector('#number').value
    let email=document.querySelector('#email').value
    let pass=document.querySelector('#pass').value
    let Cpass=document.querySelector('#cpass').value

    // p tag
    let errname=document.querySelector('#errname')
    let errnum= document.querySelector('#errnumber')
    let erremail=document.querySelector('#erremail')
    let errpass=document.querySelector('#errpass')
    let errcpass=document.querySelector('#errcpass')

    if(name==""){
        errname.innerHTML="please enter your name"
        errname.style.color="red"
        return false
    }
}