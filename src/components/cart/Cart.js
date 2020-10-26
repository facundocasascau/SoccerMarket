import { CachedSharp } from '@material-ui/icons';
import React, {useContext, useState, useEffect} from 'react';
import { getFirestore } from '../../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {CartContext} from '../context/CartContext';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';




function Cart(){
    
    const [cart, setCart] = useContext(CartContext);
    const  [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    

    const playersInCart = cart.filter(player => player.id == player.id).map((player, index) => 

    
    <div className="cartItemBox"> 
        <h3 className="playerNameCart">{player.name}</h3>
        <div className="cartItemBoxContent">
            <img className="playerImageCart" src={player.photo} />
            <div className="cartItemDescription">
                <span className="playerPositionCart" ><b>Posición:</b> {player.position} </span>
                <span className="playerPriceCart" ><b>Precio:</b> ${player.price} </span>
                <Button href="#" onClick={()=>deletePlayer(index)} variant="contained" color="primary">Quitar</Button>
            </div>
            
        </div>
    </div>
    )

    const deletePlayer = (index) => {
        let newCart = cart;
        newCart.splice([index],1)
        setCart([...newCart])
    }


    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()
    
    const userInfo = {
        name: name,
        phone: phone,
        email: email
    } 


    const db = getFirestore();
    const orders = db.collection("orders");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("")
    const newOrder = {
        buyer: userInfo,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: price
    }

    function getOrder(){

    orders.add(newOrder).then(({id}) =>{    
        setOrderId(id); //Success
    }).catch(err => {
        setError(err);
    }).finally(() => {
        setLoading(false);
    })
    }
  
    useEffect(() => {
        cart.filter(p => p.id == p.id).map((p) =>
        setPrice(currentPrice =>  currentPrice + parseInt(p.price)) )
       
    }, [])
    


        if (cart.length == 0){
            
            return (
                <div>
                <div className="emptyCartAlert">Su carrito está vacío</div>
                <NavLink to="/">
                    <Button variant="contained" color="primary" >
                    Volver al inicio
                    </Button>
                </NavLink>
                </div>
            )} else {
                console.log(cart)
                return (
                <div className="cartReturnBox">
                    <h2 className="cartMessage">Su carrito contiene:</h2>
                    <div className="playerCartBox">
                        <div>{playersInCart}</div>
                    </div>
                    <h4>
                        El valor total de su compra es ${price}
                    </h4>

                    <form className="buyerBox">
                        <label>Nombre: </label>
                        <input type="text" required onChange={(e) => setName(e.target.value)} />
                        <label>Correo Electrónico: </label>
                        <input type="text" required onChange={(e) => setEmail(e.target.value)} />
                        <label>Teléfono: </label>
                        <input type="number"  required onChange={(e) => setPhone(e.target.value)} />
                        <div className="buyButton">
                            <Button variant="contained" color="primary" onClick={getOrder}>
                                Comprar
                            </Button>
                        </div>
                        <div>
                            Su numero de orden es: {orderId}
                        </div>
                    </form>

                </div>
                )
            }


}

        



 
    



export default Cart;