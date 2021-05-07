import React from 'react'
import {NavLink} from 'react-router-dom'

const link ={
    width: '100px',
    padding: "15px",
    margin: "20px 20px 20px",
    color: "Red",
    textDecoration: "none"
}

const Navigation = () => {
    return (
        <div>
            <NavLink 
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: "black"
                }}
            >Home</NavLink>
            <NavLink 
                to="/states"
                exact
                style={link}
                activeStyle={{
                    background: "black"
                }}
            >States</NavLink>
            <NavLink 
                to="/routes"
                exact
                style={link}
                activeStyle={{
                    background: "black"
                }}
            >Routes</NavLink>
            <NavLink 
                to="/beta"
                exact
                style={link}
                activeStyle={{
                    background: "black"
                }}
            >Route Beta</NavLink>
        </div>
    )
}


export default Navigation
