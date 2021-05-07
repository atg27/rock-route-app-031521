import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
import ClimbingRoutes from './containers/ClimbingRoutes'
import ClimbingRoute from './containers/ClimbingRoute'
import ClimbingRouteForm from './containers/ClimbingRouteForm'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation/> 
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/climbingroutes" component={ClimbingRoutes}/>
            <Route exact path="/climbingroutes/new" component={ClimbingRouteForm}/>
            <Route path="/climbingroutes/:id" component={ClimbingRoute}/>
          </Switch>
        </div>

      </Router>

    )
  }
}


