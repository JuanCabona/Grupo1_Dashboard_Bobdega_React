import MainBoxes from './MainBoxes';
import LastProduct from './LastProduct';
import ProductsList from './ProductsList';
import LastUser from './LastUsers';
import CountTypes from './CountTypes';





const Home = ({ isLoading,  genresList, usersList, productos, usuarios }) => {
  return (
    <>
      
      <MainBoxes loadingHandler={() => this.loadingIsTrueAgain()} productos={productos} usuarios={usuarios}/>
      <div className="row">  
      
             
        <LastProduct />
        <LastUser />
          
        <ProductsList />
        <CountTypes/>

        
       
      </div>

      
      
      
    </>
  )
}

export default Home;