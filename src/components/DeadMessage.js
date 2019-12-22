import React from 'react'

function DeadMessage(props) {

    return (
    <div className='popup'>
        <div className='popup-inner'>
            <div>
                <p className="redtext-large">
                    RIP. You died :(
                </p>
                <p>You made it to day {props.data.day} out of {props.data.days}.</p>
                <p className="note">Try again?</p>
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

export default DeadMessage