        
        
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

        const results = document.querySelector('#results');
        const gameResults = document.createElement('div');
        gameResults.classList.add('gameResults');
        results.appendChild(gameResults);

        const outcome = document.querySelector('#outcome');
        const gameOutcome = document.createElement('div');
        
        outcome.appendChild(gameOutcome);

        function game() { 
        let playerSelection = selection;   
        let randomGenerator = Math.floor(Math.random() * 3);

        gameResults.textContent = `You played ${playerSelection}, CPU plays ${cpuPlay()}, `;



        //----------Computers choice
        function cpuPlay() {
           
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
        
        let computerPlay = cpuPlay();
        

        //------------------Gameplay
        

        function playGame(){
            
            
            
            if (computerPlay===playerSelection) {
                gameOutcome.textContent="Game is a tie!";
                
            }  else if (playerSelection==="rock" && computerPlay==="scissors"){
                ++userScore
                
                gameOutcome.textContent=(`You won! Rock beats Scissors!`);
                
             } else if (playerSelection==="scissors" && computerPlay==="paper"){
                ++userScore
                
                gameOutcome.textContent=(`You won! Scissors beats Paper!`);
                
            } else if (playerSelection==="paper" && computerPlay==="rock"){
                ++userScore
                
                gameOutcome.textContent=(`You won! Paper beats Rock!`);
                
            } else if (playerSelection==="rock" && computerPlay==="paper"){
                ++cpuScore
                
                gameOutcome.textContent=(`You Lose! Paper beats Rock!`);
                
            } else if (playerSelection==="scissors" && computerPlay==="rock"){
                ++cpuScore
                
                gameOutcome.textContent=(`You Lose! Rock beats Scissors!`);
                
            } else if (playerSelection==="paper" && computerPlay==="scissors"){
                ++cpuScore
                
                gameOutcome.textContent=(`You Lose! Scissors beats Paper!`);
                
            } else {
                gameOutcome.textContent="Invalid Selection!";
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
            

        
            gameResults.textContent = `You played ${playerSelection}, CPU plays ${cpuPlay()}, `;
            content.textContent = `PlayerScore: ${userScore} CPUscore: ${cpuScore}`;
            //gameOutcome.textContent = playGame();
            
            
            
            console.log(playGame(playerSelection, cpuPlay()));
            
        
    };
    

       
    
    

