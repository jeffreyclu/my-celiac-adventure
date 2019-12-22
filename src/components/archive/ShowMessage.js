import React from 'react'
import StartMessage from './StartMessage'
import StartButton from './StartButton'
import MainMessage from './MainMessage'

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
            <MainMessage 
                gluten={props.data.entreeSelection.attributes.gluten}
                glutenThreshold={props.data.glutenThreshold}
                glutenExplanation={props.data.entreeSelection.glutenExplanation}
                message={props.data.message}
                note={props.data.entreeSelection.note}
                days={props.data.days}
                day={props.data.day}
                meals={props.data.meals}
                meal={props.data.meal}
                hunger={props.data.hunger}
            />
        {/* <p>{props.data.entreeSelection.name}{props.data.entreeSelection.attributes.gluten}{props.data.glutenThreshold}</p> */}
            <button onClick={props.closeMessage}>Continue</button>
        </div>)}
        <p>Your current hunger: {props.data.hunger}/100</p>
        <meter min="0" max="100" value={props.data.hunger} low="33" high="66" optimum="0">{props.data.hunger}/100</meter>
        </div>
    </div>
    );
}

export default ShowMessage