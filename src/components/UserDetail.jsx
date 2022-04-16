import React from 'react'
import axios from "axios";
import {useEffect, useState } from "react";


let ultimoUsuario = {};

function UserDetail(id) {

// let id = props.match.params.id;    


const [ url, setUrl ] = useState (id);

let urlUser= "/api/users/" + id.match.params.id;

useEffect(()=>{
    
        axios.get(urlUser)
           .then (res => { 
                ultimoUsuario = res.data.user;
              })
              .catch(Error)
            }, [])
            
            console.log("params:",id.match.params.id);
            console.log(ultimoUsuario);
          
          
            
    return (
    <div>
        <h3>Nombre: {ultimoUsuario.name} </h3>
        
        
    </div>
  )
}

export default UserDetail