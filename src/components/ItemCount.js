import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

function ItemCount(props){

    return(
    <div>
        <Button variant="contained" color="primary" href="#contained-buttons" onClick={props.sub}>
            -
        </Button>
        <input className="countInput" value={props.count}/>
        <Button variant="contained" color="primary" href="#contained-buttons" onClick={props.add}>
        +
        </Button>
    </div>
    
    )
}


export default ItemCount;

