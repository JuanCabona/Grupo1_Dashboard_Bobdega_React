import MainBoxes from './MainBoxes';
import LastMovie from './LastMovie';
import Genres from './Types';

const Home = ({ isLoading,  genresList, usersList }) => {
  return (
    <>
      
      <MainBoxes loadingHandler={() => this.loadingIsTrueAgain()} />
      <div className="row">
        <LastMovie />
        {isLoading && <h3>Cargando...</h3>}
        {!isLoading && <Genres genresList={genresList} />}
        {!isLoading && <Genres usersList={usersList} />}
      
      </div>
      
      
    </>
  )
}

export default Home;