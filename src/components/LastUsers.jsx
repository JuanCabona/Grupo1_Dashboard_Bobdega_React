
import axios from "axios";
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
let lastUser= {};

function LastUser () {

  const [ isLoading, setIsLoading ] = useState ( true );

  useEffect(()=>{
    
       axios.get("/api/users")
          .then (res => { 
            let indice = res.data.users.length-1;
            lastUser = res.data.users[indice];
            setIsLoading(false);
            
     
      
                                             
          })
          .catch(Error)
  }, [])



  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
          
          {isLoading ? <div class="spinner-border m-5" role="status">
                  <span class="sr-only">Loading...</span>
                  </div>: <h3>  {"nombre: " + lastUser.name}</h3>  }

                  
                  {isLoading ? <div class="spinner-border m-5" role="status">
                  <span class="sr-only">Loading...</span>
                  </div>: <h3>  {"Email: " + lastUser.email}</h3>  }
          
          
         
          </div>
          <p></p>
          <Link to={ "/userDetail/" + lastUser.id} className="btn btn-danger">Ver detalle del Usuario</Link>
        </div>
      </div>
    </div>
  )
}

export default LastUser;