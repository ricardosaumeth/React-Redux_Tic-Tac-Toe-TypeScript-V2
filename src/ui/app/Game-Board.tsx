import * as React from "react";
import Button from "../components/Button";

class GameBoard extends React.Component<any, any>{

    render(){
        return(
            <div className="game-board">
                <div className="draw-message">
                <p>It was a draw..</p>
                </div>
                <div className="lose-message">
                <p>Uh oh, you lost..</p>
                </div>
                <div className="win-message">
                <p>You Won!!! :)</p>
                </div>
                <canvas id="myCanvas"></canvas>
                <ul className="boxes">
                </ul>
          </div>  
        );
    }
}
export default GameBoard;