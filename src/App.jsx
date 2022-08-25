import React from 'react';
import './App.css';
import Counter from './Counter';
import Barra from './Barra';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
     
     <Barra />
     <ItemListContainer/>
    </div>
  );
}

export default App;
