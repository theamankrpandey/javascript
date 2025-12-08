let clicko=()=>{
    let a = document.querySelector('#one')
    let b = document.querySelector('#butt')
    if (a.style.backgroundImage==""){
    
        b.innerHTML="Hide Image"
          a.style.backgroundImage='url(dog.webp)'

    }
    else{
     a.style.backgroundImage=""

 
        b.innerHTML='Show Image'
}
}