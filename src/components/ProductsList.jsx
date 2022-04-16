import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



function ProductsList() {

  const [ isLoading, setIsLoading ] = useState ( true );

 const [ posts, setPosts ] = useState([]);
    

    useEffect(()=>{
        axios.get("/api/products")
            .then (res => {
                setPosts(res.data.products);
                setIsLoading(false);
                console.log(res.data.meta.countByCategory.tintos);
            })
            .catch(Error)
    }, [])






    
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
                  <span class="sr-only">Loading...</span>
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