import React, {useState, useEffect, useContext} from 'react';
import { getFirestore } from '../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {CartContext} from './context/CartContext';
import Button from '@material-ui/core/Button';

function ManagePlayer(){
  const [cart, setCart] = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [foot, setFoot] = useState("")
    const [number, setNumber] = useState(0)
    const [photo, setPhoto] = useState("")
    const [nationality, setNationality] = useState("")
    const [position, setPosition] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [bio, setBio] = useState("")
    const [team, setTeam] = useState("")
    const [injury, setInjury] = useState(false)
    

    const db = getFirestore();
    const items = db.collection("items");
    const [error, setError] = useState("");
    const [itemId, setItemId] = useState("")
    const newItem = {
        birthday: date,
        foot: foot,
        injury: injury, 
        name: name,
        nationality: nationality,
        number: number,
        photo: photo,
        position: position, 
        price: price,
        stock: stock,
        team: team,
        bio: bio
    }

    function addItem(){

    items.add(newItem).then(({id}) =>{    
      setItemId(id); //Success
    }).catch(err => {
        setError(err);
    }).finally(() => {
        setLoading(false);
    })
    }
    
    function playerInjury(a){
      if (a == 1){
        setInjury(true)
      }else{
        setInjury(false) 
      }
    }
    


    return(
      <form className="addPlayerBox">
        <div>
          <label>Nombre: </label>
          <input type="text" required onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Fecha de nacimiento: </label>
          <input type="date" required onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Pierna hábil: </label>
          <input type="text"  required onChange={(e) => setFoot(e.target.value)} />
        </div>
        <div>
          <label>Número Favorito: </label>
          <input type="number"  required onChange={(e) => setNumber(parseInt(e.target.value))} />
        </div>
        <div>
          <label>Foto: </label>
          <input type="text"  required onChange={(e) => setPhoto(e.target.value)} />
        </div>
        <div>
          <label>Nacionalidad: </label>
          <input type="text"  required onChange={(e) => setNationality(e.target.value)} />
        </div>
        <div>
        <label>Posición: </label>
          <select onChange={(e) => setPosition(e.target.value)}> 
            <option value="Arquero" >Arquero</option>
            <option value="Defensor" >Defensor</option>
            <option value="Mediocampista" >Mediocampista</option>
            <option value="Delantero" >Delantero</option>
          </select>
        </div>
        <div>
          <label>Precio: </label>
          <input type="number"  required onChange={(e) => setPrice(parseInt(e.target.value))} />
        </div>
        <div>
          <label>Stock: </label>
          <input type="number"  required onChange={(e) => setStock(parseInt(e.target.value))} />
        </div>
        <div>
          <label>Club: </label>
          <input type="text"  required onChange={(e) => setTeam(e.target.value)} />
        </div>
        <div>
        <label>Lesionado?: </label>
          <select onChange={(e) => playerInjury(e.target.value)}> 
            <option value="0" >No</option>
            <option value="1" >Si</option>
          </select>
        </div>
        <div>
          <label>Bio: </label>
          <textarea required onChange={(e) => setBio(e.target.value)} />
        </div>
        <div className="buyButton">
            <Button variant="contained" color="primary" onClick={addItem}>
                Subir
            </Button>
        </div>
        <div>
            El ID del jugador es: {itemId}
        </div>
      </form> 
    )




}

export default ManagePlayer;