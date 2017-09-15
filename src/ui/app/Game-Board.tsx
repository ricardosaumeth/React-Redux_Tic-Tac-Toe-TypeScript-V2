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
                  {/*listBoxes*/} 
                  <ListBoxItem id="1" key="1" onClick={this.props.playerTurn}/>
                  <ListBoxItem id="2" key="2" onClick={this.props.playerTurn}/>
                  <ListBoxItem id="3" key="3" onClick={this.props.playerTurn}/>
                  <ListBoxItem id="4" key="4" onClick={this.props.playerTurn}/>
                  <ListBoxItem id="5" key="5" onClick={this.props.playerTurn}/> 
                  <ListBoxItem id="6" key="6" onClick={this.props.playerTurn}/> 
                  <ListBoxItem id="7" key="7" onClick={this.props.playerTurn}/>
                  <ListBoxItem id="8" key="8" onClick={this.props.playerTurn}/>  
                  <ListBoxItem id="9" key="9" onClick={this.props.playerTurn}/>              
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