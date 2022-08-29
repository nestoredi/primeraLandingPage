import React from 'react';
import './App.css';
import Barra from './Barra';
import ItemListContainer from './ItemListContainer';
import Comics from './Comics';

function App() {
  return (
    <div className="App">
     
     <Barra />
     <ItemListContainer/>
     <Comics />
    </div>
  );
}

export default App;
