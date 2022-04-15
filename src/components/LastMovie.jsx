import Mandalorian from "../images/mandalorian.jpg";

function LastMovie () {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Last product</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
          <h2>Last product</h2>
          </div>
          <p>descripion producto</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
        </div>
      </div>
    </div>
  )
}

export default LastMovie;