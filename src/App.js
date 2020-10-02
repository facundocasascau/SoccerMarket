import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar';
import './components/styles.css'; 
import ItemCount from './components/ItemCount';
import Item from './components/Item'
import Loading from './components/Loading'
import ItemList from './components/ItemList';




function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemCount/>
      <ItemList/>
    </div>
  );
}

export default App;
