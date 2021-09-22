 
function pizzaOven(crustType, sauceType, cheeses, toppings){
  var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = [cheeses];
    pizza.toppings =  [toppings];
  return pizza;
}

var pizza1 = pizzaOven('Deep dish', 'traditional', ['mozzerella', 'feta'], ['pepperoni', 'sausage'] );
console.log(pizza1);
var pizza2 = pizzaOven('Hand tossed', "marinara", ['mozzerella', 'feta'], ['mushroom', 'olives', 'onions']);
console.log(pizza2);
var pizza3 = pizzaOven('Hand tossed', "tomato sauce", ['mozzerella', 'parmesan'], ['green peppers', 'mushrooms', 'bacon']);
console.log(pizza3);
var pizza4 = pizzaOven('Hand tossed', 'alfredo', ['mozzerella', 'parmesan'], ['mussels', 'mushrooms']);

//Bonus Challenge//
function randomPizza(crust, sauce, cheese, topping) {

  var crustType = ['hand tossed', 'deep dish'];
  var sauceType = ['spicy marinara', 'marinara', 'alfredo', 'bbq'];
  var cheeses = ['mozzerella', 'feta', 'parmesan', 'provolone'];
  var toppings =  ['mushrooms', 'pineapple', 'green peppers', 'olives', 'bacon', 'italian sausage', 'onions', 'ham', 'chicken', 'anchovies', 'pepperoni', 'jalapeno', 'cream cheese'];
  
  var pizzaReady = {
      crust: crustType[Math.floor(Math.random() * crustType.length)],
      sauce: sauceType[Math.floor(Math.random() * sauceType.length)],
      cheese: cheeses[Math.floor(Math.random() * cheeses.length)] + " , " + cheeses[Math.floor(Math.random() * cheeses.length)],
      topping: toppings[Math.floor(Math.random() * toppings.length)] + " , " + toppings[Math.floor(Math.random() * toppings.length)]
  };
  return pizzaReady;
}

randomPizza();
console.log(randomPizza());