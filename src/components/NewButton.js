import React from 'react'
import { Link } from 'react-router-dom'

export const NewButton = () => {
    return (
        <div>
            <Link to={'states/new'}>
                <button>New State</button>
            </Link>
        </div>
    )
}