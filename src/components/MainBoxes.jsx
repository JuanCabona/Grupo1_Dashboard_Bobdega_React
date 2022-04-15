import MainBox from "./MainBox";

function MainBoxes({ loadingHandler }) {
  
  
  let dataBoxes = [
    {
      title: "Total de Productos",
      amount: 21,
      iconName: "fa-film",
      styles: ["border-left-primary", "text-primary"]
    },
    {
      title: "Total de Usuarios",
      amount: 79,
      iconName: "fa-award",
      styles: ["border-left-success", "text-success"]
    },
    {
      title: "Total de Categorias",
      amount: 5,
      iconName: "fa-user",
      styles: ["border-left-warning", "text-warning"]
    }
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>
     
      <div className="row">
        {
          dataBoxes.map((dataBox, i) => <MainBox key={i} dataBox={dataBox} />)
        }
        
      </div>

      <button
        className="btn btn-danger my-5"
        onClick={loadingHandler}
      >Haceme Click</button>
    </>
  )
}

export default MainBoxes;