import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'

let ultimoProducto = {};

function ProductDetail(props) {

  const [ isLoading, setIsLoading ] = useState (true);

let id = props.match.params.id;    

let url= "/api/products/" + id;

    useEffect(()=>{
            
        axios.get(url)
           .then (res => { 
                ultimoProducto = res.data.product;
                setIsLoading(false)
                
           })
           .catch(Error)
   }, [])
  
   
   
    return (
     <>
       { isLoading ? <div class="spinner-border m-5" role="status">
                  <span class="sr-only">Loading...</span>
                  </div> : <div>
        <h3>Nombre: {ultimoProducto.name} </h3>
        <h3>Precio: {ultimoProducto.price} </h3>
        <h3>Alcohol: {ultimoProducto.alcohol} </h3>
        <h3>Descripcion: {ultimoProducto.description} </h3>
    </div>}
     </>
        
      
  )
}

export default ProductDetail