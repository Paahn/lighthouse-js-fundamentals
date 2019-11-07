
let range = function(start, end, step){
  let array = [];
  if (start > end || step <= 0 || start === undefined || end === undefined || step === undefined){
    return [];
  } else {
    for (let i = start; i <= end; i += step){
      array.push(i);
    }
  }
  return array;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 20, -3));
console.log(range(0, 0, 0));
console.log(range());
console.log(range(0, 10, -5));