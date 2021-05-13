import React from 'react'

const Home = () => {

    const divStyle = {
        textAlign: 'center'
    }

    return (
        <div style={divStyle}>
            <h1>Rock Routes App!</h1>
            <hr/>
            <p >
                This app is for browsing and adding rock climbing routes 
                <br/>
                <br/>Select the Routes Link at the top of the Nav Bar to see Routes
            </p>
        </div>
    )
}

export default Home