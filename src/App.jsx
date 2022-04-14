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

class App extends Component {
  constructor() {
    super();
    this.state = {
      genresList: [],
      usersList: [],
      isLoading: true
    }
  }

  // Life Cycle
  componentDidMount () {
    console.log("¡El componente se montó!");
    // Aquí hacemos los llamados asincrónicos
    fetch("http://localhost:3001/api/users")
      .then(response => response.json())
      .then(data => {
        console.log(data.users)
        console.log(data.length)
        if (data.length > 0) {
          this.setState({
            isLoading: false,
            genresList: data,
            usersList: data.users,
          })
          console.log(this.state.isLoading)
        }
        
      })
      .catch(error => console.error(error))
  }

  // Event Handler
  loadingIsTrueAgain () {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  render () {
    return (
      <div id="wrapper">
        <Sidenav />
        <Layout>
          <Nav />
          <div className="container-fluid">

            <div id="content">

              {/* 
                <Route path="/" exact={true} component={Home} />
                De esta manera podemos renderizar el componente cuando la ruta machea pero no le podemos pasar props
              */}

              {/* 
                <Route path="/" exact={true} render={() => <Home genresList={this.state.genresList} isLoading={this.state.isLoading} />} /> 
                De esta manera podemos renderizar un componente pasando sus props, la prop render debe ser una arrow fn
              */}
              
              <Switch>
                <Route path="/" exact={true}  >
                  <Home
                    genresList={this.state.genresList}
                    usersList={this.state.usersList}
                    isLoading={this.state.isLoading}
                  /> 
                </Route>

                <Route path="/genres/:id" render={(props) => <GenreDetails {...props}  />} />
                      
                <Route path="/test">
                  <h2>Esto es un test</h2>
                </Route>
                 
                <Route>
                  <h3>¡Error 404!</h3>
                </Route>
              </Switch>

            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default App;