import React from 'react'

function MainButtons(props) {
    return(
        <div>
            <button onClick={props.eatMeal}>Eat</button>
            <button onClick={props.skipMeal}>Skip</button>
        </div>
    )
}

export default MainButtons