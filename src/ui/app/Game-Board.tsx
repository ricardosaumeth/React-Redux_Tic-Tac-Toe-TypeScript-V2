import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Button from "../components/Button";
import ListBoxItem from "../components/ListBoxItem";
import {playerTurn} from "../../actions/gameActions";

class GameBoard extends React.Component<any, any>{

    constructor(props:any){
       super(props);
    }

    render(){
        
        let listBoxes = [];
        for(var i = 1; i < 10; i++){
            listBoxes[i] = <ListBoxItem id={i.toString()} key={i.toString()} onClick={this.props.playerTurn}/> ;
        }

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
                  {listBoxes}              
                </ul>                        
          </div>  
        );
    }
}

function mapStateToProps(state: any) {   
    return Object.assign({}, state, {
        gameVariables: state.gameStatus
      });
}

function mapDispatchToProps(dispath: any) {
    return bindActionCreators({
        playerTurn: playerTurn
        }, dispath);    
}

export default connect (null, mapDispatchToProps) (GameBoard);