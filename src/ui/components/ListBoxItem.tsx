import * as React from "react";

interface ListBoxItemProps {
    id: string,
    onClick?: (evt?: React.MouseEvent<HTMLElement>) => void;
} 

class ListBoxItem extends React.Component<ListBoxItemProps, any>{

    constructor(props:ListBoxItemProps){
        super(props);
    }
    render(){
        
        const {id, onClick} = this.props;
        return(
            <li id={id} onClick={onClick}>
                <span className="letter">
                  <span></span>
                </span>
            </li> 
        );
    }
}

export default ListBoxItem;