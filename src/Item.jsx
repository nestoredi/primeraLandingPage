import React from 'react';
import Counter from './Counter';

const Item = ({comics}) => {
    return (
        <div className="card row mb-3" style={{width: '18rem'}}>
                    <img src={comics.imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{comics.nombre}</h5>
                    <p className="card-text">${comics.precio}</p>
                    <p className="card-text">{comics.stock}</p>
                     <a href="#" className="btn btn-primary">Detalles</a>
                    </div>
                    
                 </div>
    );
}

export default Item;
