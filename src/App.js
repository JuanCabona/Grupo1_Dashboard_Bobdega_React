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
import GenreDetails from './components/GenreDetails';

// consumir api

let cantidadProd = 0;
let cantidadUsers = 0;


function App() {

        const [ usuarios, setUsuarios ] = useState([]);
        const [ isLoading, setIsLoading ] = useState(true);
        
        const [ prod, setprod ] = useState([1]);
        const [ isLoadingProd, setIsLoadingProd ] = useState(true);
        

        
        useEffect(()=>{
          axios.get("/api/users")
                .then (res => {
                    setUsuarios(res.data.users);
                    setIsLoading(false);
                    cantidadUsers = res.data.users.length;
                    
                    
                  })
                .catch(Error)

           axios.get("/api/products")
                .then (res => { 
                   cantidadProd = res.data.products.length;
                    setprod(res.data.products);
                    setIsLoadingProd(false);
                 

                 
                    
                })
                .catch(Error)
        }, [])

  


  return (
    <div id="wrapper" >
        <Sidenav  />
        
      <Layout> 
      <Nav /> 
        
      <div className='container-fluid'>                             
                <Home productos={cantidadProd} usuarios={cantidadUsers} />
      </div>
      </Layout> 
    </div>
    
  )
}

export default App