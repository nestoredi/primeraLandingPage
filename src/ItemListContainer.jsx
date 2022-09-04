import {React, useState, useEffect} from 'react';
import Counter from './Counter';
import ItemList from './ItemList';
import ComicData from './ComicData';
import App from './App.css';

const ItemListContainer = () => {
    function onAdd(count){
        console.log(`el carrito tiene ${count} productos`)

    } 
    const [comics, setComics]= useState([])
    /*const[isLoading,setIsLoading]=useState(true)*/
    useEffect(()=>{

        const getComicData= new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(ComicData)
            }, 2000);
        })
        getComicData.then(response=> setComics(response))
        .catch((err)=> console.log(err))
        /*.finally(()=> setIsLoading(false))*/
    },[])
    
    return ( /*isLoading ?<h2>Loading...</h2> : */ 
        <div className='row'>
           
           
            <ItemList lista={comics}/>
        </div>
       
    );
}

export default ItemListContainer;
/*<Counter stock={5} />*/ 
