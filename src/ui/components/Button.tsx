import * as React from "react";

interface ButtonProps {
    className?: string,
    onClick?: (evt?: React.MouseEvent<HTMLElement>) => void;
} 

class Buttton extends React.Component<ButtonProps, any>{

    constructor(props:ButtonProps){
        super(props);
    }
    render(){

        const {className, onClick} = this.props;
        return(
            <button className={className} onClick={onClick}>{this.props.children}</button>
        );
    }
}
export default Buttton;