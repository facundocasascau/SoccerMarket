import React, {useState, useContext} from 'react';
import ItemCount from '../components/ItemCount';
import Button from '@material-ui/core/Button';
import {CartContext} from './context/CartContext'
import './css/styles.css'


function ItemDetail(props){
    const [count, setCount] = useState(1);
  

    const sub = () => {
        const min = 1;
        if (count > min){
            return(
                setCount(count - 1))
            
        }else{
            return;
            
        } 
    }
    
    const add = () => {
        const max= props.play.stock;
        if (count < max){
            return(
                setCount(count + 1))
            
        }else{
            return;
            
        } 
    }

    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
       const player = props.play;
       for (var i = 0; i !== count; i++){
        setCart(currentCart => [...currentCart, player])
    };

    }

    



    return (
        <div className="">
            <div className="">
                    <h2>{props.play.name}</h2>
                <div>
                    <img src={props.play.photo} className="itemDetailImage" />
                </div>
                <strong>Jugadores disponibles: {props.play.stock}</strong>
                <h5>Bio del jugador:</h5>
                <span className="itemDetailBio"> {props.play.bio} </span>
                <p>Precio: ${props.play.price}</p>
                <ItemCount count={count} sub={sub} add={add}/>
            </div>
            <div className="buyButtonBox">
                <Button onClick={addToCart}  variant="contained" color="primary" disableElevation size="large" className="buyButton">
                    Comprar {count} copias de {props.play.name}
                </Button>
            </div>

        </div>
    )



}

export default ItemDetail;










