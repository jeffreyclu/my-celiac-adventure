import React from 'react'

function StartMessage(props) {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <div>
                    <h1>Welcome</h1>
                    <span className="justified">
                        <p>Welcome to My Celiac Adventure! You must survive {props.days} days by choosing to eat 
                        or skip meals.</p> 
                        <p>There are {props.meals + 1} meals per day and 
                        each meal <strong>may contain gluten</strong>. 
                        If you eat a meal not containing gluten then you 
                        will <span className="greentext">lose hunger points</span> (phew), 
                        but if you eat a meal containing gluten or if you skip a meal 
                        then you will <span className="redtext">gain hunger points</span> (nay). 
                        If your hunger reaches 100 <strong>you will die!</strong> Good luck!</p>
                    </span>
                </div>
                <div>
                    <button onClick={props.startGame}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default StartMessage