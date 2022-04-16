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
        <h4>Nombre: {ultimoProducto.name} </h4>
        <h6>Precio: {ultimoProducto.price} </h6>
        <h6>Alcohol: {ultimoProducto.alcohol} </h6>
        <h6>Descripcion: {ultimoProducto.description} </h6>
    </div>}
     </>
        
      
  )
}

export default ProductDetail