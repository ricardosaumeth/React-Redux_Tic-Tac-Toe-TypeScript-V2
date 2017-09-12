import * as types from "./actionsTypes";
import GameStatus from "../model/GameStatus";

const gameStatus = new GameStatus();

export function loadGame(numPlayer: number){
    gameStatus.hideGameChoice(numPlayer);
    return {
        type: types.LOAD_GAME_SUCCESS,
        payload: gameStatus
    };
}

export function backBtn(){  
    gameStatus.backBtn();
    return {
        type: types.BACKBTN_CLICKED_SUCCESS,
        payload: gameStatus
    };
}

export function gameStarted(playerSymbol:string){
    gameStatus.startGame(playerSymbol);
    return {
        type: types.GAME_STARTED_SUCCESS,
        payload: gameStatus
    }; 
}

export function playerTurn(ListBox:any){
   gameStatus.playerTurn(ListBox);
    return {
        type: types.PLAYER_TURN_FINISHED_SUCCESS,
        payload: gameStatus
    };
}

