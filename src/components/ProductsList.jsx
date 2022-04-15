import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ProductsList() {

    const [ posts, setPosts ] = useState([]);
    

    useEffect(()=>{
        axios.get("/api/products")
            .then (res => {
                setPosts(res.data.products);
                
                console.log(res);
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
           {posts.map( post => 
           <li key={post.id}>{post.name}</li>
           
            )}
        </ul>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default ProductsList;