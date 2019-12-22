import React from 'react'

function HealthBar(props) {

    const healthBarMinWidth = props.currentHealth <= 30 ? 30 : props.currentHealth  

    return (
        <div>
            <div className='healthBar'>
                <div className='healthSection health' style={{'width': healthBarMinWidth+'%'}}>
                    <p>Health: {props.currentHealth}</p>
                </div>
                <div className='healthSection damage' style={{'width': props.totalDmg+'%'}}>
                    <p>
                        {props.totalDmg}
                    </p>
                </div>
                {/* <div id='left' className='healthSection remaining' style={{'width': currentHealth+'%'}}><p>$80 left</p></div>     */}
            </div>
        </div>    
    )
}

export default HealthBar