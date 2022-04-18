import MainBox from "./MainBox";
import { useState } from 'react';

function MainBoxes({ loadingHandler, productos, usuarios }) {
  
  const [ amountProd, setAmountProd ] = useState ( productos );
  let cantProd = amountProd.length;

    
  
  let dataBoxes = [
    {
      title: "Total de Productos",
      amount: productos,
      
      styles: ["border-left-primary", "text-primary"]
    },
    {
      title: "Total de Usuarios",
      amount: usuarios,
      styles: ["border-left-success", "text-success"]
    },
    {
      title: "Total de Categorias",
      amount: 5,
      styles: ["border-left-warning", "text-warning"]
    }
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Bobdega Dashboard</h1>
      </div>
     
      <div className="row">
        {
          dataBoxes.map((dataBox, i) => <MainBox key={i} dataBox={dataBox} />)
        }
        
      </div>

      
    </>
  )
}

export default MainBoxes;