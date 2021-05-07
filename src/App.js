import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import States from './containers/States'
import Routes from './containers/Routes'
import Beta from './containers/Beta'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation/> 
        <div className="App">
          <Switch>
            <Route exact="/" component={Home}/>
            <Route exact="/states" component={States}/>
            <Route exact="/routes" component={Routes}/>
            <Route exact="/beta" component={Beta}/>
          </Switch>
        </div>

      </Router>

    )
  }
}


