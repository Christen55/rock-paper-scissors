let playerScore=0;
let computerScore=0;
let k=0;
let amountOfBatches;
let rockPlayer=0;
let scissorsPlayer=0;
let paperPlayer=0;
let rockComputer=0;
let scissorsComputer=0;
let paperComputer=0;
let computerChoice;

function play(){
    amountOfBatches=+document.getElementById('number').value;
    checkNumber(amountOfBatches);
    playerScore=0;
    computerScore=0;
    k=0;
    rockPlayer=0;
    scissorsPlayer=0;
    paperPlayer=0;
    document.getElementById('description').innerHTML='Начнем!';
    document.getElementById('score').innerHTML='Удачи!';
    document.getElementById('square').innerHTML=`${playerScore}:${computerScore}`;  
    document.getElementById('headerModalNumber').innerHTML='Сколько партий вы хотите сыграть?!';  
}
function checkNumber(amountOfBatches){
    let additionalNumber=(Math.round(amountOfBatches));
    if(additionalNumber != amountOfBatches || amountOfBatches==0){   
    setTimeout(modalNumber, 1);
    }
}

function random(playerChoice){ 
    computerChoice=(Math.floor(Math.random()*3)+1);
    determineComputerChoice(computerChoice);
      
      if(rockComputer>=3 || scissorsComputer>=3 || paperComputer>=3){
          computerChoice = sameChoicesComputer(computerChoice);
      } 

    switch(playerChoice){

    case "rock":
        rockPlayer++;
        scissorsPlayer=0;
        paperPlayer=0;
        k++;
        sameChoicesPlayer(rockPlayer);

        switch(computerChoice)
        {
            case 1:
                document.getElementById("rock").classList.toggle('buttonClick');
                playerScore++;
                computerScore++;
                document.getElementById('description').innerHTML='Ничья!';
                setTimeout(pause,1000, "rock");
                score(playerScore,computerScore);
                break;

            case 2: 
                document.getElementById("scissors").classList.toggle('buttonClick');
                playerScore++;
                document.getElementById('description').innerHTML='Вы выиграли! Камень затупляет ножницы';
                setTimeout(pause,1000, "scissors"); 
                score(playerScore,computerScore);
                break;

            case 3:  
                document.getElementById("paper").classList.toggle('buttonClick');
                computerScore++;
                document.getElementById('description').innerHTML='Вы проиграли! Бумага oбёртывает камень';
                setTimeout(pause,1000, "paper");
                score(playerScore,computerScore);
                break; 
        }
    break;

    case "scissors":
        scissorsPlayer++;
        rockPlayer=0;
        paperPlayer=0;
        k++;
        sameChoicesPlayer(scissorsPlayer);

        switch(computerChoice)
        {
            case 1:     
                document.getElementById("rock").classList.toggle('buttonClick');
                computerScore++;
                document.getElementById('description').innerHTML='Вы проиграли! Камень затупляет ножницы';
                setTimeout(pause,1000, "rock");
                score(playerScore,computerScore);
                break;

            case 2:
                document.getElementById("scissors").classList.toggle('buttonClick');
                playerScore++;
                computerScore++;
                document.getElementById('description').innerHTML='Ничья!';
                setTimeout(pause,1000, "scissors");
                score(playerScore,computerScore);
                break;

            case 3:
                document.getElementById("paper").classList.toggle('buttonClick');
                playerScore++;
                document.getElementById('description').innerHTML='Вы выиграли! Ножницы режут бумагу';
                setTimeout(pause,1000, "paper");
                score(playerScore,computerScore);
                break;    
        }
    break; 

    case "paper":
        paperPlayer++;
        rockPlayer=0;
        scissorsPlayer=0;
        k++;
        sameChoicesPlayer(paperPlayer);

        switch(computerChoice)
        {
            case 1:
                document.getElementById("rock").classList.toggle('buttonClick');
                playerScore++;
                document.getElementById('description').innerHTML='Вы выиграли! Бумага oбёртывает камень';
                setTimeout(pause,1000, "rock");
                score(playerScore,computerScore);
                break;

            case 2:
                document.getElementById("scissors").classList.toggle('buttonClick');
                computerScore++;
                document.getElementById('description').innerHTML='Вы проиграли! Ножницы режут бумагу';
                setTimeout(pause,1000, "scissors");
                score(playerScore,computerScore);
                break;

            case 3: 
                document.getElementById("paper").classList.toggle('buttonClick');
                playerScore++;
                computerScore++;
                document.getElementById('description').innerHTML='Ничья!';
                setTimeout(pause,1000, "paper");
                score(playerScore,computerScore);
                break;
        }
    break;     
    
}

if(k==amountOfBatches){

    if(playerScore>computerScore){
        setTimeout(modalAnswer, 1000, `Вы выиграли! ${playerScore}:${computerScore}`);
    }

    else if(playerScore<computerScore){
        setTimeout(modalAnswer, 1000, `Вы проиграли! ${playerScore}:${computerScore}`);
    }

    else if(playerScore==computerScore){
        setTimeout(modalAnswer, 1000, `Ничья! ${playerScore}:${computerScore}`);
    }
}

}

function score(playerScore, computerScore){
    document.getElementById('square').innerHTML=`${playerScore}:${computerScore}`;

    if(playerScore>computerScore){
        document.getElementById('score').innerHTML='Вы выигрываете!';
    }

    else if(playerScore<computerScore){
        document.getElementById('score').innerHTML='Вы проигрываете!';
        
    }

    else if(playerScore==computerScore){
        document.getElementById('score').innerHTML='Ничья!';
    }
}

function sameChoicesPlayer(choice){
    if(choice>=3){
        document.querySelector('.openModal').click();
        k--;
        computerChoice-=7;
    }
}
function sameChoicesComputer(computerChoice){
    rockComputer=0;
    scissorsComputer=0;
    paperComputer=0; 
    let additionalNumber=computerChoice;
    computerChoice=(Math.floor(Math.random()*3)+1);
    
    if(additionalNumber==computerChoice){
      computerChoice=(Math.floor(Math.random()*3)+1); 
      sameChoicesComputer(computerChoice); 
    }
    determineComputerChoice(computerChoice)
    return computerChoice;
}
function determineComputerChoice(computerChoice){

       if(computerChoice==1) {
        rockComputer++;
        scissorsComputer=0;
        paperComputer=0;
        return rockComputer;
      }
      else if(computerChoice==2) {
        rockComputer=0;
        scissorsComputer++;
        paperComputer=0; 
        return scissorsComputer;
      }
      else if(computerChoice==3) {
        rockComputer=0;
        scissorsComputer=0;
        paperComputer++; 
        return paperComputer;
      }
}
function pause(choice){
  document.getElementById(choice).classList.toggle('buttonClick');
}

function modalAnswer(string){
    document.getElementById('headerModalAnswer').innerHTML=string+ '<br />'+ "Хотите сыграть ещё?";
    document.querySelector('.openModalAnswer').click();
    playerScore=0;
    computerScore=0;
    document.getElementById('description').innerHTML='Начнем!';
    document.getElementById('score').innerHTML='Удачи!';
    document.getElementById('square').innerHTML=`${playerScore}:${computerScore}`;
}

function modalNumber(){
    document.getElementById('headerModalNumber').innerHTML='Введите целое число не равное нулю!';
    document.querySelector('.requestNumberOfBatches').click();
}
