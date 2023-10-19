import React from 'react'
import './grid-cell.component.css'


class GridCell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
      
    }

    render(){
        return(
            
            <td>{this.props.data.toString()}</td>
        )
    }
}

export default GridCell;