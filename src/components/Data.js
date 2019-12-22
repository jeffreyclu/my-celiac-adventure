function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}

const Data =
  [
    {
      id: 'PRBB',
      name: 'Plain Ramen in Bone Broth',
      attributes:
        {
          gluten: 100,
          fructose: 0,
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'Ramen is made from flour and contains gluten.'
    },
    {
      id: 'TSWM',
      name: 'Tomato Soup with Mozarella',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: randomNumber(1,100),
          lactose: 100,
          hunger: 5,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      fructoseExplanation: 'Tomatoes contain fructose.',
      lactoseExplanation: 'Mozarella is a cheese and contains lactose.'
    },
    {
      id: 'TCGT',
      name: 'Nachos with Cheese, Guacamole and Tomato Salsa',
      attributes:
        {
          gluten: 100,
          fructose: randomNumber(1,100),
          lactose: 100,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'Tortilla chips are made with flour and contain gluten.',
      fructoseExplanation: 'Tomatoes contain fructose.',
      lactoseExplanation: 'Cheese contains lactose.',
      note: 'Even if you request corn tortillas, make sure to ask the Chef to prepare the dish in a separate area!'
    },
    {
      id: 'CTMB',
      name: 'Chicken Tikka Massala with Basmati Rice',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: 0,
          lactose: 100,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      lactoseExplanation: 'The dish is prepared with butter, which contains lactose.'
    },
    {
      id: 'CPPC',
      name: 'Chickpea Papadom with Pickled Onion and Chutnies',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: 100,
          lactose: 0,
          hunger: 5,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      fructoseExplanation: 'Mango chutney contains high amounts of fructose.'
    },
    {
      id: 'PBBR',
      name: 'Pho in Beef Broth with Sliced Ribeye',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: 0,
          lactose: 0,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      note: 'Pho noodles are usually made from rice and gluten free, but make sure to ask the Chef to prepare the dish in a separate area!'
    },
    {
      id: 'BWFF',
      name: 'Buffalo Chicken Wings with French Fries',
      attributes:
        {
          gluten: 100,
          fructose: 0,
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'Buffalo Wings are coated in flour and contain gluten. French Fries are fried in a shared frier where items containing gluten are also fried.'
    },
    {
      id: 'SPGC',
      name: "Shepherd's Pie with Grated Cheddar",
      attributes:
        {
          gluten: 100,
          fructose: 0,
          lactose: 100,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'Flour is used as an ingredient to bind the groud lamb.',
      lactoseExplanation: 'Cheddar is a cheese and contains lactose.',
      note: "Even if you can't see any traces of gluten, always ask the Chef!"
    },
    {
      id: 'CHMV',
      name: 'Chongqing Hotpot with Raw Meat and Vegetables',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: randomNumber(1,100),
          lactose: 0,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      fructoseExplanation: 'Some of the vegetables contain fructose.',
      note: 'Even if the raw ingredients are naturally gluten free, make sure that they were prepped in a separate area!'
    },
    {
      id: 'PDSP',
      name: 'Peking Duck, sans Pancakes',
      attributes:
        {
          gluten: 100,
          fructose: randomNumber(1,100),
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The sauce used in Peking Duck contains soy sauce, which contains gluten.',
      fructoseExplanation: 'The dipping sauce may contain fructose.',
      note: "As with many Chinese dishes, it is very hard to find a gluten free version of Peking Duck."
    },
    {
      id: 'BBCG',
      name: 'Beef Burrito with Cheese and Guacamole',
      attributes:
        {
          gluten: 100,
          fructose: randomNumber(1,100),
          lactose: 100,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The tortilla is made from flour and contains gluten.',
      fructoseExplanation: 'Green peppers contain fructose.',
      lactoseExplanation: 'Cheese contains lactose.'
    },
    {
      id: 'TPCT',
      name: 'Tacos al Pastor with Corn Tortilla',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: randomNumber(1,100),
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      fructoseExplanation: 'Pineapple contains fructose.',
    },
    {
      id: 'CQSV',
      name: 'Chicken Quesadilla with Salsa Verde',
      attributes:
        {
          gluten: 100,
          fructose: randomNumber(1,100),
          lactose: 100,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'Tortilla is made with flour and contains gluten.',
      fructoseExplanation: 'Tomatillos contain fructose.',
      lactoseExplanation: 'Quesadillas contain cheese, which contain lactose.',
      note: 'Even if the tortilla is corn based, Quesadillas are often prepared on a common griddle and can suffer from cross-contamination.'
    },
    {
      id: 'VSPS',
      name: 'Veal Saltimbocca with Prosciutto and Sage',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: randomNumber(1,100),
          lactose: 0,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
    },
    {
      id: 'GSBS',
      name: 'Potato Gnocchi with Sage & Butter Sauce',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: randomNumber(1,100),
          lactose: 100,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      lactoseExplanation: 'Butter contains lactose.',
      note: "Even if the gnocchi itself is gluten free, always ask the Chef to prepare it in a separate area!"
    },
    {
      id: 'CMSV',
      name: 'Chicken Marsala with Steamed Vegetables',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: randomNumber(1,100),
          lactose: 0,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      fructoseExplanation: 'Some of the vegetables contain fructose.'
    },
    {
      id: 'CAGP',
      name: 'Chicken Alfredo with Gluten-Free Penne',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: 0,
          lactose: 100,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      lactoseExplanation: 'Alfredo sauce uses both cream and cheese, which contain lactose.',
      note: 'Even if the pasta is gluten free, always ask the Chef to prepare it using a separate pot!'
    },
    {
      id: 'CRAR',
      name: 'Cold Rice with Apple and Raisins',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: 100,
          lactose: 0,
          hunger: 5,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      fructoseExplanation: 'Apples contain high amounts of fructose.',
      note: 'This is an actual item served on United Flights. Entirely inedible.'
    },
    {
      id: 'TPRC',
      name: 'Two Plain Crispy Rice Cakes',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: 0,
          lactose: 0,
          hunger: 5,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      note: 'Check the label to see if it is made in a gluten-free facility!'
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
          health: randomNumber(5,15)
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
          health: randomNumber(5,15)
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
          health: randomNumber(5,15)
        },
      glutenExplanation: 'Sushi rice contains rice vinegar, which contains gluten.',
      note: "You can't assume sushi is gluten free - in fact most of the time the opposite is true!"
    },
    {
      id: 'SPCC',
      name: "Sashimi Plate - Chef's Choice",
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: 0,
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      note: 'Did you know that "wasabi" commonly served in the US is usually just processed horseradish, and often not gluten-free?'
    },
    {
      id: 'BCBP',
      name: 'Roast Chicken with Baked Potatoes',
      attributes:
        {
          gluten:  randomNumber(1,100),
          fructose: 0,
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
    },
    {
      id: 'FBAE',
      name: 'Fried Bacon and Eggs',
      attributes:
        {
          gluten: 100,
          fructose: 0,
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      note: 'A diner favorite - but always ask that it be prepared in a separate area!'
    },
    {
      id: 'SSGV',
      name: 'Strip Steak with Grilled Vegetables',
      attributes:
        {
          gluten: randomNumber(1, 100),
          fructose: randomNumber(1, 100),
          lactose: 0,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      fructoseExplanation: 'Some of the vegetables contain fructose.',
      note: 'A steakhouse favorite - but always ask that it be prepared in a separate area!'
    },
    {
      id: 'BCBF',
      name: 'Bacon Cheeseburger with Fries',
      attributes:
        {
          gluten: 100,
          fructose: randomNumber(1, 100),
          lactose: 100,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The bun is made from flour and contains gluten.',
      fructoseExplanation: 'Tomatoes contain fructose.',
      lactoseExplanation: 'Cheese contains lactose.'
    },
    {
      id: 'CPPP',
      name: 'Classic Pepperoni Pizza',
      attributes:
        {
          gluten: 100,
          fructose: randomNumber(1, 100),
          lactose: 100,
          hunger: 15,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The pizza base is made from flour and contains gluten',
      fructoseExplanation: 'Tomatoes contain fructose.',
      lactoseExplanation: 'Cheese contains lactose.'
    },
    ,
    {
      id: 'CSSD',
      name: 'Classic Shanghai Soup Dumplings',
      attributes:
        {
          gluten: 100,
          fructose: 0,
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dumplings are made from flour and contain gluten. The filling also contains flour.',
    },
    {
      id: 'CRSD',
      name: 'Crystal Shrimp Dumplings (Har Gow)',
      attributes:
        {
          gluten: randomNumber(1, 100),
          fructose: 0,
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      note: 'Even though these dumplings are made with rice flour, make sure to ask the Chef to prepare them in a separate area!'
    },
    {
      id: 'SSCR',
      name: 'Shrimp Scampi Risotto',
      attributes:
        {
          gluten: randomNumber(1, 100),
          fructose: 0,
          lactose: 0,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination :(',
      note: "Even though Risotto is made from rice, always ask the Chef to prepare it in a separate area!"
    },
    {
      id: 'CFOS',
      name: 'Classic French Onion Soup',
      attributes:
        {
          gluten: 100,
          fructose: 0,
          lactose: 100,
          hunger: 10,
          health: randomNumber(5,15)
        },
      glutenExplanation: 'Bread is a component of French Onion Soup which contains gluten.',
      lactoseExplanation: 'Cheese is also a component of French Onion Soup which contains lactose',
    }
  ] 
export default Data