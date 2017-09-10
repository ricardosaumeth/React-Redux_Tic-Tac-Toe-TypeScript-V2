/*
export interface IGameStatus{
    game_choice: HTMLCollectionOf<Element>;
    game_starter: HTMLCollectionOf<Element>; 
    game_board: HTMLCollectionOf<Element>;
  }
*/ 

import * as React from "react";

class GameStatus /*implements IGameStatus*/{

    private game_choice: HTMLCollectionOf<Element>;    
    private game_starter: HTMLCollectionOf<Element>; 
    private game_board: HTMLCollectionOf<Element>;
    private canvas: HTMLCanvasElement; 

    constructor(){
        this.game_choice = document.getElementsByClassName('game-choice');
        this.game_starter = document.getElementsByClassName('game-starter');
        this.game_board = document.getElementsByClassName('game-board');
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

    gameStarted(symbol:string){
        this.drawBoard();
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
        }, 1000); 
    }

}

export default GameStatus;