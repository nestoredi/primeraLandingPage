import React from 'react';
import './App.css'
const Titulo = ({nombre}) => {
    return (
        <div className="titulo">
          <h1> Galeria del comic {nombre}</h1>  
        </div>
    );
}

export default Titulo;
