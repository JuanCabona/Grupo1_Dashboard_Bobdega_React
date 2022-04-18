
import axios from "axios";
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';   /** importacion de hooks axios y react */


let ultimoProducto= {};

function LastProduct (lastProduct) {
{/** se cierra aca la condicion*/} 
  const [ isLoading, setIsLoading ] = useState ( true );  /*aplicacion de isLoading */

  useEffect(()=>{
    
       axios.get("/api/products")
          .then (res => {                              /** seteamos que valores recibe al momento de cargarse*/
            let indice = res.data.products.length-1;
            ultimoProducto = res.data.products[indice];
            setIsLoading(false);
                                             
          })
          .catch(Error)
  }, [])   /**ponemos un array vacio para definir el uso cuando se actualiza */ 



  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
          {isLoading ? <div class="spinner-border m-5" role="status"> { /** condicion si isLoadin es true */}
                  
                  </div>: <h5>  {ultimoProducto.name} </h5> }{/** se cierra aca la condicion*/}
          
          {isLoading ? <div class="spinner-border m-5" role="status">{ /** condicion si isLoadin es true */}
                  <span class="sr-only">Loading...</span>
                  </div>: <h6>  {ultimoProducto.description} </h6> }{/** se cierra aca la condicion*/}
          </div>
          <p></p>
          <Link to={ "/productDetail/" + ultimoProducto.id} className="btn btn-danger">Ver detalle del Producto</Link>  
        </div>
      </div>
    </div>
  )
}

export default LastProduct;