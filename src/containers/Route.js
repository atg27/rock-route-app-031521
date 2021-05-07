import React, { Component } from 'react'

export default class Route extends Component {

    State={
        name:"",
        difficulty:""
    }
    
    componentDidMount() {
        fetchRoute()
    }

    fetchRoute= () => {
        fetch('http://localhost:3001/states')
        .then(res => res.json())
        .then(data => {
            const a = this.state.states
            this.setState({
                name: a.name,
                difficulty: a.difficulty
            })
        })
    }

    handleClick = () => {
        this.fetchRoute()
    }

    render() {
        return (
            <div>
                <h1>Your route is {this.state.name}</h1>
                <h3>Route grade is {this.state.difficulty}</h3>
            </div>
        )
    }
}
