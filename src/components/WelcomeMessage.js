import React from 'react'

function WelcomeMessage(props) {

    return (
    <div className='popup'>
        <div className='popup-inner'>

            <div className="popup-header">
                <h1>Get ready...</h1>
            </div>

            <div className="popup-text" style={{"text-align": "justify"}}>
                <p>You just got diagnosed with Celiac Disease :( You must survive the next {props.data.days} days by choosing to eat 
                or skip meals.</p> 
                <p>Each meal <strong>may contain gluten</strong>. 
                Eat a meal safely and <span className="greentext">reduce your hunger</span>, 
                or skip a meal and <span className="redtext">get hungrier</span>.
                If you accidentally get glutened, you will also <span className="redtext">lose health. </span>
                When your hunger reaches 100 or your health reaches 0 - <strong>you will die!</strong></p>
            </div>

            <hr />

            <div className="popup-button">
                <button onClick={props.startGame}>Easy Mode</button>
                <button onClick={props.hardMode}>Hard Mode</button>
                <button onClick={props.extremeMode}>Extreme Mode</button>
            </div>

            <div className="popup-stats">
                <span className="float-left">Your hunger: <br />{props.data.hunger}/100<br />
                <meter min="0" max="100" value={props.data.hunger} low="33" high="66" optimum="0">{props.data.hunger}/100</meter></span>
                <span className="float-right">Your health: <br />{props.data.health}/100<br />
                <meter min="0" max="100" value={props.data.health} low="33" high="66" optimum="100">{props.data.health}/100</meter></span>
            </div>

        </div>
    </div>
    )
}

export default WelcomeMessage