import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Item from './Item';
import { getFirestore } from '../firebase';



function HotSale() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const playerCollection = db.collection("items")
    const playerFilter = playerCollection.where('injury', '==', true)
    playerFilter.get()
    .then((querySnapshot) => {
        
      if (querySnapshot.size === 0) {
        console.log('No data!');
      }
      setPlayers(querySnapshot.docs.map(doc => {
        return ({id: doc.id, ...doc.data() });
      }));
    })
    .catch((error) => {
      console.log("No hay ofertas disponibles", error);
    })
    .finally(() => {
      setLoading(false)
    })
 }, [])





if(!loading) {
  return(
    <div>
        <h2>¡Ofertas de lesionados!</h2>
    
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
            <Loading />
            <p>Cargando...</p>
          </div>
        )
        
    }
  }
}
  




export default HotSale;