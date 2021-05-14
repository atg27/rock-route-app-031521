import React, { Component } from 'react'
import { NewButton } from '../components/NewButton'
import { ClimbingRouteLink } from '../components/ClimbingRouteLink'
import { FilterButton } from '../components/FilterButton'

export default class ClimbingRoutes extends Component {

    state={
        routes: []
    }

    componentDidMount() {
        console.log("fetching")
        fetch('http://localhost:3001/routes')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                routes: data
            })
        })
    } 

    handleClick = (e) => {
        console.log("working")
       const filteredroute = this.state.routes.filter(route => route.state === "Washington")
       this.setState({routes: [filteredroute]})
    }

    render() {
        
        const routes = this.state.routes.map((route) => <ClimbingRouteLink route={route} key={route.id}/>)
        

        return (
            <div>
                <h3>Routes Page</h3>
                <hr/>
                    <div>
                    {routes}
                    </div>
                
                <br/>
                <NewButton />
                <FilterButton onFilter={this.handleClick}/>
            </div>
        )
    }
}
