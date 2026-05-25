// basic rock paper scissors
var prompt = require("prompt-sync")();

console.log("LETS PLAY ROCK PAPER SCISSORS OF 5 POINTS")
function computerDecision(){
    let choice = Math.floor(Math.random()*3)
    if(choice===0){
        choice="rock";
    }
    
    if(choice===1){
        choice="paper";
    }

    if(choice===2){
        choice="scissors";
    }

    return choice;
}

function decisontree(userInput,computerInput){
    if(userInput===computerInput){
        console.log("DRAW!");
        console.log("==========NEXT TURN==========");
    }
    
    else if((userInput==="rock" && computerInput==="scissors") || (userInput==="paper" && computerInput==="rock") || (userInput==="scissors" && computerInput==="paper")){
        console.log("Player scored!");
        userScore+=1;
        console.log("Player's current score: ",userScore);
        console.log("Computer's current score: ",computerScore);
        console.log("==========NEXT TURN==========");
    }
    else{
        console.log("Computer scored!");
        computerScore+=1;
        console.log("Player's current score: ",userScore);
        console.log("Computer's current score: ",computerScore);
        console.log("==========NEXT TURN==========");
    }
}

function userDecision(){
    let userInput = prompt("ENTER rock paper or scissors: ");
    userInput = 
    userInput.trim().toLowerCase();
    if( userInput!=="rock" && userInput!=="paper" && userInput!=="scissors" ){
        console.log("INVALID INPUT!");
        console.log("==========(RETRY)==========");
        userDecision();
    }
    else{
    let computerInput=computerDecision();
    console.log("Computer choosed: ",computerInput);

    decisontree(userInput,computerInput);
    }
}

let userScore=0;
let computerScore=0;

while( userScore!=5 || computerScore!=5 ){
    if(userScore==5 || computerScore==5){
        if(userScore>computerScore){
            console.log("------------------------------");
            console.log(" YOU WON.... CONGRATULATIONS!")
            console.log("------------------------------");
        }
        else{
            console.log("------------------------------");
            console.log(" NICE TRY BUT COMPUTER WON....")
            console.log("------------------------------");
        }
        break;
    }
    else{
    userDecision();
}
}