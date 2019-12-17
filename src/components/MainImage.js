import React from 'react'

function MainImage(props) {
    return(
        <div>
            <img src={props.data.entreeSelection.link} height="400px" alt={props.data.entreeSelection.name}></img>
            <p>{props.data.entreeSelection.name}</p>
        </div>
    )
}

export default MainImage