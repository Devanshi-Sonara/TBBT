const userScore=0;
const compScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spork_div = document.getElementById("sp");

function getcomputerChoice(){
    const choices = ['r', 'p', 's', 'l', 'sp'];
    const randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber)
    return choices[randomNumber];
}
/**
function win(){
    console.log("win");
}
function lose(){
    console.log("lost");
}
function draw(){
    console.log("draw");
}

function game(userChoice){
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        case "rl":
        case "sps":
        case "sl":
        case "lp":
        case "psp":
        case "spr":
        case "lsp":
            win();
            break;
        case "sr":
        case "rp":
        case "ps":
        case "lr":
        case "ssp":
        case "ls":
        case "pl":
        case "spp":
        case "rsp":
        case "spl":
            lose();
            break;
        case "sr":
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "spsp":
            draw();
            break;
        
     }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s");
    })
    lizard_div.addEventListener('click', function() {
        game("l");
    })
    spock_div.addEventListener('click', function() {
        game("sp");
    })
    
}
main();
*/