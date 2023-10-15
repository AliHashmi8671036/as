import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
  const data = JSON.parse(recipeJSON);
  if(req.body['choice']=='chicken') {
    res.render("index.ejs", {
      name: data[0]['name'],
      protein: data[0]['ingredients']['protein']['name'] +" "+ data[0]['ingredients']['protein']['preparation'],
      salsa: data[0]['ingredients']['salsa']['name'],
      topping1: data[0]['ingredients']['toppings'][0]['quantity'] +" of "+ data[0]['ingredients']['toppings'][0]['name'],
      topping2: data[0]['ingredients']['toppings'][1]['quantity'] +" of "+ data[0]['ingredients']['toppings'][1]['name'],
      topping3: data[0]['ingredients']['toppings'][2]['quantity'] +" of "+ data[0]['ingredients']['toppings'][2]['name'],
      topping4: data[0]['ingredients']['toppings'][3]['quantity'] +" of "+ data[0]['ingredients']['toppings'][3]['name'],
    });
  } else if (req.body['choice']=='beef') {
    res.render("index.ejs", {
      name: data[1]['name'],
      protein: data[1]['ingredients']['protein']['name'] +" "+ data[0]['ingredients']['protein']['preparation'],
      salsa: data[1]['ingredients']['salsa']['name'],
      topping1: data[1]['ingredients']['toppings'][0]['quantity'] +" of "+ data[0]['ingredients']['toppings'][0]['name'],
      topping2: data[1]['ingredients']['toppings'][1]['quantity'] +" of "+ data[0]['ingredients']['toppings'][1]['name'],
      topping3: data[1]['ingredients']['toppings'][2]['quantity'] +" of "+ data[0]['ingredients']['toppings'][2]['name'],
    });
  } else if (req.body['choice']=='fish') {
    res.render("index.ejs", {
      name: data[2]['name'],
      protein: data[2]['ingredients']['protein']['name'] +" "+ data[0]['ingredients']['protein']['preparation'],
      salsa: data[2]['ingredients']['salsa']['name'],
      topping1: data[2]['ingredients']['toppings'][0]['quantity'] +" of "+ data[0]['ingredients']['toppings'][0]['name'],
      topping2: data[2]['ingredients']['toppings'][1]['quantity'] +" of "+ data[0]['ingredients']['toppings'][1]['name'],
      topping3: data[2]['ingredients']['toppings'][2]['quantity'] +" of "+ data[0]['ingredients']['toppings'][2]['name'],
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
