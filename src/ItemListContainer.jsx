import React from 'react';
import Counter from './Counter';

const ItemListContainer = ({saludos}) => {
  function onAdd(count) {
    console.log(`el carrito tiene ${count} productos`)
  }  
  return (
         <div>
          <Counter stock={5} onAdd={onAdd}/>
         </div>
        
    );
}

export default ItemListContainer;
