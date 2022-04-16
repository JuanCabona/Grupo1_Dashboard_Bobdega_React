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
        <h3>Id: {ultimoUsuario.id} </h3>
        <h3>Nombre: {ultimoUsuario.name} </h3>
        <h3>Apellido: {ultimoUsuario.lastname}</h3>
        <h3>Email: {ultimoUsuario.email}</h3>
    </div>}
    </>


    
  )
}

export default UserDetail