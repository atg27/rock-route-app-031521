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

        const {
            route: { state, difficulty, name }
        } = this.state

        return (
            <div>
                <h2>Route Information:</h2>
                <hr/>
                <ul>
                    <h3 style={{color:"Red", fontSize: "20px", textTransform: "uppercase"}}>{name}</h3>
                    <h4>GRADE: {difficulty}</h4>
                    <h4>STATE: {state}</h4>
                        
                </ul>
            </div>
        )
    }
}
