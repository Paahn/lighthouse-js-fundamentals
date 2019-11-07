const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
i = 0;
console.log("Ingredients printed with a while loop")
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nIngredients printed with a for loop")
for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nIngredients printed backwards")
let reversedIngredients = ingredients.reverse();
for (let i = 0; i < reversedIngredients.length; i++){
  console.log(reversedIngredients[i]);
}
