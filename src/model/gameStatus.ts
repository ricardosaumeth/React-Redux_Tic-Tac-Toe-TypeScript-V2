export interface IGameStatus {
    game_choice?: HTMLElement;
    
  }

class GameStatus{

    private game_choice: any;    
    private game_starter: any; 
    private game_board: any; 

    constructor(){
        this.game_choice = document.getElementsByClassName('game-choice');
        this.game_starter = document.getElementsByClassName('game-starter');
        this.game_board = document.getElementsByClassName('game-board');
    }

    hideGameChoice(numPlayer:number){
        debugger;
        this.game_choice[0].classList.add("fadeOut"); 

        // use this to disable the buttons on page 1.
        setTimeout(()=> {
           this.game_choice[0].setAttribute("style", "display:none");  
        }, 1000);

        this.showGameStarted(numPlayer);
    }

    showGameStarted(numPlayer:number){
        
        this.game_starter[0].firstElementChild.innerHTML = "Would you like to be X or O?";
        if(numPlayer === 2){
            this.game_starter[0].firstElementChild.innerHTML = "Player 1 : Would you like X or O?";
        }
        //fade in game-started. Second page 
        this.game_starter[0].classList.add("fadeIn");    
    }

    backBtn(){
        this.game_starter[0].setAttribute("style", "display:block");
        this.game_starter[0].classList.add("fadeOut");
        this.game_starter[0].classList.remove("fadeIn");
        
        //fade out game-started. Second page  
        setTimeout(()=> {     
            this.game_choice[0].setAttribute("style","display:null");
            this.game_choice[0].classList.add("fadeIn");     
        }, 1000);

        this.resetAllBoardClasses();
    }

    resetAllBoardClasses(){      
        //reset the game and choice div to their original classes.
        //This set the animation back to the beginning

        setTimeout(()=> {
            this.game_starter[0].className = "game-starter";
            this.game_choice[0].className = "game-choice"; 
            this.game_board[0].className = "game-board";
            //game_starter[0].setAttribute("style", "display:block"); Dont need it!
            //game_choice[0].setAttribute("style", "display:block");
            //game_board[0].setAttribute("style", "display:block")
           }, 1800); 
    }

}

export default GameStatus;