import React from 'react'

function MealMessage(props) {
    return (
        <div className='popup'>
            <div className='popup-inner'>

                <div className='popup-header'>
                    <p className={props.data.entreeSelection.attributes.gluten >= props.data.glutenThreshold ? 
                        "redtext-large" : 
                        "greentext-large"}>
                        {props.data.message}
                    </p>
                </div>

                <div className='popup-text'>
                    <p>{props.data.entreeSelection.attributes.gluten >= props.data.glutenThreshold && !props.data.skipped ? 
                        props.data.entreeSelection.glutenExplanation : null}
                    </p>
                    <p>{props.data.hardMode && props.data.entreeSelection.attributes.lactose >= props.data.lactoseThreshold && !props.data.skipped ? 
                        props.data.message2 : null}
                    </p>
                    <p>{props.data.hardMode && props.data.entreeSelection.attributes.lactose >= props.data.lactoseThreshold && !props.data.skipped ? 
                        props.data.entreeSelection.lactoseExplanation : null}
                    </p>
                    <p>{props.data.extremeMode && props.data.entreeSelection.attributes.fructose >= props.data.fructoseThreshold && !props.data.skipped ? 
                        props.data.message3 : null}
                    </p>
                    <p>{props.data.extremeMode && props.data.entreeSelection.attributes.fructose >= props.data.fructoseThreshold && !props.data.skipped ? 
                        props.data.entreeSelection.fructoseExplanation : null}
                    </p>
                    <p>{props.data.entreeSelection.attributes.gluten < props.data.glutenThreshold && !props.data.skipped ? 
                        <div>
                            {props.data.entreeSelection.attributes.hunger < 10 ? "It wasn't very filling." : "It was pretty filling!"}
                        </div> : null}
                    </p>
                </div>

                <div className="note">
                    <p class="note">{props.data.entreeSelection.note ? 
                        "Note: " + props.data.entreeSelection.note : 
                        null}
                    </p> 
                    <hr />
                </div>

                <div className="popup-button">
                    <button onClick={props.continueGame}>Continue</button>
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

export default MealMessage