import React from 'react'
import StartMessage from './StartMessage'
import StartButton from './StartButton'

function ShowMessage(props) {

    return (
    <div className='popup'>
        <div className='popup_inner'>
        {!props.data.start ? 
        (<div>
            <StartMessage 
                days={props.data.days}
                meals={props.data.meals} 
            />
            
            <StartButton startGame={props.startGame}/>
        </div>) : 

        (<div>
            <p className={props.data.entreeSelection.attributes.gluten >= props.data.glutenThreshold ? "redtext-large" : "greentext-large"}>{props.data.message}</p>
            <p>{props.data.entreeSelection.attributes.gluten >= props.data.glutenThreshold ? props.data.entreeSelection.glutenExplanation : null}</p>
            <p>{props.data.entreeSelection.note ? props.data.entreeSelection.note : null}</p>
        <p>{props.data.entreeSelection.name}{props.data.entreeSelection.attributes.gluten}{props.data.glutenThreshold}</p>
            <button onClick={props.closeMessage}>Continue</button>
        </div>)}
        <p>Your current hunger: {props.data.hunger}/100</p>
        <meter min="0" max="100" value={props.data.hunger} low="33" high="66" optimum="0">{props.data.hunger}/100</meter>
        </div>
    </div>
    );
}

export default ShowMessage