import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar';
import './components/styles.css'; 
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ItemCount/>
    </div>
  );
}

export default App;
