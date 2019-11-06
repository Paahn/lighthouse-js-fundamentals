const raining = false;
const temperature = 10;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (temperature <= 10) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature > 10 && temperature <= 20){
  console.log("Yeah, short sleeves won't do. Bring a jacket!")
} else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}
