let formvalidate=()=>{
    let name=document.querySelector('#name').value.trim()
    let number=document.querySelector('#number').value.trim()
    let email=document.querySelector('#email').value.trim()
    let pass=document.querySelector('#pass').value.trim()
    let Cpass=document.querySelector('#cpass').value.trim()

    // p tag
    let errname=document.querySelector('#errname')
    let errnum= document.querySelector('#errnumber')
    let erremail=document.querySelector('#erremail')
    let errpass=document.querySelector('#errpass')
    let errcpass=document.querySelector('#errcpass')

    if(name==""){
        errname.innerHTML="please enter your name !"
        errname.style.color="red"
        return false
    }
    else  if(number==""){
        errnum.innerHTML="please enter number !"
        errnum.style.color="red"
        return false
    }
    
    if (number.length!=10){
        errnum.innerHTML="please enter a valid number"
        errnum.style.color="red"
        return false
    }
    if (isNaN(number)){
        errnum.innerHTML="please enter a number not Include alphabet !"
        errnum.style.color="red"
        return false
    }

    
    if(email==""){
        erremail.innerHTML="please enter your email ! !"
        erremail.style.color="red"
        return false
    }
    if(!email.includes("@") || !email.includes(".com")){
        erremail.innerHTML="please enter your email ! !"
        erremail.style.color="red"
        return false
    }

    if(pass==""){
        errpass.innerHTML="please enter your password !"
        errpass.style.color="red"
        return false
    }
    
    else if(Cpassword!=Password){
        alert("password does not match")
        return false
    }

    else if(Password.match(/[1234567890]/ && Password.match(/[!@#$%^&*]/)
             && Password.match(/[A-Z]/) && Password.match(/[a-z]/)))
            errpass.innerHTML="please enter a strong password !"


}