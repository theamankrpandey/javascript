let favmovie = "ironman";
let quit = "quit";

let guess = () => {
    let a = document.querySelector("#one").value;

    while ((a != favmovie) && (a != quit)) {
        alert("Wrong guess! Try again");
        return;   
    }

    if (a == favmovie) {
        alert("congrats");
    }
    else {
        alert("U Quit");
    }
};
