import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Button from "../components/Button";
import {backBtn} from "../../actions/gameActions";

class GameStarter extends React.Component<any, any>{

    constructor(props:any){
        super(props);

        this.backBtn = this.backBtn.bind(this);    
    }

    backBtn(){
        const backBtn = this.props.backBtn;
        backBtn();
    }

    render(){
        return(
            <div className="game-starter">
                <p>Would you like to be X or O?</p>
                <Button className={"choose-x"}>X</Button>
                <Button className="choose-o">O</Button>
                <Button className="back-button" onClick={this.backBtn}><i className="fa fa-arrow-left"></i> Back</Button>
            </div>  
        );
    }
}

function mapDispatchToProps(dispath: any) {
    return bindActionCreators({
        backBtn: backBtn
        }, dispath);    
}

export default connect (null, mapDispatchToProps) (GameStarter);