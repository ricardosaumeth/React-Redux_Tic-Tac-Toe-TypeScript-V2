import * as React from "react";

import GameStarter from "./app/Game-Starter";
import GameChoice from "./app/Game-Choice";
import GameBoard from "./app/Game-Board";

import Button from "./components/Button";

class App extends React.Component<any, any>{   
    
    public render(){
        
        return(  
            <div className="outer-container">
              <Button className="hard-reset">Reset All</Button>
              <p className="score-1">
                <span className="points"></span>
                <span className="playerOne">Player 1</span>
              </p>
              <i className="points-divider">&#124;</i>
              <p className="score-2">
                <span className="points"></span>
                <span className="playerTwo"></span>
              </p>
              <div className="player-one-turn">
                <p></p>
              </div>
              <div className="player-two-turn">
                <p></p>
              </div>
              <div className="board-container">
                <GameStarter />
                <GameChoice />
                <GameBoard />
              </div> 
            </div>             
        );
    }
}

export default App;