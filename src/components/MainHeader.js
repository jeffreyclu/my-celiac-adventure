import React from 'react'

function MainHeader(props) {
    return(
        <div>
            <h1>Day {props.data.day}</h1>
            <h3>{props.data.meal[props.data.mealIdx]}</h3>
        </div>
    )
}

export default MainHeader