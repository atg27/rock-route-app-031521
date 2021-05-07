import React from 'react'
import { Link } from 'react-router-dom'

export const NewButton = () => {
    return (
        <div>
            <Link to={'climbingroutes/new'}> new route
                {/* <button>New Route</button> */}
            </Link>
        </div>
    )
}