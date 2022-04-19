import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



function ProductsList() {

    const [ products, setProducts ] = useState([]);  /* valor inicial de posts*/ 
    const [ isLoading, setIsLoading ] = useState ( true );  /*aplicacion de isLoading */
    

    useEffect(()=>{
        axios.get("/api/products")
            .then (res => {                 /** seteamos que valores recibe al momento de cargarse*/
                setProducts(res.data.products);
                setIsLoading(false);
            })
            .catch(Error)
    }, []) /**ponemos un array vacio para definir el uso cuando se actualiza */






    
return (
  <div className="col-lg-6 mb-4">
    <h2>Todos los productos</h2>
    <div className="card-body">
      <div className="row">
        
        <ul>          
              {isLoading ? <div class="spinner-border m-5" role="status">
                  </div> : products.map( products => 
           <li key={products.id}><Link to={"/productDetail/" + products.id } className="nav-link" >{products.name}</Link></li>
           
            )}

           
            
            
            
        </ul>
      </div>
    </div>
  
  </div>
    
  )
}

export default ProductsList;