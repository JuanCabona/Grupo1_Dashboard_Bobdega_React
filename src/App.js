import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Deps

import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Assets
import './Fonts.css';
import './App.css';

// Layout
import Layout from './layout/Wrapper';

// Components
import Sidenav from './components/Sidenav';
import Nav from './components/Nav';
import Home from './components/Home';

import ProductDetail from './components/ProductDetail';
import UserDetail from './components/UserDetail';
import ProductList from './components/ProductsList';
import UsersList from './components/UsersList'

// consumir api

let cantidadProd = 0;
let cantidadUsers = 0;


function App() {

        const [ usuarios, setUsuarios ] = useState([]);
        const [ isLoading, setIsLoading ] = useState(true);   /*aplicacion de isLoading */
        
        const [ prod, setprod ] = useState([1]);
        const [ isLoadingProd, setIsLoadingProd ] = useState(true);
        

        
        useEffect(()=>{
          axios.get("/api/users")
                .then (res => {                      /** seteamos que valores recibe al momento de cargarse*/
                    setUsuarios(res.data.users);
                    setIsLoading(false);
                    cantidadUsers = res.data.users.length;
                    
                    
                  })
                .catch(Error)

           axios.get("/api/products")
                .then (res => {                         /** seteamos que valores recibe al momento de cargarse*/
                   cantidadProd = res.data.products.length;
                    setprod(res.data.products);
                    setIsLoadingProd(false);
                 

                 
                    
                })
                .catch(Error)
        }, [])  /**ponemos un array vacio para definir el uso cuando se actualiza */

  


  return (
    <div id="wrapper" >
        <Sidenav  />
        
            <Layout> 
                    <Nav /> 
              
            
                    <Switch>
                      <Route path="/" exact={true}>   {/*ruta especifida de home*/}
                      <div className='container-fluid'>                             
                      <Home productos={cantidadProd} usuarios={cantidadUsers} />
                      </div>
                      </Route>

                      <Route path="/productDetail/:id" component={ProductDetail} />   {/* ruta detalle de producto*/}
                      
                      <Route path="/userDetail/:id" component={UserDetail} />     {/* ruta detalle de usuario*/}

                      <Route path="/productList/:id" component={ProductList} />

                      <Route path="/usersList/:id" component={UsersList} />
                      
                    </Switch>
            </Layout> 
    </div>
    
    

  )
}

export default App