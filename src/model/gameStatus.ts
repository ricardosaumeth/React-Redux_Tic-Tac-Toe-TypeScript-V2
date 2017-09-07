class GameStatus{

     
    constructor(){
        

    }

    hideGameChoice(numPlayer:number){

        let game_choice = document.getElementsByClassName('game-choice');
        game_choice[0].classList.add("fadeOut"); 

        // use this to disable the buttons on page 1.
        setTimeout(()=> {
           game_choice[0].setAttribute("style", "display:none");  
        }, 1000);

        this.showGameStarted(numPlayer);
    }

    showGameStarted(numPlayer:number){
        let game_starter = document.getElementsByClassName('game-starter');
        game_starter[0].firstElementChild.innerHTML = "Would you like to be X or O?";
        if(numPlayer === 2){
            game_starter[0].firstElementChild.innerHTML = "Player 1 : Would you like X or O?";
        }
 
        //game_starter[0].classList.add("fadeIn");    
          
        //fade in game-started.Second page  
        setTimeout(()=> {
            game_starter[0].classList.add("fadeIn");         
        }, 1000);
    }

    backBtn(){
        

        let game_starter = document.getElementsByClassName('game-starter'); 
        let game_choice = document.getElementsByClassName('game-choice');

        game_starter[0].setAttribute("style", "display:block");
        game_starter[0].classList.add("fadeOut");
        game_starter[0].classList.remove("fadeIn");
        //game_choice[0].setAttribute("style", "display:none");
        
        //fade out game-started.Second page  
        setTimeout(()=> {     
            game_choice[0].setAttribute("style","display:null");
            game_choice[0].classList.add("fadeIn");     
        }, 1000);

        this.resetAllBoardClasses();
    }

    resetAllBoardClasses(){
        let game_starter = document.getElementsByClassName('game-starter'); 
        let game_choice = document.getElementsByClassName('game-choice');
        let game_board = document.getElementsByClassName('game-board');
        //reset the game and choice div to their original classes.
        //This set the animation back to the beginning

        setTimeout(()=> {
            game_starter[0].className = "game-starter";
            game_choice[0].className = "game-choice"; 
            game_board[0].className = "game-board";
            //game_starter[0].setAttribute("style", "display:block"); Dont need it!
            //game_choice[0].setAttribute("style", "display:block");
            //game_board[0].setAttribute("style", "display:block")
           }, 1800); 
    }

}

export default GameStatus;