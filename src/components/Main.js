import React from 'react'
import MainHeader from './MainHeader'
import MainImage from './MainImage'
import MainButtons from './MainButtons'
import Data from './Data' //entree data
import MealMessage from './MealMessage'
import WelcomeMessage from './WelcomeMessage'
import DeadMessage from './DeadMessage'
import WinMessage from './WinMessage'
import GlutenKitMessage from './GlutenKitMessage'

class Main extends React.Component {
    constructor() {
        super()
        //game state
        this.state = {

            //difficulty level triggers
            hardMode: false,
            extremeMode: false,

            //message triggers
            mealMessage: false,
            welcomeMessage: true,
            deadMessage: false,
            winMessage: false,
            glutenKitMessage: false,
            skipped: false,

            //game constants
            days: 7,
            meals: 2,
            meal: ["Breakfast", "Lunch", "Dinner"],
            entrees: Data,
            lactoseDmg: 2,
            fructoseDmg: 2,

            //game variables
            day: 1,
            mealIdx: 0,
            hunger: 25, //base hunger will vary with difficulty level
            health: 75, //base health will vary with difficulty level
            glutenThreshold: 50, //base gluten threshold will vary with difficulty level
            lactoseThreshold: 50,
            fructoseThreshold: 50,
            entreeSelection: "",
            glutenKits: 2
        }

        //bind main button onclick functions
        this.eatMeal = this.eatMeal.bind(this)
        this.skipMeal = this.skipMeal.bind(this)
        this.glutenKit = this.glutenKit.bind(this)
    }

    //random num generator helper function
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min
    }

    //check player hunger - happens when closing popup
    hungerCheck() {
        this.setState(prevState => {
                //if player is dead, return dead message
                if (prevState.hunger >= 100) { 
                    return {
                        deadMessage: true,
                    }
                }
                //if player hunger is less than 0 (absolute minimum), reset hunger to 0
                else if (prevState.hunger <= 0) {
                    return {
                        hunger: 0
                    }
                }
            }
        )
    }

    //check player health - happens when closing popup
    healthCheck() {
        //check if health is <= 0
        this.setState(prevState => {
            if (prevState.health <= 0) {
                return{
                    deadMessage: true,
                }
            }
        })
    }

    //check for gluten - happens on eat action
    glutenCheck() {
        //message constants
        const glutenFreeMessage = `Phew, safe!
            You reduced your hunger by ${this.state.entreeSelection.attributes.hunger}.`
        const glutenMessage = `Oh no, you got glutened! You gained 
            ${this.state.entreeSelection.attributes.hunger} hunger and lost ${this.state.entreeSelection.attributes.health} health.`

        //change state based on gluten check result
        this.setState(prevState => {
            //is dish gluten free then return the gluten free message
            if (this.state.entreeSelection.attributes.gluten < this.state.glutenThreshold) {
                return {
                    skipped: false,
                    message: glutenFreeMessage,
                    hunger: prevState.hunger - this.state.entreeSelection.attributes.hunger,
                }
            }
            //if dish is not gluten free then return the glutened message
            else {
                return {
                    skipped: false,
                    message: glutenMessage,
                    hunger: prevState.hunger + this.state.entreeSelection.attributes.hunger,
                    health: prevState.health - this.state.entreeSelection.attributes.health,
                }
            }
        })
    }

    //check lactose (only in hard mode)
    lactoseCheck() {
        //message constant
        const lactoseMessage = `Ugh, it also had lactose. You lost 2 more health.`
        //change state based on fructose check result
        this.setState(prevState => {
            //check if dish has lactose
            if (this.state.entreeSelection.attributes.lactose >= this.state.lactoseThreshold) {
                return {
                    skipped: false,
                    message: prevState.message + " " + lactoseMessage,
                    health: prevState.health - this.state.lactoseDmg,
                }
         }
            else {
                return {
                    skipped: false,
                }
            }
        })

    }

    //check fructose (only in extreme mode)
    fructoseCheck() {
        //message constant
        const fructoseMessage = `Yikes, it had fructose. You lost 1 more health.`
        //change state based on fructose check result
        this.setState(prevState => {
            //check if dish has fructose
            if (this.state.entreeSelection.attributes.fructose >= this.state.fructoseThreshold) {
                return {
                    skipped: false,
                    message: prevState.message + " " + fructoseMessage,
                    health: prevState.health - this.state.fructoseDmg,
                }
            }
            else {
                return {
                    skipped: false,
                }
            }
        })
    }

    //add random hunger when skipping meals
    skipAdd() {
        const randomHunger = this.randomNumber(5,15)
        const skipMessage = `You skipped the meal and gained ${randomHunger} hunger. You are getting hungry!`
        this.setState(prevState => {
            return {
                entreeSelection: {attributes: {gluten: 100}},
                hunger: prevState.hunger + randomHunger,
                message: skipMessage,
                skipped: true,
            }
        })
    }

    changeDay() {
        //change the day/meal
        this.setState(prevState => {
            //is current meal index less than total number of meals?
            if (this.state.mealIdx < this.state.meals) {
                return {
                    mealIdx: prevState.mealIdx + 1
                }
            }
            //what happens if not?
            else {
                //is current day less than total number of days?
                if(this.state.day < this.state.days) {
                    //reset meals and add 1 day
                    return {
                        mealIdx: 0,
                        day: prevState.day + 1
                    }  
                } 
                //otherwise we are at the end so display win message
                else {
                    return {
                        winMessage: true
                    }
                }
            }
        })    
    }
    
    //get first item of randomized entrees array
    changeMeal() {
        this.setState({
            entreeSelection: this.state.entrees.shift()
        })
    }

    //what happens when player chooses to eat meal
    eatMeal() {
        //check for gluten
        this.glutenCheck()
        //hard mode lactose check
        if (this.hardMode){
            this.lactoseCheck()
        }
        //hard mode lactose check
        if (this.extremeMode){
            this.fructoseCheck()
        }
        //show the popup
        this.mealMessage()
    }

    //what happens when player chooses to skip meal
    skipMeal() {
        //add hunger penalty for skipping meal
        this.skipAdd()
        //show the popup
        this.mealMessage()
    }

    //use a gluten kit to restore health
    glutenKit() {
        this.setState(prevState => {
            return {
                glutenKits: prevState.glutenKits - 1,
                health: prevState.health + 10
            }
        })
        this.glutenKitMessage()
    }

    //popup after gluten kit
    glutenKitMessage() {
        this.setState({
            glutenKitMessage: !this.state.glutenKitMessage
          });
    }

    //popup after eating or skipping meal
    mealMessage() {
        this.setState({
            mealMessage: !this.state.mealMessage
          });
    }

    //starts the game
    startGame() {
        this.setState({
            //turn off welcome message
            welcomeMessage: false,
            //randomize entrees array
            entrees: this.state.entrees.sort(() => Math.random() - 0.5),
            //get first entree of randomized entrees array
            entreeSelection: this.state.entrees.shift()
          });
    }

    //player chooses hardMode
    hardMode() {
        this.setState({
            hardMode: true
        })
        this.startGame()
    }

    //player chooses extremeMode
    extremeMode() {
        this.setState({
            hardMode: true,
            extremeMode: true
        })
        this.startGame()
    }

    //continues the game
    continueGame() {
        //check player hunger
        this.hungerCheck()
        //check player health
        this.healthCheck()
        //change day
        this.changeDay()
        //change the meal
        this.changeMeal()
        //close the popup
        this.setState({
            mealMessage: !this.state.mealMessage
        })

    }

    //reset the game
    resetGame() {
        //reload the page
        window.location.reload(false);
    }

    //render to DOM
    render() {
        return(
            <div className="App-main">
                    <div>
                        <MainHeader data={this.state} />
                        <MainImage data={this.state} />
                        <MainButtons 
                            eatMeal={this.eatMeal}
                            skipMeal={this.skipMeal}
                            data={this.state}
                            glutenKit={this.glutenKit}
                            mealMessage={this.mealMessage} />
                        {this.state.welcomeMessage ?
                            <WelcomeMessage 
                                data={this.state}
                                startGame={this.startGame.bind(this)}
                                hardMode={this.hardMode.bind(this)}
                                extremeMode={this.extremeMode.bind(this)}   /> :
                            null}
                        {this.state.glutenKitMessage ?
                            <GlutenKitMessage 
                                data={this.state}
                                continue={this.glutenKitMessage.bind(this)} /> :
                            null}
                        {this.state.mealMessage ?
                            <MealMessage 
                                data={this.state}
                                continueGame={this.continueGame.bind(this)} /> :
                            null}
                        {this.state.deadMessage ?
                            <DeadMessage 
                                data={this.state}
                                resetGame={this.resetGame.bind(this)} /> :
                            null}
                        {this.state.winMessage ?
                            <WinMessage 
                                data={this.state}
                                resetGame={this.resetGame.bind(this)} /> :
                            null}
                    </div>
            </div>
        )
    }

}

export default Main