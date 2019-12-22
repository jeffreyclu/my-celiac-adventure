import React from 'react'

function MainButtons(props) {
    return(
        <div className="App-buttons">
            <button onClick={props.eatMeal}>Eat</button>
            <button style={{"background-color": "red"}}onClick={props.skipMeal}>Skip</button>
            {props.data.glutenKits > 0 ? <button style={{"background-color": "lightskyblue"}} onClick={props.glutenKit}>Use Gluten Kit</button> : null}
        </div>
    )
}

export default MainButtons