import React from 'react';
import './App.css';
import Barra from './Barra';
import ItemListContainer from './ItemListContainer';
import Comics from './Comics';
import IItemDetailsContainer from './iItemDetailsContainer';

function App() {
  return (
    <div className="App">
     
     <Barra />
     <ItemListContainer/>
     <IItemDetailsContainer/>
     
    </div>
  );
}

export default App;
