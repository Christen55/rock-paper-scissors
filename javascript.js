
let i=0;
let j=0;
let k=0;
let num;
let rockPlayer=0;
let scissorsPlayer=0;
let paperPlayer=0;
let rockComputer=0;
let scissorsComputer=0;
let paperComputer=0;
let computerChoice;
function play(){
    num=prompt("Сколько партий хотите сыграть?", " ");
    checkNumber(num);
    i=0;
    j=0;
    k=0;
    document.getElementById('description').innerHTML='Начнем!';
    document.getElementById('score').innerHTML='Удачи!';
    document.getElementById('square').innerHTML=`${i}:${j}`;    
}

function checkNumber(num){
    if(isNaN(num)==true)
    {
    num=prompt("Это не число. Введите пожалуйста число", " ");
    checkNumber(num);
    }
}

 function random(playerChoice){

    computerChoice=(Math.floor(Math.random()*3)+1);
    checkChoice(computerChoice);
      
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
                i++;
                j++;
                document.getElementById('description').innerHTML='Ничья!';
                setTimeout(stop,1000, "rock");
                score(i,j);
                break;

            case 2: 
                document.getElementById("scissors").classList.toggle('buttonClick');
                i++;
                document.getElementById('description').innerHTML='Вы выиграли! Камень затупляет ножницы';
                setTimeout(stop,1000, "scissors"); 
                score(i,j);
                break;

            case 3:  
                document.getElementById("paper").classList.toggle('buttonClick');
                j++;
                document.getElementById('description').innerHTML='Вы проиграли! Бумага oбёртывает камень';
                setTimeout(stop,1000, "paper");
                score(i,j);
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
                j++;
                document.getElementById('description').innerHTML='Вы проиграли! Камень затупляет ножницы';
                setTimeout(stop,1000, "rock");
                score(i,j);
                break;

            case 2:
                document.getElementById("scissors").classList.toggle('buttonClick');
                i++;
                j++;
                document.getElementById('description').innerHTML='Ничья!';
                setTimeout(stop,1000, "scissors");
                score(i,j);
                break;

            case 3:
                document.getElementById("paper").classList.toggle('buttonClick');
                i++;
                document.getElementById('description').innerHTML='Вы выиграли! Ножницы режут бумагу';
                setTimeout(stop,1000, "paper");
                score(i,j);
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
                i++;
                document.getElementById('description').innerHTML='Вы выиграли! Бумага oбёртывает камень';
                setTimeout(stop,1000, "rock");
                score(i,j);
                break;

            case 2:
                document.getElementById("scissors").classList.toggle('buttonClick');
                j++;
                document.getElementById('description').innerHTML='Вы проиграли! Ножницы режут бумагу';
                setTimeout(stop,1000, "scissors");
                score(i,j);
                break;

            case 3: 
                document.getElementById("paper").classList.toggle('buttonClick');
                i++;
                j++;
                document.getElementById('description').innerHTML='Ничья!';
                setTimeout(stop,1000, "paper");
                score(i,j);
                break;
        }
    break;     
    
}


if(k==num){

    if(i>j){
        alert(`Вы выиграли! ${i}:${j}`);
    }

    else if(i<j){
        alert(`Вы проиграли! ${i}:${j}`);
    }

    else if(i==j){
        alert(`Ничья! ${i}:${j}`);
    }
    
    let question=confirm("Хотите сыграть ещё?");

    if(question==false){
       document.querySelector('.close').click();
    }
    else{
        play();
    }
}
}

function score(i, j){
    document.getElementById('square').innerHTML=`${i}:${j}`;

    if(i>j){
        document.getElementById('score').innerHTML='Вы выигрываете!';
    }

    else if(i<j){
        document.getElementById('score').innerHTML='Вы проигрываете!';
    }

    else if(i==j){
        document.getElementById('score').innerHTML='Ничья!';
    }
}

function sameChoicesPlayer(choice){
    if(choice>=3){
        alert("Вы не можете 3 раза подряд выбирать один и тот же вариант");
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
    checkChoice(computerChoice)
    return computerChoice;
}
function checkChoice(computerChoice){

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
function stop(choice){
  document.getElementById(choice).classList.toggle('buttonClick');
}
