import React, { useState, useEffect } from 'react';
import axios from "axios";


let ultimoUsuario = {};

function UserDetail(id) {

 
    const [ isLoading, setIsLoading ] = useState ( true );  /*aplicacion de isLoading */
    
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
        <h6>Imagen: {ultimoUsuario.image}</h6>
        <img src={ultimoUsuario.image} alt="imagen de usuario" /><br></br>
        
        <a href={ultimoUsuario.image}>Imagen</a>
    </div>}{/** se cierra aca la condicion*/}
    </>


    
  )
}

export default UserDetail