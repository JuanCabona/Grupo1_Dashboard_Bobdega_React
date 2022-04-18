import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



function ProductsList() {

    const [ posts, setPosts ] = useState([]);  /* valor inicial de posts*/ 
    const [ isLoading, setIsLoading ] = useState ( true );  /*aplicacion de isLoading */
    

    useEffect(()=>{
        axios.get("/api/products")
            .then (res => {                 /** seteamos que valores recibe al momento de cargarse*/
                setPosts(res.data.products);
                setIsLoading(false);
            })
            .catch(Error)
    }, []) /**ponemos un array vacio para definir el uso cuando se actualiza */






    
return (
  <div className="col-lg-6 mb-4">
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h5 className="m-0 font-weight-bold text-gray-800">Todos los Productos </h5>
    </div>
    <div className="card-body">
      <div className="row">
        
        <ul>
          
          
              {isLoading ? <div class="spinner-border m-5" role="status">
                  </div> : posts.map( post => 
           <li key={post.id}><Link to={"/productDetail/" + post.id } className="nav-link" >{post.name}</Link></li>
           
            )}

           
            
            
            
        </ul>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default ProductsList;