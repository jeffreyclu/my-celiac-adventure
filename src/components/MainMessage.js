import React from 'react'

function MainMessage(props) {
    return (
        <div>
            {props.hunger !== 100 ?
            (<div>
                <p className={props.gluten >= props.glutenThreshold ? 
                    "redtext-large" : 
                    "greentext-large"}>
                    {props.message}
                </p>
                <p>{props.gluten >= props.glutenThreshold ? 
                    "Why? " + props.glutenExplanation : 
                    null}
                </p>
                <p class="note">{props.note ? 
                    "Note: " + props.note : 
                    null}
                </p>
            </div>) :

            (<div>
                <p>You are dead!</p>
            </div>)}
        </div>
    )
}

export default MainMessage