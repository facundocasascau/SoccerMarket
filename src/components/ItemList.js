import React, {useState} from 'react';
import Loading from './Loading';
import Item from './Item';
import Aguero from '../image/aguero.jpg';
import Andrada from '../image/andrada.jpg';
import Balerdi from '../image/balerdi.jpg';
import Dimaria from '../image/dimaria.jpg';
import Dybala from '../image/dybala.jpg';
import Mascherano from '../image/mascherano.jpg';
import Messi from '../image/messi.webp';
import Fernandez from '../image/nacho fernandez.jpg';
import Otamendi from '../image/otamendi.webp';
import Paredes from '../image/paredes.jpg';
import Tevez from '../image/tevez.jpg';


function ItemList(){
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
   
    obtenerProductos()
      .then((productos) => {
        setLoading(false);
        setProductos(productos);
      })
      .catch((err) => {
        setError(err);   
      });
      if (loading) {
        return (
          <div>
          <Loading/>
          </div>
        );
      } else {
        if (!error) {
          return (
            <div className="cardContainer">
              {productos.map((producto) => (
                <div key={producto.id}>
                <Item producto={producto} />
                </div>
              ))}
            </div>  
          );
        } else return <span>{error}</span>;
      }
     
  }
  
function obtenerProductos() {                                                                                          
     return new Promise((resolve, reject) => {                            
         setTimeout(() => {                                                 
           resolve([                                                        
            {id: 'Agüero', foto: <img src={Aguero} alt="..."/>, nombre: 'Kun Agüero', position:'Delantero', stock: 10, precio:'150.000.000'},
            {id: 'Andrada', foto: <img src={Andrada} alt="..."/>, nombre:'Esteban Andrada', position:'Arquero', stock: 5, precio:'25.000.000'},
            {id: 'Balerdi', foto: <img src={Balerdi} alt="..."/>, nombre:'Leonardo Balerdi', position:'Defensor', stock: 10, precio:'15.000.000'},
            {id: 'Dimaria', foto: <img src={Dimaria} alt="..."/>, nombre:'Angel Di María', position:'Mediocampista', stock: 6, precio:'89.000.000'},
            {id: 'Dybala', foto: <img src={Dybala} alt="..."/>, nombre:'Paulo Dybala', position:'Delantero', stock: 8, precio:'120.000.000'},
            {id: 'Mascherano', foto: <img src={Mascherano} alt="..."/>, nombre:'Javier Mascherano', position:'Mediocampista', stock: 8, precio:'5.000.000'},
            {id: 'Messi', foto: <img src={Messi} alt="..."/>, nombre:'Leonel Messi', position:'Delantero', stock: 8, precio:'200.000.000'},
            {id: 'Fernandez', foto: <img src={Fernandez} alt="..."/>, nombre:'Nacho Fernández', position:'Mediocampista', stock: 8, precio:'15.000.000'},
            {id: 'Otamendi', foto: <img src={Otamendi} alt="..."/>, nombre:'Nicolás Otamendi', position:'Defensor', stock: 8, precio:'8.000.000'},
            {id: 'Paredes', foto: <img src={Paredes} alt="..."/>, nombre:'Leonardo Paredes', position:'Mediocampista', stock: 8, precio:'50.000.000'},
            {id: 'Tevez', foto: <img src={Tevez} alt="..."/>, nombre:'Carlos Tevez', position:'Delantero', stock: 8, precio:'10.000.000'}
           ]);                                                              
         }, 2000);                                                          
       });                                                                  
    };




export default ItemList;