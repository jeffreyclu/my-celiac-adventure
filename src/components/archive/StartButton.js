import React from 'react'

function StartButton(props) {
    return(
        <div>
            <button onClick={props.startGame}>Start</button>
        </div>
    )
}

export default StartButton