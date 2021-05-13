import React, { Component } from 'react'

export default class ClimbingRouteForm extends Component {

    state={
        state:'',
        difficulty:'',
        name:''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/routes', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            console.log("New Route", data)
            this.props.history.push('/climbingroutes')
        })
        alert("Route Posted!")

    }




    render() {

        const {
            state: { state, difficulty, name }
        } = this.state

        return (
            
            <div>
                <h3>Submit New Route Here:</h3>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label> 
                    <br/>
                    <input name="name" onChange={this.handleChange} value={name} type="text"></input>
                    <br/>
                    <label>State:</label> 
                    <br/>
                    <input name="state" onChange={this.handleChange} value={state} type="text"></input>
                    <br/>
                    <label>Difficulty:</label> 
                    <br/>
                    <input name="difficulty" onChange={this.handleChange} value={difficulty} type="text"></input>
                    <br/>
                    <br/>
                    <input type="submit"/>
                    <br/>
                </form>
            </div>
        )
    }
}
