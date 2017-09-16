import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import GameStarter from "./app/Game-Starter";
import GameChoice from "./app/Game-Choice";
import GameBoard from "./app/Game-Board";

import Button from "./components/Button";
import {resetGame} from "../actions/gameActions";

class App extends React.Component<any, any>{   
    
    public render(){
        
        return(  
            <div className="outer-container">
              <Button className="hard-reset" onClick={this.props.resetGame}>Reset All</Button>
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

function mapDispatchToProps(dispath: any) {
  return bindActionCreators({
    resetGame:resetGame
      }, dispath);    
}

export default connect (null, mapDispatchToProps) (App);