import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

function ItemCount(props){
    const [count, setCount] = useState(0);
    const max= 15;
    const min = 0;

    return(
    <div>
        <Button variant="contained" color="primary" href="#contained-buttons" onClick={() => setCount(count - 1)}>
            -
        </Button>
        <input value={count}/>
        <Button variant="contained" color="primary" href="#contained-buttons" onClick={() => setCount(count + 1)}>
        +
        </Button>
    </div>
    
    )
}


export default ItemCount;

