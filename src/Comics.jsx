import {React, useState, useEffect} from 'react';

const comics =[ { nombre:"Rebirth", imagen:"",precio: 25, stock:10},
{ nombre:"Cape", imagen:"",precio: 25, stock:10},
{ nombre:"Justice Legue", imagen:"",precio: 25, stock:10},
{ nombre:"Superman", imagen:"",precio: 25, stock:10},
{ nombre:"The killing joke", imagen:"",precio: 25, stock:10}]

function consultarComic(confirmacion) {
      return new Promise ((res,rej)=>{
        if(confirmacion===true){
            res(comics)
        }else{
            rej("Acceso denegado")
        }
    })
} 
const Comics = ()=>{
    const [comics, setComics] = useState([])
    useEffect(() => {
        consultarComic(true)
        .then(producto => {
            const productoJsx = producto.map((producto,indice)=>
                <div className="card  mb-3" style={{width: '18rem'}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">${producto.precio}</p>
                    <p className="card-text">{producto.stock}</p>
                     <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                 </div>
        )
            setComics(productoJsx)
        })
        .catch(error=>{ 
            console.error(error)
        })
          
    }, []);
    return (
        <div className='row'>
          {comics} 
        </div>
    );
     
}
 

export default Comics
