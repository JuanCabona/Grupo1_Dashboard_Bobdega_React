import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CountTypes() {

    
    const [ posts, setPosts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState ( true );
  
    useEffect(()=>{
        axios.get("/api/products")
            .then (res => {
                setPosts(res.data.meta.countByCategory);
                console.log(res.data.meta.countByCategory);
                setIsLoading(false);
            })
            .catch(Error)
    }, [])

  
    return (

    <>
    

    {isLoading ? <div class="spinner-border m-5" role="status">
                  <span class="sr-only">Loading...</span>
                  </div>: <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Cantidad Prod por Categoria</h5>
          </div>
          <div className="card-body">
            <div className="text-center">
                
              <h5> {"Espumantes: " + posts.espumantes} </h5>
              <h5> {"Tintos: " + posts.tintos} </h5>
              <h5> {"Blancos: " + posts.blancos} </h5>
              <h5> {"Rosados: " + posts.rosados} </h5>
              <h5> {"Regalos: " + posts.regalos} </h5>
              
            </div>
            <p></p>
            
          </div>
        </div>
      </div> }


    
    
    </>

        



    
        
    )
}

export default CountTypes