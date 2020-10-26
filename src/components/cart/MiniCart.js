import React, {useContext, useEffect} from 'react';
import {CartContext} from '../context/CartContext'


function MiniCart(){

    const [cart, setCart] = useContext(CartContext);

    
 

    const miniCart = cart.map((player, index) => 
        <div className="miniCartItemBox"> 
            <div>
                <img className="playerImageMiniCart" src={player.photo} />
            </div>
            <div>
                <span className="playerNameMiniCart">{player.name}</span>
                <span className="playerPriceMiniCart" >Precio: ${player.price} </span>
                <a href="#" onClick={()=>deletePlayer(index)}>Eliminar</a>
            </div>
        </div>
    );



    function clearCart(){
        setCart([])
    }

    const deletePlayer = (index) => {
        let newCart = cart;
        newCart.splice([index],1)
        setCart([...newCart])
    }

    if(cart.length == 0){
        return(
            <div className="miniCartBox">
                <p>Su carrito está vacío</p>
            </div>
        )

    }else{

    return(
        <div className="miniCartBox">
            <div className="miniCart">{miniCart}</div>
            <a className="clearCart" href="#" onClick={clearCart}>Vaciar carrito</a>
        </div>  
    )
    }
}

export default MiniCart;