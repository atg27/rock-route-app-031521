import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import States from './containers/States'
import Routes from './containers/Routes'
import Beta from './containers/Beta'
import StateForm from './containers/StateForm'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation/> 
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/states" component={States}/>
            <Route exact path="/states/new" component={StateForm}/>
            {/* <Route exact path="/states/:id" component={State}/> */}
            <Route exact path="/routes" component={Routes}/>
            <Route exact path="/beta" component={Beta}/>
          </Switch>
        </div>

      </Router>

    )
  }
}


