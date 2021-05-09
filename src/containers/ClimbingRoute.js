import React, { Component } from 'react'

export default class ClimbingRoute extends Component {

    state={
        route:{
            difficulty:'',
            name:'',
            state:''
        }
    }

    componentDidMount() {
        console.log("fetching specific route")
        fetch(`http://localhost:3001/routes/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                route: data 
            })
        })
    } 

    render() {

        return (
            <div>
                <h3>Route Info:</h3>
                <hr/>
                {this.state.route.name}
            </div>
        )
    }
}
