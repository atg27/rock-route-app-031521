import React, { Component } from 'react'

export default class ClimbingRoute extends Component {

    state={
        routes: []
    }

    componentDidMount() {
        console.log("fetching")
        fetch('http://localhost:3001/routes/{params match}')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                routes: data 
            })
        })
    } 

    render() {

        const routeList = this.state.routes.map((route) => <li key={route.id}>{route.name} {route.difficulty}{/* will be own component  */}</li>)

        return (
            <div>
                <h3>route info here</h3>
                {routeList}
            </div>
        )
    }
}
