let signup=()=>{
    let name=document.querySelector('#name').value.trim()
    let number=document.querySelector('#number').value.trim()
    let email=document.querySelector('#email').value.trim()
    let password=document.querySelector('#pass').value.trim()
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

    if(password==""){
        errpass.innerHTML="please enter your password !"
        errpass.style.color="red"
        return false
    }
    else if(password.match(/[1234567890]/ && password.match(/[!@#$%^&*]/)
             && password.match(/[A-Z]/) && password.match(/[a-z]/)))
            errpass.innerHTML="please enter a strong password"
    
    else if(Cpass!=password){
        alert("password does not match")
        return false
    }


localStorage.setItem("name",name)
localStorage.setItem("number",number)
localStorage.setItem("email",email)
localStorage.setItem("password",password)
}
let login = () => {
    let name = document.querySelector('#loginname').value.trim();
    let password = document.querySelector('#loginpass').value.trim();

    let storename = localStorage.getItem("name");
    let storepass = localStorage.getItem("password");

    if (name === storename && password === storepass) {
        window.location.href = "home.html";
        return false;
    } else {
        alert("Invalid Credential");
        return false;
    }
}

