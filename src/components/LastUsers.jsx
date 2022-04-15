
import axios from "axios";
import {useEffect} from "react";

let lastUser= {};

function LastUser (lastProduct) {



  useEffect(()=>{
    
       axios.get("/api/users")
          .then (res => { 
            let indice = res.data.users.length-1;
            lastUser = res.data.users[indice];
      
                                             
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
          <h2>  {lastUser.name} </h2>
          </div>
          <p></p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del Usuario</a>
        </div>
      </div>
    </div>
  )
}

export default LastUser;