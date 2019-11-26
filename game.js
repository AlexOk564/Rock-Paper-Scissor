        const buttons = document.querySelectorAll('button');
        
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
            selection =(button.id), game();;
            
            });
        });

        


        let fiveRounds = 0;
        let userScore = 0;
        let cpuScore = 0; 
        const scoreCard = document.querySelector('#scoreCard');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `PlayerScore: ${userScore} CPUscore: ${cpuScore}`;
        scoreCard.appendChild(content);


        function game() { 
        let playerSelection = selection;   
        let randomGenerator = Math.floor(Math.random() * 3);

        

        //----------Computers choice
        function computerPlay() {
           
            if (randomGenerator===0) {
            return "rock";
            }
            else if (randomGenerator===1) {
            return "paper";
            }
            else {
            return "scissors";
            }
        };
        
        
        

        //------------------Gameplay
        

        function playGame(playerSelection, computerPlay){
            
            playerSelection = playerSelection.toLowerCase();
            
            if (computerPlay===playerSelection) {
                return"Game is a tie!";
                
            }  else if (playerSelection==="rock" && computerPlay==="scissors"){
                userScore++
                
                return(`You won! Rock beats Scissors!`);
                
             } else if (playerSelection==="scissors" && computerPlay==="paper"){
                userScore++
                
                return (`You won! Scissors beats Paper!`);
                
            } else if (playerSelection==="paper" && computerPlay==="rock"){
                userScore++
                
                return (`You won! Paper beats Rock!`);
                
            } else if (playerSelection==="rock" && computerPlay==="paper"){
                cpuScore++
                
                return (`You Lose! Paper beats Rock!`);
                
            } else if (playerSelection==="scissors" && computerPlay==="rock"){
                cpuScore++
                
                return (`You Lose! Rock beats Scissors!`);
                
            } else if (playerSelection==="paper" && computerPlay==="scissors"){
                cpuScore++
                
                return (`You Lose! Scissors beats Paper!`);
                
            } else {
                return "Invalid Selection!";
            }
        
        };

        
            if (userScore === 5 || cpuScore === 5){
                if (userScore === 5){
                    alert('You win!')
                    userScore = 0;
                    cpuScore = 0; 
                } else if (cpuScore === 5){
                    alert('CPU wins!')
                    userScore = 0;
                    cpuScore = 0; 
                }
            
               
        };

        
        
            content.textContent = `PlayerScore: ${userScore} CPUscore: ${cpuScore}`;
            console.log(`You played ${playerSelection}, CPU plays ${computerPlay()}`);
            console.log(playGame(playerSelection, computerPlay()));
            console.log(`PlayerScore: ${userScore} CPUscore: ${cpuScore}`);
        
    };
    
  //------------------DOM------------

       
    
    

