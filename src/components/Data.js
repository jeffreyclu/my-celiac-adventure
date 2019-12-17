export const gameData = {
    days: 7,
    day: 0,
    meal: ["Breakfast", "Lunch", "Dinner"],
    mealIdx: 0,
    meals: 2,
    hunger: 100,
    health: 100,
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
              gluten: 10,
              fructose: 50,
              lactose: 100,
              hunger: 5,
              health: 3
            },
          glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination as a result.',
          fructoseExplanation: 'Tomatoes contain fructose.',
          lactoseExplanation: 'Mozarella is a cheese and contains lactose.'
        },
        {
          id: 'TCGT',
          name: 'Nachos with Cheese, Guacamole and Tomato Salsa',
          attributes:
            {
              gluten: 100,
              fructose: 50,
              lactose: 100,
              hunger: 10,
              health: 5
            },
          glutenExplanation: 'Tortilla chips are made with flour and contain gluten. Cheese contains lactose.',
          fructoseExplanation: 'Tomatoes contain fructose.',
          lactoseExplanation: 'Cheese contains lactose.'
        },
        {
          id: 'CTMB',
          name: 'Chicken Tikka Massala with Basmati Rice',
          attributes:
            {
              gluten: 10,
              fructose: 0,
              lactose: 100,
              hunger: 15,
              health: 9
            },
          glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination as a result.',
          lactoseExplanation: 'The dish is prepared with butter, which contains lactose.'
        },
        {
          id: 'CPMC',
          name: 'Chickpea Papadom with Mango Chutney',
          attributes:
            {
              gluten: 10,
              fructose: 100,
              lactose: 0,
              hunger: 5,
              health: 3
            },
          glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination as a result.',
          fructoseExplanation: 'Mango contains high amounts of fructose.'
        },
        {
          id: 'PBBR',
          name: 'Pho in Beef Broth with Sliced Ribeye',
          attributes:
            {
              gluten: 20,
              fructose: 0,
              lactose: 0,
              hunger: 15,
              health: 9
            },
          glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination as a result.'
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
              health: 5
            },
          glutenExplanation: 'Buffalo Wings are coated in flour and contain gluten. French Fries are fried in a shared frier where items containing gluten are also fried.'
        },
        {
          id: 'SPGC',
          name: "Shepherd's Pie with Grated Cheddar",
          attributes:
            {
              gluten: 10,
              fructose: 0,
              lactose: 100,
              hunger: 15,
              health: 9
            },
          glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination as a result.',
          lactoseExplanation: 'Cheddar is a cheese and contains lactose.'
        },
        {
          id: 'CHMV',
          name: 'Chongqing Hotpot with Raw Meat and Vegetables',
          attributes:
            {
              gluten: 10,
              fructose: 50,
              lactose: 0,
              hunger: 15,
              health: 9
            },
          glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination as a result.',
          fructoseExplanation: 'Some of the vegetables contain fructose.'
        },
        {
          id: 'PDSP',
          name: 'Peking Duck, sans Pancakes',
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
          attributes:
            {
              gluten: 10,
              fructose: 50,
              lactose: 0,
              hunger: 10,
              health: 5
            },
          glutenExplanation: 'The dish was prepared in a common area and suffered from cross-contamination as a result.',
          fructoseExplanation: 'Pineapple contains fructose.',
        },
        {
          id: 'CQSV',
          name: 'Chicken Quesadilla with Salsa Verde',
          attributes:
            {
              gluten: 100,
              fructose: 50,
              lactose: 100,
              hunger: 10,
              health: 5
            },
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.',
          fructoseExplanation: 'Tomatillos contain fructose.',
          lactoseExplanation: 'Quesadillas contain cheese, which contain lactose.'
        },
        {
          id: 'VSPS',
          name: 'Veal Saltimbocca with Prosciutto and Sage',
          attributes:
            {
              gluten: 10,
              fructose: 0,
              lactose: 0,
              hunger: 15,
              health: 9
            },
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.',
        },
        {
          id: 'GSBS',
          name: 'Gnocchi with Sage and Butter Sauce',
          attributes:
            {
              gluten: 10,
              fructose: 0,
              lactose: 100,
              hunger: 10,
              health: 5
            },
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.',
          lactoseExplanation: 'Butter contains lactose.'
        },
        {
          id: 'CMSV',
          name: 'Chicken Marsala with Steamed Vegetables',
          attributes:
            {
              gluten: 10,
              fructose: 50,
              lactose: 0,
              hunger: 15,
              health: 9
            },
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.',
          fructoseExplanation: 'Some of the vegetables contain fructose.'
        },
        {
          id: 'CAGP',
          name: 'Chicken Alfredo with Gluten-Free Penne',
          attributes:
            {
              gluten: 10,
              fructose: 0,
              lactose: 100,
              hunger: 15,
              health: 9
            },
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.',
          lactoseExplanation: 'Alfredo sauce uses both cream and cheese, which contain lactose.'
        },
        {
          id: 'CRAR',
          name: 'Cold Rice with Apple and Raisins',
          attributes:
            {
              gluten: 10,
              fructose: 100,
              lactose: 0,
              hunger: 5,
              health: 3
            },
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.',
          fructoseExplanation: 'Apples contain high amounts of fructose.',
          note: 'This is an actual item served on United Flights. Entirely inedible.'
        },
        {
          id: 'TPRC',
          name: 'Two Plain Crispy Rice Cakes',
          attributes:
            {
              gluten: 10,
              fructose: 0,
              lactose: 0,
              hunger: 5,
              health: 3
            },
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.'
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
              gluten: 10,
              fructose: 0,
              lactose: 0,
              hunger: 10,
              health: 5
            },
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.'
        },
        {
          id: 'BCBP',
          name: 'Baked Chicken with Boiled Potato',
          attributes:
            {
              gluten: 10,
              fructose: 0,
              lactose: 0,
              hunger: 10,
              health: 5
            },
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.',
          note: 'This meal is extremely bland.'
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
          glutenExplanation: 'The dish was prepared on a common griddle and suffered from cross-contamination as a result.'
        }
      ],
      entreeSelection: ""        
}
