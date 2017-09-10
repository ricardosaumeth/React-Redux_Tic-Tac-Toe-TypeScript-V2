import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Button from "../components/Button";
import {loadGame} from "../../actions/gameActions";


class GameChoice extends React.Component<any, any>{

    constructor(props: any){
        super(props);
        this.loadGame = this.loadGame.bind(this);
    }

    loadGame(numPlayer:number){
        const loadGame = this.props.loadGame;
        loadGame(numPlayer);
    }    

    render(){

        return(
            <div className="game-choice">
                <p>How do you want to play?</p>
                <Button className={"one-player"} onClick={()=>this.loadGame(1)}>One Player</Button>
                <Button className={"two-player"} onClick={()=>this.loadGame(2)}>Two Player</Button>
            </div>   
        );
    }
}

function mapDispatchToProps(dispath: any) {
    return bindActionCreators({
        loadGame: loadGame
        }, dispath);    
}

export default connect (null, mapDispatchToProps) (GameChoice);