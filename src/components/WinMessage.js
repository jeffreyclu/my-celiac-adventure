import React from 'react'

function WinMessage(props) {

    return (
    <div className='popup'>
        <div className='popup-inner'>
            <div>
                <p className="greentext-large">
                    OMG, you survived!!! 
                </p>
                <p>Congratulations for making it to the end of the week without dying :)</p>
                <p className="note">Thanks for playing!</p>
                <hr />
            </div>
            <div className="popup-button">
                <button onClick={props.resetGame}>Reset</button>
            </div>
            <div className="popup-stats">
                <span className="float-left">Your hunger: <br />{props.data.hunger}/100<br />
                <meter min="0" max="100" value={props.data.hunger} low="66" high="33" optimum="0">{props.data.hunger}/100</meter></span>
                <span className="float-right">Your health: <br />{props.data.health}/100<br />
                <meter min="0" max="100" value={props.data.health} low="33" high="66" optimum="100">{props.data.health}/100</meter></span>
            </div>   
        </div>
    </div>
    )
}

export default WinMessage