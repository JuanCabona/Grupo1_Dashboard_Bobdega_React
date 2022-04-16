
import axios from "axios";
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


let ultimoProducto= {};

function LastProduct (lastProduct) {

const [ isLoading, setIsLoading ] = useState ( true );

  useEffect(()=>{
    
       axios.get("/api/products")
          .then (res => { 
            let indice = res.data.products.length-1;
            ultimoProducto = res.data.products[indice];
            setIsLoading(false);
                                             
          })
          .catch(Error)
  }, [])



  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
          {isLoading ? <div class="spinner-border m-5" role="status">
                  <span class="sr-only">Loading...</span>
                  </div>: <h3>  {ultimoProducto.name} </h3> }
          </div>
          <p></p>
          <Link to={ "/productDetail/" + ultimoProducto.id} className="btn btn-danger">Ver detalle del Producto</Link>  
        </div>
      </div>
    </div>
  )
}

export default LastProduct;