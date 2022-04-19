import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function UsersList() {


    const [ users, setUsers ] = useState([]);  /* valor inicial de posts*/ 
    const [ isLoading, setIsLoading ] = useState ( true );  /*aplicacion de isLoading */
    

    useEffect(()=>{
        axios.get("/api/users")
            .then (res => {                 /** seteamos que valores recibe al momento de cargarse*/
                setUsers(res.data.users);
                console.log(res.data.users)
                setIsLoading(false);
              })
            .catch(Error)
    }, []) /**ponemos un array vacio para definir el uso cuando se actualiza */





    
    return (
      <div className="col-lg-6 mb-4">
        <h2>Todos los usuarios</h2>
        <div className="card-body">
          <div className="row">
            
            <ul>          
                  {isLoading ? <div class="spinner-border m-5" role="status">
                      </div> : users.map( users => 
               <li key={users.id}><Link to={"/userDetail/" + users.id } className="nav-link" >{users.name}</Link></li>
               
                )}
    
               
                
                
                
            </ul>
          </div>
        </div>
      
      </div>
        
      )
    



  


}


export default UsersList;