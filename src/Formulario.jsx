import React from 'react';

const Formulario = ({articulos}) => {
    return (
        <>
          <form className="d-flex">
             <input className="form-control me-2" type="search" placeholder="articulos" aria-label="Search" />
             <button className="btn btn-outline-success" type="submit">buscar</button>
           </form>  
        </>
    );
}

export default Formulario;
