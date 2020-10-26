import React from 'react';
import {BrowserRouter, Switch, Rout, Route} from 'react-router-dom'

import './App.css';
import Nav from './components/navbar/NavBar';
import './components/css/styles.css'; 
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/cart/Cart'
import { CartProvider } from './components/context/CartContext';
import Goalkeeper from './components/Goalkeeper'
import Midfielder from './components/Midfielder'
import Defender from './components/Defender'
import Forward from './components/Forward'
import ManagePlayer from './components/ManagePlayer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <Nav/>
        <Switch>
          
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/arqueros">
              <Goalkeeper />
            </Route>
            <Route path="/defensores">
              <Defender />
            </Route>
            <Route path="/mediocampistas">
              <Midfielder />
            </Route>
            <Route path="/delanteros">
              <Forward />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/manage">
              <ManagePlayer />
            </Route>
        

        </Switch>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
