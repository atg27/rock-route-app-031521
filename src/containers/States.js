import React, { Component } from 'react'

export default class States extends Component {

    state={
        states: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/states')
    } 

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
