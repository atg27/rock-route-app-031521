import React, { Component } from 'react'
import { NewButton } from '../components/NewButton'

export default class States extends Component {

    state={
        states: []
    }

    componentDidMount() {
        console.log("fetching")
        fetch('http://localhost:3001/states')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                states: data
            })
        })
    } 

    render() {
        
        const states = this.state.states.map((state, index) => <li key={index}>{state.name}{/* will be own component  */}</li>)

        return (
            <div>
                <h3>States Page</h3>
                <hr/>
                {states}
                <br/>
                <NewButton />
            </div>
        )
    }
}
