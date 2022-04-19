import MainBoxes from './MainBoxes';
import LastProduct from './LastProduct';
import ProductsList from './ProductsList';
import LastUser from './LastUsers';
import CountTypes from './CountTypes';





const Home = ({ productos, usuarios }) => {
  return (
    <>
      
      <MainBoxes loadingHandler={() => this.loadingIsTrueAgain()} productos={productos} usuarios={usuarios}/>
      <div className="row">  
      
             
        <LastProduct />
        <CountTypes/>
        <LastUser />



      </div>

      
      
      
    </>
  )
}

export default Home;