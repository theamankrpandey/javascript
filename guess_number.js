let a = prompt("enter a number")
let random=Math.floor(Math.random()*a)+1;
let guess=prompt("enter a right number");

while (true){
    if (guess=="quit"){
        alert("You Quit")
        break;
    }
    if (guess==random){
        alert("Congrats u guess Right U Won 100₹ ")
        break;
    }
    else{
        guess=prompt("your guess was wrong Please try Again")
    }
}