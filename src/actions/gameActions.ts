import * as types from "./actionsTypes";

import GameStatus from "../model/GameStatus";

const gameStatus = new GameStatus();

export function loadGameStarter(numPlayer: number){
    //debugger;
    gameStatus.hideGameChoice(numPlayer);
    return {
        type: types.LOAD_GAMESTARTED_SUCCESS,
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

