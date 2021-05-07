import React from 'react'
import { Link } from 'react-router-dom'

export const ClimbingRouteLink = (props) => {
    return (
        <div>
            <Link to={`/climbingroutes/${props.route.id}`}> {props.route.name}</Link>
        </div>
    )
}