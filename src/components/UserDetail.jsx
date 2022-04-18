import React, { useState, useEffect } from 'react';
import axios from "axios";


let ultimoUsuario = {};

function UserDetail(id) {

 
    const [ isLoading, setIsLoading ] = useState ( true );  /*aplicacion de isLoading */
    const [ url, setUrl ] = useState (id);

let urlUser= "/api/users/" + id.match.params.id;

useEffect(()=>{
    
        axios.get(urlUser)
           .then (res => {                    /**ponemos un array vacio para definir el uso cuando se actualiza */
                ultimoUsuario = res.data.user;
                setIsLoading(false);
               
              })
              .catch(Error)
            }, [])  /**ponemos un array vacio para definir el uso cuando se actualiza */
            
    return (


      <>
      { isLoading ? <div class="spinner-border m-5" role="status">{ /** condicion si isLoadin es true */}
                 </div> : <div>
        <h6>Id: {ultimoUsuario.id} </h6>
        <h6>Nombre: {ultimoUsuario.name} </h6>
        <h6>Apellido: {ultimoUsuario.lastname}</h6>
        <h6>Email: {ultimoUsuario.email}</h6>
    </div>}{/** se cierra aca la condicion*/}
    </>


    
  )
}

export default UserDetail