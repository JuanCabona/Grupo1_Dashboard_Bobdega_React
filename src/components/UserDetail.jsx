import React from 'react'
import axios from "axios";
import {useEffect, useState } from "react";


let ultimoUsuario = {};

function UserDetail(id) {

  
const [ url, setUrl ] = useState (id);

let urlUser= "/api/users/" + id.match.params.id;

useEffect(()=>{
    
        axios.get(urlUser)
           .then (res => { 
                ultimoUsuario = res.data.user;
               
              })
              .catch(Error)
            }, [])
            
            
            console.log(urlUser);
          
          
            
    return (
    <div>
        <h3>Id: {ultimoUsuario.id} </h3>
        <h3>Nombre: {ultimoUsuario.name} </h3>
        <h3>Apellido: {ultimoUsuario.lastname}</h3>
        <h3>Email: {ultimoUsuario.email}</h3>
    </div>
  )
}

export default UserDetail