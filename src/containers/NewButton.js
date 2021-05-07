import React from 'react'
import { Link } from 'react-router-dom'

const NewButton = () => {
    return (
        <div>
            <Link to={'states/new'}>
                <button>New State</button>
            </Link>
        </div>
    )
}
export default NewButton