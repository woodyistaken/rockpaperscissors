//Get the choice of computer
function getComputerChoice(){
    //generate a random number
    let randomNum=Math.random();

    //test to see if random number is between 0-1/3
    if(randomNum>=0 && randomNum<1/3){
        //return scissors
        return "scissors";
    }
    //test to see if random number is between 1/3-2/3
    if(randomNum>=1/3 && randomNum<2/3){
        //return paper
        return "paper";
    }
    //test to see if random number is between 2/3-1
    if(randomNum>=2/3 && randomNum<1){
        //return rock
        return "rock";
    }
}




//Start the game
function playGame(human){
    //Play a round of game with computer and human choices
    function playRound(humanChoice,computerChoice){
        //make sure both choices are lowercase
        humanChoice=humanChoice.toLowerCase();
        computerChoice=computerChoice.toLowerCase();
        //if there is a draw
        if(humanChoice==computerChoice){
            //print out "Draw, both chose humanChoice"
            resultDisplay.innerHTML=`Draw, both chose ${humanChoice}`;
            
        }
        //if human player choses rock
        else if(humanChoice=="rock")
        {
            //if computer chooses paper
            if(computerChoice=="paper"){
                //increment computer score by one
                computerScore++;
                //print out "You lose. computerChoice beats humanChoice"
                resultDisplay.innerHTML=`You lose. ${computerChoice} beats ${humanChoice}`
            }
            //if computer chooses scissors
            else if(computerChoice=="scissors"){
                //increment human score by one
                humanScore++;
                //print out "You win. humanChoice beats computerChoice"
                resultDisplay.innerHTML=`You win. ${humanChoice} beats ${computerChoice}`
            }
        }
        //if human player choses paper
        else if(humanChoice=="paper")
            {
                //if computer chooses scissors
                if(computerChoice==="scissors"){
                    //increment computer score by one
                    computerScore++;
                    //print out "You lose. computerChoice beats humanChoice"
                    resultDisplay.innerHTML=`You lose. ${computerChoice} beats ${humanChoice}`
                }
                //if computer chooses rock
                else if(computerChoice=="rock"){
                    //increment human score by one
                    humanScore++;
                    //print out "You win. humanChoice beats computerChoice"
                    resultDisplay.innerHTML=`You win. ${humanChoice} beats ${computerChoice}`
                }
            }
        //if human player choses scissors
        else if(humanChoice=="scissors")
            {
                //if computer chooses rock
                if(computerChoice==="rock"){
                    //increment computer score by one
                    computerScore++;
                    //print out "You lose. computerChoice beats humanChoice"
                    resultDisplay.innerHTML=`You lose. ${computerChoice} beats ${humanChoice}`
                }
                //if computer chooses paper
                if(computerChoice==="paper"){
                    //increment human score by one
                    humanScore++;
                    //print out "You win. humanChoice beats computerChoice"
                    resultDisplay.innerHTML=`You win. ${humanChoice} beats ${computerChoice}`
                }
            }
    
        
    }

    //Human score
    let humanScore=0;
    //Computer score
    let computerScore=0;


    //Playing the game
    const humanSelection = human;
    const computerSelection = getComputerChoice();
    console.log(humanSelection+" "+computerSelection)
    playRound(humanSelection, computerSelection);
}

const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
rock.addEventListener("click",(e)=>playGame("rock"))
paper.addEventListener("click",(e)=>playGame("paper"))
scissors.addEventListener("click",(e)=>playGame("scissors"))

const resultDisplay=document.querySelector("#resultDisplay");