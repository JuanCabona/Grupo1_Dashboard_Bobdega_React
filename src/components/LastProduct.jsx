
import axios from "axios";
import {useEffect} from "react";

let ultimoProducto= {};

function LastProduct (lastProduct) {



  useEffect(()=>{
    
       axios.get("/api/products")
          .then (res => { 
            let indice = res.data.products.length-1;
            ultimoProducto = res.data.products[indice];
            console.log("ID:", ultimoProducto.id);
                                             
          })
          .catch(Error)
  }, [])



  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
          <h2>  {ultimoProducto.name} </h2>
          </div>
          <p></p>
          <a className="btn btn-danger" target="_blank" href={ "/productDetail/" + ultimoProducto.id}>Ver detalle del Producto </a>
       
        </div>
      </div>
    </div>
  )
}

export default LastProduct;