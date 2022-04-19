import React, { useState, useEffect } from 'react';
import axios from 'axios';





function CountTypes() {

    
    const [ category, setCategory ] = useState([]);  /* valor inicial de posts*/ 
    const [ isLoading, setIsLoading ] = useState ( true );  /*aplicacion de isLoading */
  
    useEffect(()=>{
        axios.get("/api/products")  
            .then (res => {
                setCategory(res.data.countByCategory);   /** seteamos que valores recibe al momento de cargarse*/
                setIsLoading(false);
            })
            .catch(Error)
    }, [])   /**ponemos un array vacio para definir el uso cuando se actualiza */ 

  
    return (

    <>  
    {isLoading ? <div class="spinner-border m-5" role="status">     { /** condicion si isLoadin es true */}
                  </div>: <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">               {/**renderizacion tabla de cantidad por categorias */}
          <div className="card-header py-3">                                            
            <h5 className="m-0 font-weight-bold text-gray-800">Cantidad Prod por Categoria</h5>
          </div>
          <div className="card-body">
            <div className="text-center">
                
              <h5> {"Espumantes: " + category.espumantes} </h5>
              <h5> {"Tintos: " + category.tintos} </h5>
              <h5> {"Blancos: " + category.blancos} </h5>
              <h5> {"Rosados: " + category.rosados} </h5>
              <h5> {"Regalos: " + category.regalos} </h5>
              
            </div>
            <p></p>
            
          </div>
        </div>
      </div> } {/** se cierra aca la condicion*/}
   
    </>

        



    
        
    )
}

export default CountTypes