import React from 'react'
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

function App() {
  return (
    <div id="wrapper" >
        <Sidenav  />
        
      <Layout> 
      <Nav /> 
        
      <div className='container-fluid'>                             
                <Home/>
      </div>
      </Layout> 
    </div>
    
  )
}

export default App