import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Button from "../components/Button";
import {playerTurn} from "../../actions/gameActions";

class GameBoard extends React.Component<any, any>{

    constructor(props:any){
       super(props);
       this.playerTurn = this.playerTurn.bind(this); 
    }

    playerTurn(){ 
       this.props.playerTurn();
    }

    render(){

        // create the li dynamically

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
                  <li onClick={()=>this.playerTurn()}>
                  <span className="letter">
                      <span>X</span>
                    </span>
                  </li>   
                </ul>
          </div>  
        );
    }
}

function mapDispatchToProps(dispath: any) {
    return bindActionCreators({
        playerTurn: playerTurn
        }, dispath);    
}

export default connect (null, mapDispatchToProps) (GameBoard);