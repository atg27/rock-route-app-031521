import React from 'react'
import { Link } from 'react-router-dom'

export const NewButton = () => {
    return (
        <div>
            <Link to={'climbingroutes/new'}>
                <button> New Route</button>
            </Link>
        </div>
    )
}