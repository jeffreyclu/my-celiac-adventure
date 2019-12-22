import React from 'react'

function HungerBar(props) {

    const hungerBarMinWidth = props.currentHunger <= 30 ? 30 : props.currentHunger  

    return (
        <div>
            <div className='healthBar'>
                <div className='healthSection health' style={{'width': hungerBarMinWidth+'%'}}>
                    <p>Hunger: {props.currentHunger}</p>
                </div>
                <div className='healthSection damage' style={{'width': props.hungerDelta+'%'}}>
                    <p>
                        {props.hungerDelta}
                    </p>
                </div>
                {/* <div id='left' className='healthSection remaining' style={{'width': currentHealth+'%'}}><p>$80 left</p></div>     */}
            </div>
        </div>    
    )
}

export default HungerBar