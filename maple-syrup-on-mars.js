let howManyHundreds = function(num){
  let hundreds = 0;
  if (num / 100 >= 1){
    hundreds = parseInt(num / 100);
    return hundreds;
  } else {
    return 0;
  }
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
console.log(howManyHundreds(100));