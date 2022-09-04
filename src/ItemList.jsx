import React from 'react';
import Item from './Item';
import './ItemList.css'

const ItemList = ({lista}) => {
    return (
        <div className='row'>
            {lista.map((comics)=>
           <Item comics={comics}/>
           )}
        </div>
    )
        
}

export default ItemList;
