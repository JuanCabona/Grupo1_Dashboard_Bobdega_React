import React, { useState, useEffect } from 'react';
import axios from "axios";

let ultimoProducto = {};

function ProductDetail(props) {

    const [ isLoading, setIsLoading ] = useState ( true );  /*aplicacion de isLoading */

let id = props.match.params.id;    

let url= "/api/products/" + id;

    useEffect(()=>{
            
        axios.get(url)
           .then (res => {                    /** seteamos que valores recibe al momento de cargarse*/
                ultimoProducto = res.data.product;
                setIsLoading(false)
                
           })
           .catch(Error)
   }, []) /**ponemos un array vacio para definir el uso cuando se actualiza */
  
   
   
    return (
     <>
       { isLoading ? <div class="spinner-border m-5" role="status">{ /** condicion si isLoadin es true */}
                  </div> : <div>
        <h4>Nombre: {ultimoProducto.name} </h4>
        <h6>Precio: {ultimoProducto.price} </h6>
        <h6>Alcohol: {ultimoProducto.alcohol} </h6>
        <h6>Descripcion: {ultimoProducto.description} </h6>
    </div>}{/** se cierra aca la condicion*/}
     </>
        
      
  )
}

export default ProductDetail