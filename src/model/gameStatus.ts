class GameStatus{

     
    
    constructor(){
        

    }

    hideGameChoice(numPlayer:number){
        
        let game_choice = document.getElementsByClassName('game-choice');
        game_choice[0].classList.add("fadeOut");
        // use this to disable the buttons on page 1.

        setTimeout(function() {
            game_choice[0].setAttribute("style", "display:none");  
        }, 1000);

        this.showGameStarted(numPlayer);
    }

    showGameStarted(numPlayer:number){
        let game_starter = document.getElementsByClassName('game-starter');

        if(numPlayer === 2){
            game_starter[0].firstElementChild.innerHTML = "Player 1 : Would you like X or O?";
        }
 
        //fade in game-started.Second page  
        setTimeout(function() {
            game_starter[0].classList.add("fadeIn");       
        }, 1000);
    }

    backBtn(){
        debugger;

        // it is not working
        let game_starter = document.getElementsByClassName('game-starter'); 
        let game_choice = document.getElementsByClassName('game-choice');
        game_starter[0].setAttribute("style", "display:none");
        game_choice[0].setAttribute("style", "display:block");
        //fade out game-started.Second page  
        setTimeout(function() {
            //game_starter[0].classList.add("fadeOut");      
        }, 1000);
    }
}

export default GameStatus;