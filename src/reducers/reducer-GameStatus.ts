import * as types from "../actions/actionsTypes";
import initialState from "./initialState";

export default function gameReducer(state = initialState, action:any){
    switch (action.type) {
        case  types.LOAD_GAME_SUCCESS:
            return(
                state = {
                   ...state,
                   game: action.payload,
                   gameVariables: [...state.gameVariables, action.payload] 
                }
            );
               
        case  types.RESET_BOARD_CLASSES_SUCCESS:
        return(
            state = {
                ...state,
                game: action.payload,
                gameVariables: [...state.gameVariables, action.payload] 
            }
        );

        case  types.LOAD_GAME_SUCCESS:
        return(
            state = {
                ...state,
                game: action.payload,
                gameVariables: [...state.gameVariables, action.payload] 
            }
        );

        case  types.PLAYER_TURN_FINISHED_SUCCESS:
        return(
            state = {
                ...state,
                game: action.payload,
                gameVariables: [...state.gameVariables, action.payload] 
            }
        );

        default:
            return state;
    }
}