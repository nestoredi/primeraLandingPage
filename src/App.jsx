import React from 'react';
import './App.css';
import Titulo from './Titulo';
import Barra from './Barra';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
     <Titulo  nombre="Crossa"/>
     <Barra />
     <ItemListContainer saludos="replicas"/>
    </div>
  );
}

export default App;
