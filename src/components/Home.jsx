import MainBoxes from './MainBoxes';
import LastProduct from './LastProduct';
import ProductsList from './ProductsList';
import LastUser from './LastUsers';



const Home = ({ isLoading,  genresList, usersList, productos, usuarios }) => {
  return (
    <>
      
      <MainBoxes loadingHandler={() => this.loadingIsTrueAgain()} productos={productos} usuarios={usuarios}/>
      <div className="row">  
      
             
        <LastProduct />
          
        <ProductsList />

        <LastUser />
        
       
      </div>

      
      
      
    </>
  )
}

export default Home;