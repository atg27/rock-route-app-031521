import React, { Component } from 'react'

export default class ClimbingRouteForm extends Component {

    state={
        state:'',
        difficulty:'',
        name:''
    }
    
    handleChange = (e) => {

    }

    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <div>
                <h3>Submit New Route Here:</h3>
                <hr/>
                <form onSubmit={this.onSubmit}>
                    <label>Name:</label> <br/><br/>
                    <input name="name" onChange={this.handleChange} value={this.state.name} type="text"></input><br/><br/>
                    <label>State:</label> <br/><br/>
                    <input name="state" onChange={this.handleChange} value={this.state.state} type="text"></input><br/><br/>
                    <label>Difficulty:</label> <br/><br/>
                    <input name="difficulty" onChange={this.handleChange} value={this.state.difficulty} type="text"></input><br/><br/>
                    <br/>
                    <input type="submit"/><br/>
                </form>
            </div>
        )
    }
}
