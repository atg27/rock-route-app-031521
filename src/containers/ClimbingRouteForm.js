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
        })
    }




    render() {
        return (
            <div>
                <h3>Submit New Route Here:</h3>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label> 
                    <br/>
                    <input name="name" onChange={this.handleChange} value={this.state.name} type="text"></input>
                    <br/>
                    <label>State:</label> 
                    <br/>
                    <input name="state" onChange={this.handleChange} value={this.state.state} type="text"></input>
                    
                    {/* <select name="state" onSelect={this.handleChange}>
                        <option value={this.state.state}>Arizona</option>
                        <option value={this.state.state}>California</option>
                        <option value={this.state.state}>Idaho</option>
                        <option value={this.state.state}>Nevada</option>
                        <option value={this.state.state}>Oregon</option>
                        <option value={this.state.state}>Utah</option>
                        <option value={this.state.state}>Washington</option>
                    </select> */}
                    
                    <br/>
                    <label>Difficulty:</label> 
                    <br/>
                    <input name="difficulty" onChange={this.handleChange} value={this.state.difficulty} type="text"></input>
                    <br/>
                    <br/>
                    <input type="submit"/>
                    <br/>
                </form>
            </div>
        )
    }
}
