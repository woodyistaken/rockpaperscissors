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

//Get the choice of player
function getHumanChoice(){
    //get player input
    let input=prompt("Rock Paper Scissors")
    //make input all lowercase
    input=input.toLowerCase();
    //return input
    return input;
}



//Start the game
function playGame(){
    //Play a round of game with computer and human choices
    function playRound(humanChoice,computerChoice){
        //make sure both choices are lowercase
        humanChoice=humanChoice.toLowerCase();
        computerChoice=computerChoice.toLowerCase();

        //if there is a draw
        if(humanChoice===computerChoice){
            //print out "Draw, both chose humanChoice"
            console.log(`Draw, both chose ${humanChoice}`);
            
        }
        //if human player choses rock
        else if(humanChoice==="rock")
        {
            //if computer chooses paper
            if(computerChoice==="paper"){
                //increment computer score by one
                computerScore++;
                //print out "You lose. computerChoice beats humanChoice"
                console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
            }
            //if computer chooses scissors
            else if(computerChoice==="scissors"){
                //increment human score by one
                humanScore++;
                //print out "You win. humanChoice beats computerChoice"
                console.log(`You win. ${humanChoice} beats ${computerChoice}`)
            }
        }
        //if human player choses paper
        else if(humanChoice==="paper")
            {
                //if computer chooses scissors
                if(computerChoice==="scissors"){
                    //increment computer score by one
                    computerScore++;
                    //print out "You lose. computerChoice beats humanChoice"
                    console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
                }
                //if computer chooses rock
                else if(computerChoice=="rock"){
                    //increment human score by one
                    humanScore++;
                    //print out "You win. humanChoice beats computerChoice"
                    console.log(`You win. ${humanChoice} beats ${computerChoice}`)
                }
            }
        //if human player choses scissors
        else if(humanChoice==="scissors")
            {
                //if computer chooses rock
                if(computerChoice==="rock"){
                    //increment computer score by one
                    computerScore++;
                    //print out "You lose. computerChoice beats humanChoice"
                    console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
                }
                //if computer chooses paper
                if(computerChoice==="paper"){
                    //increment human score by one
                    humanScore++;
                    //print out "You win. humanChoice beats computerChoice"
                    console.log(`You win. ${humanChoice} beats ${computerChoice}`)
                }
            }
    
        
    }

    //Human score
    let humanScore=0;
    //Computer score
    let computerScore=0;


    //Playing the game
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

for(let i=0; i<100;i++){
    playGame();
}