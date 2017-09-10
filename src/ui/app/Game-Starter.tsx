import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Button from "../components/Button";
import {backBtn, gameStarted} from "../../actions/gameActions";

class GameStarter extends React.Component<any, any>{

    constructor(props:any){
        super(props);

        this.backBtn = this.backBtn.bind(this); 
        this.startGame = this.startGame.bind(this);   
    }

    backBtn(){
        const backBtn = this.props.backBtn;
        backBtn();
    }

    startGame(symbol:string){
        this.props.startGame(symbol);
    }

    render(){
        return(
            <div className="game-starter">
                <p></p>
                <Button className={"choose-x"} onClick={()=>this.startGame("X")}>X</Button>
                <Button className="choose-o" onClick={()=>this.startGame("O")}>O</Button>
                <Button className="back-button" onClick={this.backBtn}><i className="fa fa-arrow-left"></i> Back</Button>
            </div>  
        );
    }
}

function mapDispatchToProps(dispath: any) {
    return bindActionCreators({
        backBtn: backBtn,
        startGame: gameStarted
        }, dispath);    
}

export default connect (null, mapDispatchToProps) (GameStarter);