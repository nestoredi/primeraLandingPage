import React,{useEffect,useState} from 'react';
import comicData from './ComicData';
import ItemDetails from './ItemDetails';

const IItemDetailsContainer = () => {

    const [item, setItem] = useState()

    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(comicData.find(product => product.id === 2)), 2000)
      })


    useEffect(() => {
      getProduct()
      .then(response => setItem(response))
    }, [])

    return (
        <>
                  {
          item ? <ItemDetails item={item}/> : <h1>Cargando...</h1>
        }
  
        </>
    );
}

export default IItemDetailsContainer;

