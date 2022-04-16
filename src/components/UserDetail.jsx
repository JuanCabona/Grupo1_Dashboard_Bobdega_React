import React, { useState, useEffect } from 'react';
import axios from "axios";


let ultimoUsuario = {};

function UserDetail(id) {


  const [ isLoading, setIsLoading ] = useState ( true );
const [ url, setUrl ] = useState (id);

let urlUser= "/api/users/" + id.match.params.id;

useEffect(()=>{
    
        axios.get(urlUser)
           .then (res => { 
                ultimoUsuario = res.data.user;
                setIsLoading(false);
               
              })
              .catch(Error)
            }, [])
            
            
            console.log(urlUser);
          
          
            
    return (


      <>
      { isLoading ? <div class="spinner-border m-5" role="status">
                 <span class="sr-only">Loading...</span>
                 </div> : <div>
        <h6>Id: {ultimoUsuario.id} </h6>
        <h6>Nombre: {ultimoUsuario.name} </h6>
        <h6>Apellido: {ultimoUsuario.lastname}</h6>
        <h6>Email: {ultimoUsuario.email}</h6>
    </div>}
    </>


    
  )
}

export default UserDetail