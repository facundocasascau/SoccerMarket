import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../components/Loading'
import ItemDetail from './ItemDetail'
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase';


function ItemDetailContainer() {
    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    let {id} = useParams();



  
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const playerCollection = db.collection("items")
        playerCollection.get()
        .then((querySnapshot) => {
            
          if (querySnapshot.size === 0) {
            console.log('No data!');
          }
          setPlayer(querySnapshot.docs.map(doc => {
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
    console.log(player)
    return(
            <div>
                <div>
                    <div className="players">
                    {player.filter(p => p.id == id).map((play) => (
                    <div key={play.id}>
                    <ItemDetail play={play} />
                    
                    </div>
      ))}
                    </div>
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



export default ItemDetailContainer;