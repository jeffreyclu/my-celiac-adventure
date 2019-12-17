import React from 'react'

class ShowMessage extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            {!this.props.data.start ? 
            (<div><h1>Welcome</h1>
                <p>Welcome to My Celiac Adventure! Your challenge is to survive {this.props.data.days} days by choosing to eat or skip meals. There will be {this.props.data.meals + 1} meals per day and each meal has a chance of containing gluten. If you eat a meal that doesn't contain gluten then you will lose hunger points (yay), but if you eat a meal containing gluten or if you skip a meal then you will gain hunger points (nay). If your hunger reaches 100 you will die! Good luck!</p>
                <button onClick={this.props.startGame}>Start</button>
            </div>) : 
            (<div>
                <p>{this.props.data.message}</p>
                <button onClick={this.props.closeMessage}>Continue</button>
            </div>)}
            <p>Your current hunger: {this.props.data.hunger}/100</p>
            <meter min="0" max="100" value={this.props.data.hunger} low="33" high="66" optimum="0">{this.props.data.hunger}/100</meter>
          </div>
        </div>
      );
    }
  }

export default ShowMessage