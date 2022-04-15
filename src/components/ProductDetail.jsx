import React from 'react'
import axios from "axios";
import {useEffect} from "react";
import { Link } from 'react-router-dom'

let ultimoProducto = {};

function ProductDetail(props) {

let id = props.match.params.id;    

let url= "/api/products/" + id;

    useEffect(()=>{
    
        axios.get(url)
           .then (res => { 
                ultimoProducto = res.data.product;
           })
           .catch(Error)
   }, [])
  
   
   console.log(ultimoProducto);
    return (
    <div>
        <h3>Nombre: {ultimoProducto.name} </h3>
        <h3>Precio: {ultimoProducto.price} </h3>
        <h3>Alcohol: {ultimoProducto.alcohol} </h3>
        <h3>Descripcion: {ultimoProducto.description} </h3>
    </div>
  )
}

export default ProductDetail