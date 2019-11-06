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
