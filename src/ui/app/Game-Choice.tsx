import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Button from "../components/Button";
import {loadGameStarter} from "../../actions/gameActions";


class GameChoice extends React.Component<any, any>{

    constructor(props: any){
        super(props);
        this.loadGameStarter = this.loadGameStarter.bind(this);
    }

    loadGameStarter(numPlayer:number){
        const loadGameStarter = this.props.loadGameStarter;
        loadGameStarter(numPlayer);
    }    

    render(){

        return(
            <div className="game-choice">
                <p>How do you want to play?</p>
                <Button className={"one-player"} onClick={()=>this.loadGameStarter(1)}>One Player</Button>
                <Button className={"two-player"} onClick={()=>this.loadGameStarter(2)}>Two Player</Button>
            </div>   
        );
    }
}

function mapDispatchToProps(dispath: any) {
    return bindActionCreators({
        loadGameStarter: loadGameStarter
        }, dispath);    
}

export default connect (null, mapDispatchToProps) (GameChoice);