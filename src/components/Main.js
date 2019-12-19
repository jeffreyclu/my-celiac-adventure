import React from 'react'
import MainHeader from './MainHeader'
import MainImage from './MainImage'
import MainButtons from './MainButtons'
import ShowMessage from './ShowMessage'
import Footer from './Footer'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            start: false,
            showMessage: true,
            days: 7,
            day: 1,
            meal: ["Breakfast", "Lunch", "Dinner"],
            mealIdx: 0,
            meals: 2,
            hunger: 25,
            health: 100,
            glutenThreshold: 50,
            entrees: [
                {
                  id: 'PRBB',
                  name: 'Plain Ramen in Bone Broth',
                  link: "https://www.wikihow.com/images/thumb/1/10/Cook-Basic-Japanese-Ramen-Step-9-Version-2.jpg/aid1809426-v4-728px-Cook-Basic-Japanese-Ramen-Step-9-Version-2.jpg",
                  attributes:
                    {
                      gluten: 100,
                      fructose: 0,
                      lactose: 0,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'Ramen is made from flour and contains gluten.'
                },
                {
                  id: 'TSWM',
                  name: 'Tomato Soup with Mozarella',
                  link: "https://tasteandsee.com/wp-content/uploads/2016/10/EL-soup-swirl-good.jpg",
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 50,
                      lactose: 100,
                      hunger: 5,
                      health: 3
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  fructoseExplanation: 'Tomatoes contain fructose.',
                  lactoseExplanation: 'Mozarella is a cheese and contains lactose.'
                },
                {
                  id: 'TCGT',
                  name: 'Nachos with Cheese, Guacamole and Tomato Salsa',
                  link: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GtuAR0I/videoblocks-tasty-mexican-nachos-chips-served-on-ceramic-plate-with-cheese-hot-peppers-tomatoes-limes-salsa-and-guacamole-placed-on-dark-rusty-table_h8xatoikp4_thumbnail-full01.png",
                  attributes:
                    {
                      gluten: 100,
                      fructose: 50,
                      lactose: 100,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'Tortilla chips are made with flour and contain gluten.',
                  fructoseExplanation: 'Tomatoes contain fructose.',
                  lactoseExplanation: 'Cheese contains lactose.'
                },
                {
                  id: 'CTMB',
                  name: 'Chicken Tikka Massala with Basmati Rice',
                  link: "https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg",
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 0,
                      lactose: 100,
                      hunger: 15,
                      health: 9
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  lactoseExplanation: 'The dish is prepared with butter, which contains lactose.'
                },
                {
                  id: 'CPMC',
                  name: 'Chickpea Papadom with Mango Chutney',
                  link: "http://www.thedrinksbusiness.com/wordpress/wp-content/uploads/2012/04/Poppadoms.jpg",
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 100,
                      lactose: 0,
                      hunger: 5,
                      health: 3
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  fructoseExplanation: 'Mango contains high amounts of fructose.'
                },
                {
                  id: 'PBBR',
                  name: 'Pho in Beef Broth with Sliced Ribeye',
                  link: "https://embed.widencdn.net/img/beef/ti0wfxoyxn/1120x840px/pho-beef-noodle-soup-square.tif?keep=c&u=7fueml",
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 0,
                      lactose: 0,
                      hunger: 15,
                      health: 9
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :('
                },
                {
                  id: 'BWFF',
                  name: 'Buffalo Chicken Wings with French Fries',
                  link: "https://woodstonepizzeria.com/wp-content/uploads/2015/07/StoneFire-Pizza-0806-2.jpg",
                  attributes:
                    {
                      gluten: 100,
                      fructose: 0,
                      lactose: 0,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'Buffalo Wings are coated in flour and contain gluten. French Fries are fried in a shared frier where items containing gluten are also fried.'
                },
                {
                  id: 'SPGC',
                  name: "Shepherd's Pie with Grated Cheddar",
                  link: "https://images-gmi-pmc.edge-generalmills.com/4d3f02e9-4cd7-4a31-9169-f48192d7e468.jpg",
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 0,
                      lactose: 100,
                      hunger: 15,
                      health: 9
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  lactoseExplanation: 'Cheddar is a cheese and contains lactose.'
                },
                {
                  id: 'CHMV',
                  name: 'Chongqing Hotpot with Raw Meat and Vegetables',
                  link: "http://www.beijing-visitor.com/images/content_images/chongqing-hotpot-1.jpg",
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 50,
                      lactose: 0,
                      hunger: 15,
                      health: 9
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  fructoseExplanation: 'Some of the vegetables contain fructose.'
                },
                {
                  id: 'PDSP',
                  name: 'Peking Duck, sans Pancakes',
                  link: "https://cdn.theculturetrip.com/wp-content/uploads/2016/12/4103966297_1985a99850_b-1024x768.jpg",
                  attributes:
                    {
                      gluten: 100,
                      fructose: 50,
                      lactose: 0,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'The sauce used in Peking Duck contains soy sauce, which contains gluten.',
                  fructoseExplanation: 'The dipping sauce may contain fructose.'
                },
                {
                  id: 'BBCG',
                  name: 'Beef Burrito with Cheese and Guacamole',
                  link: "https://www.alsothecrumbsplease.com/wp-content/uploads/2018/01/Guacamole-Beef-Burrito-5.jpg",
                  attributes:
                    {
                      gluten: 100,
                      fructose: 50,
                      lactose: 100,
                      hunger: 15,
                      health: 9
                    },
                  glutenExplanation: 'The tortilla is made from flour and contains gluten.',
                  fructoseExplanation: 'Green peppers contain fructose.',
                  lactoseExplanation: 'Cheese contains lactose.'
                },
                {
                  id: 'TPCT',
                  name: 'Tacos al Pastor with Corn Tortilla',
                  link: "https://www.dinneratthezoo.com/wp-content/uploads/2019/04/tacos-al-pastor-6.jpg",
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 50,
                      lactose: 0,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  fructoseExplanation: 'Pineapple contains fructose.',
                },
                {
                  id: 'CQSV',
                  name: 'Chicken Quesadilla with Salsa Verde',
                  link: "https://www.tastesoflizzyt.com/wp-content/uploads/2019/04/salsa-verde-chicken-quesadilla-7.jpg",
                  attributes:
                    {
                      gluten: 100,
                      fructose: 50,
                      lactose: 100,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  fructoseExplanation: 'Tomatillos contain fructose.',
                  lactoseExplanation: 'Quesadillas contain cheese, which contain lactose.'
                },
                {
                  id: 'VSPS',
                  name: 'Veal Saltimbocca with Prosciutto and Sage',
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 0,
                      lactose: 0,
                      hunger: 15,
                      health: 9
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                },
                {
                  id: 'GSBS',
                  name: 'Gnocchi with Sage and Butter Sauce',
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 0,
                      lactose: 100,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  lactoseExplanation: 'Butter contains lactose.'
                },
                {
                  id: 'CMSV',
                  name: 'Chicken Marsala with Steamed Vegetables',
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 50,
                      lactose: 0,
                      hunger: 15,
                      health: 9
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  fructoseExplanation: 'Some of the vegetables contain fructose.'
                },
                {
                  id: 'CAGP',
                  name: 'Chicken Alfredo with Gluten-Free Penne',
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 0,
                      lactose: 100,
                      hunger: 15,
                      health: 9
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  lactoseExplanation: 'Alfredo sauce uses both cream and cheese, which contain lactose.'
                },
                {
                  id: 'CRAR',
                  name: 'Cold Rice with Apple and Raisins',
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 100,
                      lactose: 0,
                      hunger: 5,
                      health: 3
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  fructoseExplanation: 'Apples contain high amounts of fructose.',
                  note: 'Fun note: this is an actual item served on United Flights. Entirely inedible.'
                },
                {
                  id: 'TPRC',
                  name: 'Two Plain Crispy Rice Cakes',
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 0,
                      lactose: 0,
                      hunger: 5,
                      health: 3
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :('
                },
                {
                  id: 'CCCS',
                  name: 'Classic Chicken Caesar Salad',
                  attributes:
                    {
                      gluten: 100,
                      fructose: 0,
                      lactose: 100,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'Croutons are made from flour and contain gluten.',
                  lactoseExplanation: 'Cheese contains lactose.'
                },
                {
                  id: 'MSGD',
                  name: 'Miso Soup and Salad with Ginger Dressing',
                  attributes:
                    {
                      gluten: 100,
                      fructose: 0,
                      lactose: 0,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'Ginger dressing contains soy sauce and rice vinegar, both of which contain gluten.'
                },
                {
                  id: 'STGS',
                  name: 'Spicy Tuna Roll with Gluten-Free Soy Sauce',
                  attributes:
                    {
                      gluten: 100,
                      fructose: 0,
                      lactose: 0,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'Sushi rice contains rice vinegar, which contains gluten.'
                },
                {
                  id: 'SPCC',
                  name: "Sashimi Plate - Chef's Choice",
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 0,
                      lactose: 0,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :('
                },
                {
                  id: 'BCBP',
                  name: 'Baked Chicken with Boiled Potato',
                  attributes:
                    {
                      gluten:  this.randomNumber(1,100),
                      fructose: 0,
                      lactose: 0,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
                  note: 'Fun note: this meal is extremely bland.'
                },
                {
                  id: 'BCBP',
                  name: 'Fried Bacon with Hash Browns',
                  attributes:
                    {
                      gluten: 100,
                      fructose: 0,
                      lactose: 0,
                      hunger: 10,
                      health: 5
                    },
                  glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :('
                }
              ],
              entreeSelection: ""        
        }

        this.eatMeal = this.eatMeal.bind(this)
        this.skipMeal = this.skipMeal.bind(this)
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min
    }

    eatMeal() {
        this.showMessage()
        const glutenFreeMessage = `Yay, the meal was free of gluten! You enjoyed the meal safely 
            and reduced your hunger points by ${this.state.entreeSelection.attributes.hunger}.`
        const glutenMessage = `Oh no, the meal contained gluten! You gained 
            ${this.state.entreeSelection.attributes.hunger} hunger points.`
        this.setState(prevState => {
            //is current day less than total days
            if(this.state.day < this.state.days) {

                //is current meal ID less than total meals in a day
                if (this.state.mealIdx < this.state.meals) {
                    
                    //check for gluten
                    if (this.state.entreeSelection.attributes.gluten < this.state.glutenThreshold) {
                        return {
                            mealIdx: prevState.mealIdx + 1,
                            message: glutenFreeMessage,
                            hunger: prevState.hunger - this.state.entreeSelection.attributes.hunger
                        }
                    }
                    //dish is not gluten free
                    else {
                        return {
                            mealIdx: prevState.mealIdx + 1, 
                            message: glutenMessage,
                            hunger: prevState.hunger + this.state.entreeSelection.attributes.hunger
                        }
                    }
                }

                //if id of current meal is greater than total number of meals, then reset meals
                else {
                    
                    //check for gluten
                    if (this.state.entreeSelection.attributes.gluten < this.state.glutenThreshold) {
                        return {
                            day: prevState.day + 1,
                            mealIdx: 0,
                            message: glutenFreeMessage,
                            hunger: prevState.hunger - this.state.entreeSelection.attributes.hunger
                        }
                    }

                    //dish is not gluten free
                    else {
                        return {
                            day: prevState.day + 1,
                            mealIdx: 0,
                            message: glutenMessage,
                            hunger: prevState.hunger + this.state.entreeSelection.attributes.hunger
                        }
                    }
                }
            }
            //the last day
            else {

                //is current meal ID less than total meals in a day 
                if (this.state.mealIdx < this.state.meals) {

                    //check for gluten
                    if (this.state.entreeSelection.attributes.gluten < this.state.glutenThreshold) {
                        return {
                            mealIdx: prevState.mealIdx + 1,
                            message: glutenFreeMessage,
                            hunger: prevState.hunger - this.state.entreeSelection.attributes.hunger
                        }
                    }

                    //dish is not gluten free
                    else {
                        return {
                            mealIdx: prevState.mealIdx + 1, 
                            message: glutenMessage,
                            hunger: prevState.hunger + this.state.entreeSelection.attributes.hunger
                        }
                    }
                }

                //last meal
                else {
                    return {
                        message: "YOU WON!!!",
                    }
                }
            }
        })    
    }

    skipMeal() {
        this.showMessage()
        const skipMessage = `You skipped the meal and gained ${this.randomNumber(5,10)} hunger points. You are getting hungry!`
        this.setState(prevState => {

            //evaluate if day is less than days and hunger is greater than 0
            if(this.state.day < this.state.days) {

                //evaluate if meals is less than meals and hunger is less than 100
                if (this.state.mealIdx < this.state.meals) {
                    return {
                        mealIdx: prevState.mealIdx + 1,
                        entreeSelection: {attributes: {gluten: 100}},
                        hunger: prevState.hunger + this.randomNumber(5,15),
                        message: skipMessage
                    }
                }
                //if meals is greater than meals, then reset meals
                else {
                    return {
                        day: prevState.day + 1,
                        mealIdx: 0,
                        entreeSelection: {attributes: {gluten: 100}},
                        hunger: prevState.hunger + this.randomNumber(5,15),
                        message: skipMessage
                    }
                }
            }
            //the last day
            else {
                if (this.state.mealIdx < this.state.meals) {
                    return {
                        mealIdx: prevState.mealIdx + 1,
                        entreeSelection: {attributes: {gluten: 100}},
                        hunger: prevState.hunger + this.randomNumber(5,15),
                        message: skipMessage
                    }
                }
                //evaluate if hunger = 100
                else {
                    return {
                        message: "You WON!!!"
                    }
                }
            }
        })
    }

    showMessage() {
        this.setState({
            showMessage: !this.state.showMessage,
          });
    }

    closeMessage() {
        this.setState(prevState => {
            if (prevState.hunger < 100) {
                return {
                    showMessage: !prevState.showMessage,
                    entreeSelection: prevState.entrees.shift()
                }
            }

            else {
                return {
                    message: "You are dead!"
                }
            }
        })
    }

    startGame() {
        this.setState({
            showMessage: !this.state.showMessage,
            start: true,
            day: 1,
            entrees: this.state.entrees.sort(() => Math.random() - 0.5),
            entreeSelection: this.state.entrees.shift()
          });
    }

    resetGame() {
        this.setState({
            day: 0,
            hunger: 0
        })
    }

    render() {
        return(
            <div className="App-main">
                <MainHeader data={this.state}/>
                <MainImage data={this.state} />
                <MainButtons 
                    eatMeal={this.eatMeal}
                    skipMeal={this.skipMeal}
                    data={this.state}/>
                {this.state.showMessage ? 
                <ShowMessage
                    text='Message'
                    closeMessage={this.closeMessage.bind(this)}
                    startGame={this.startGame.bind(this)}
                    resetGame={this.resetGame}
                    data={this.state}
                />
          : null}
            </div>
        )
    }

}

export default Main