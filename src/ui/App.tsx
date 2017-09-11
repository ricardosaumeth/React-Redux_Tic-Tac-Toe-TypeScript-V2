import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

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
                {/*remove the 0s and Player 1 and 2*/}
                <span className="points">0</span>
                <span className="name">Player 1</span>
              </p>
              <i className="points-divider">&#124;</i>
              <p className="score-2">
                <span className="points">0</span>
                <span className="name">Payer 2</span>
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