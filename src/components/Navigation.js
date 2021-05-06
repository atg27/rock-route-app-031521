import React from 'react'
import {NavLink} from 'react-router-dom'

const link ={
    width: '100px',
    padding: "12px",
    margin: "0 6px 6px",
    color: "white"
}

const Navigation = () => {
    return (
        <div>
            <NavLink 
            to="/"
            exactstyle={link}
            activeStyle={{
                background: "blue"
            }}
            >Home</NavLink>
        </div>
    )
}


export default Navigation
