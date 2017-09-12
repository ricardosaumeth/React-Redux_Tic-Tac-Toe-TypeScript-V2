/*
export interface IGameStatus{
    game_choice: HTMLCollectionOf<Element>;
    game_starter: HTMLCollectionOf<Element>; 
    game_board: HTMLCollectionOf<Element>;
  }
*/ 

class GameStatus /*implements IGameStatus*/{

    private game_choice: HTMLCollectionOf<Element>;    
    private game_starter: HTMLCollectionOf<Element>; 
    private game_board: HTMLCollectionOf<Element>;
    private canvas: HTMLCanvasElement;
    private resetBtn: HTMLCollectionOf<Element>;
    private score_1: HTMLCollectionOf<Element>;
    private score_2: HTMLCollectionOf<Element>;
    private points_divider: HTMLCollectionOf<Element>;

    // Game logic
    private isSecondPlayerActive: boolean;
    private playerOneScore:number;
    private playerTwoScore:number;
    private secondPlayerLabel: HTMLCollectionOf<Element>;
    private turn: number;
    private playerOneSymbol: string;
    private playerTwoSymbol:string;
    private isGameInPlay: boolean;
    private currentBoard: any;
    private numFilledIn: number;
    private winCombos: any[];

    constructor(){
        this.game_choice = document.getElementsByClassName('game-choice');
        this.game_starter = document.getElementsByClassName('game-starter');
        this.game_board = document.getElementsByClassName('game-board');
        
        this.isSecondPlayerActive = false;
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.turn = 0;
        this.playerOneSymbol = "";
        this.playerTwoSymbol = "";
        this.currentBoard = {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: ''
          };
        this.numFilledIn = 0;  
        this.winCombos = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [7, 5, 3]
          ];
    }

    hideGameChoice(numPlayer:number){
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
            this.isSecondPlayerActive = true;
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
           }, 1800); 
    }

    startGame(symbol:string){
        this.playerOneSymbol = symbol;
        this.playerTwoSymbol = this.playerOneSymbol === "X" ? "O" : "X";

        this.drawBoard();
        this.showScoreBoard();
        this.turn = this.whoStarts();
        this.play();
    }

    drawBoard(){
        this.game_starter[0].classList.add("fadeOut");
        this.game_starter[0].classList.remove("fadeIn");
        this.game_choice[0].classList.remove("fadeOut");

        this.canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
        
        //use seTimeOut to create a smoothly entrance of the canvas
        setTimeout(()=> { 
            //Add fadein class to show the canvas with an animation
            this.canvas.classList.add("fadeIn"); 

            this.game_starter[0].classList.remove("fadeOut");
            this.game_starter[0].setAttribute("style", "display:none");

            let cxt: CanvasRenderingContext2D = this.canvas.getContext("2d");
            cxt.lineWidth = 1;
            cxt.strokeStyle = "#fff";
            //vertical lines
            cxt.beginPath();
            cxt.moveTo(100, 0);
            cxt.lineTo(100, 146.5);
            cxt.closePath();
            cxt.stroke();
            cxt.beginPath();
            cxt.moveTo(200, 0);
            cxt.lineTo(200, 146.5);
            cxt.closePath();
            cxt.stroke();

            // horizontal lines
            cxt.lineWidth = 0.5;
            cxt.beginPath();
            cxt.moveTo(4, 48.5);
            cxt.lineTo(296, 48.5);
            cxt.closePath();
            cxt.stroke();
            
            cxt.beginPath();
            cxt.moveTo(4, 98.5);
            cxt.lineTo(296, 98.5);
            cxt.closePath();
            cxt.stroke(); 
        }, 800); 
    }

    showScoreBoard(){
        this.resetBtn = document.getElementsByClassName("hard-reset");
        this.score_1 = document.getElementsByClassName("score-1");
        this.score_2 = document.getElementsByClassName("score-2");
        this.points_divider = document.getElementsByClassName("points-divider");
        this. secondPlayerLabel = document.getElementsByClassName("playerTwo");
        if(this.isSecondPlayerActive){
            this.secondPlayerLabel[0].innerHTML = "Player 2";
        }else{
            this.secondPlayerLabel[0].innerHTML = "Computer";
        }

        this.score_1[0].firstElementChild.innerHTML = "0";
        this.score_2[0].firstElementChild.innerHTML = "0";

        setTimeout(()=> { 
            //show the header on the board
            this.resetBtn[0].classList.add("fadeIn"); 
            this.score_1[0].classList.add("fadeIn");
            this.score_2[0].classList.add("fadeIn");
            this.points_divider[0].setAttribute("style", "display: inline");
        }, 800);
    }

    whoStarts(){
        var random = Math.floor(Math.random() * 2 + 1);
        return random;
    }

    play(){
        this.isGameInPlay = true;
        if(this.turn === 1){
            setTimeout(()=> {
                this.showPlayerOnePrompt();   
            }, 1500);      
        }else{
            setTimeout(()=> {
                this.showPlayerTwoPrompt();   
            }, 1500);
        }
    }

    showPlayerOnePrompt(){
        let player_one_turn = document.getElementsByClassName("player-one-turn");
        player_one_turn[0].classList.add("promptGoPlayerAnimation");
        if(this.isSecondPlayerActive){
          player_one_turn[0].firstElementChild.innerHTML = "Go Player 1";
        }else{
            player_one_turn[0].firstElementChild.innerHTML = "Your turn!";  
        }
    }

    showPlayerTwoPrompt(){
        let player_two_turn = document.getElementsByClassName("player-two-turn");
        player_two_turn[0].classList.add("promptGoPlayerAnimation");
        if(this.isSecondPlayerActive){
            player_two_turn[0].firstElementChild.innerHTML = "Go Player 2";
        }else{
            player_two_turn[0].firstElementChild.innerHTML = "Computer\'s turn";
        } 
    }

    playerTurn(ListBox:any){
        let symbol = this.turn === 1 ? this.playerOneSymbol : this.playerTwoSymbol;
        
        let box = document.getElementById(ListBox.currentTarget.id).firstElementChild.firstElementChild;
        if (box.innerHTML === '' && this.isGameInPlay && (this.turn === 1 || (this.turn === 2 && this.isSecondPlayerActive))){
            box.innerHTML = symbol;
            let number = ListBox.currentTarget.id;
            this.updateSquare(number, symbol);
            this.endTurn(symbol);
        }
    }

    updateSquare(boxNumber:number, symbol:string){
        this.currentBoard[boxNumber] = symbol;
    }

    endTurn(symbol:string){
        this.numFilledIn = this.numFilledIn + 1;
        if (this.isGameInPlay) {
          if (this.checkWin(symbol)[0]) {
            this.updateScore(this.turn);
            if (this.isSecondPlayerActive) {
              this.showWinMessage();
            }
            else {
              //this.turn === 1 ? this.showWinMessage() : this.showLoseMessage();
            }
            this.isGameInPlay = false;
            //this.showWinningCombination();
            //this.hidePlayerOnePrompt();
            //this.hidePlayerTwoPrompt();
            //this.reset();
          }
          // stop if it is a draw
          else if (this.numFilledIn >= 9) {
            this.isGameInPlay = false;
            //this.hidePlayerOnePrompt();
            //this.hidePlayerTwoPrompt();
            //this.showDrawMessage();
            this.turn = this.whoStarts();
            //this.reset();
          } else {
            if (this.turn === 1) {
              //this.hidePlayerOnePrompt();
              //this.showPlayerTwoPrompt();
              this.turn = 2;
              // call computer turn if no second player
              if (!this.isSecondPlayerActive) {
                //this.computerPlay();
              }
            } else if (this.turn === 2) {
              //this.showPlayerOnePrompt();
              //this.hidePlayerTwoPrompt();
              this.turn = 1;
            }
          }
        }
    }// end endTurn 

    checkWin(symbol: string | number){
        let currentBoard = this.currentBoard;
        let wins = this.winCombos;
        let winningCombo:number[] = [];
        let winner = wins.some(function(combination) {
          let winning = true;
          for (var i = 0; i < combination.length; i++) {
            if (currentBoard[combination[i]] !== symbol) {
              winning = false;
            }
          }
          if (winning) {
            winningCombo = combination;
          }
          return winning;
        });
       return [winner, winningCombo];
    }

    updateScore(PlayerTurn:number){
        this.turn === 1 ? this.playerOneScore += 1 : this.playerTwoScore += 1;
        let currentScore = this.turn === 1 ? this.playerOneScore : this.playerTwoScore;
        let score = document.getElementsByClassName(`score-${this.turn}`);
        score[0].firstElementChild.innerHTML = currentScore.toString(); 
    }

    showWinMessage(){
        //to do
    }
    
}

export default GameStatus;