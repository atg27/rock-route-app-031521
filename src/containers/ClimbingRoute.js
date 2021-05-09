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
                <h2>Route Information:</h2>
                <hr/>
                <ul>
                    <h3 style={{color:"Red", fontSize: "20px", textTransform: "uppercase"}}>{this.state.route.name}</h3>
                    <h4>GRADE: {this.state.route.difficulty}</h4>
                    <h4>STATE: {this.state.route.state}</h4>
                        
                </ul>
            </div>
        )
    }
}
