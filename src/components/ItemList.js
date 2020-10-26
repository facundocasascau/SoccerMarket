import React, {useState, useEffect} from 'react';
import Item from './Item';
import Loading from './Loading';
import { getFirestore } from '../firebase';


function ItemList(){
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
   
   useEffect(() => {
      setLoading(true);
      const db = getFirestore();
      const playerCollection = db.collection("items")
      playerCollection.get()
      .then((querySnapshot) => {
          
        if (querySnapshot.size === 0) {
          console.log('No data!');
        }
        setPlayers(querySnapshot.docs.map(doc => {
          return ({id: doc.id, ...doc.data() });
        }));
      })
      .catch((error) => {
        console.log("Todos los jugadores están lesionados", error);
      })
      .finally(() => {
        setLoading(false)
      })
   }, [])





  if(!loading) {
    return(
      <div>
        <h2>Jugadores Destacados</h2>
        <div className="cardContainer">
          {players.map((player) => (
            <div key={player.id}>
              <Item player={player} />
            </div>
          ))}
        </div>  
      </div>
       
    )
    
    }else{
        if(loading){
          return(
            <div className="loadingIcon">

            </div>
          )
          
      }
    }
  }
  



export default ItemList;