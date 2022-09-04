import React from 'react';

const ItemDetails = ({item}) => {
    return (
        <article>
        <h1>{item.title}</h1>
        <div className="card-detail">
            <div className="card-detail-left">
                <img src={item.imagen} alt={item.nombre} className="img" />
            </div>
            <div className="card-detail-right">
                <p>{item.categoria}</p>
                <p className="precio">${item.precio}</p>
                <p>Stock: {item.stock}</p>
                
            </div>
        </div>
    </article>

    );
}

export default ItemDetails;
