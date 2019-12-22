import React from 'react'

function MainImage(props) {

    let link = "https://res.cloudinary.com/jeffreyclu/image/upload/v1576891096/my-celiac-adventure/" + props.data.entreeSelection.id + ".jpg"

    return(
        <div>
            <img src={link} height="400px" alt={props.data.entreeSelection.name}></img>
            <p>{props.data.entreeSelection.name}</p>
        </div>
    )
}

export default MainImage