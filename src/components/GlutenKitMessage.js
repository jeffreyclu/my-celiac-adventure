import React from 'react'

function GlutenKitMessage(props) {

    return (
    <div className='popup'>
        <div className='popup-inner'>

                <div className='popup-header'>
                    <p className= "greentext-large">
                        {`You restored your health by 10. You have ${props.data.glutenKits} kit remaining.`}
                    </p>
                </div>

            <div className="popup-text" style={{"text-align": "justify"}}>
                <p>Thanks to your caring Mom, you were able to use a gluten kit to restore your health! Remember to call and thank her!</p>
            </div>

            <hr />

            <div className="popup-button">
                <button onClick={props.continue}>Continue</button>
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

export default GlutenKitMessage