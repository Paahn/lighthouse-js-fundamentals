let lastIndexOf = function(array, value){
  let flag = 0;
  let foundIt = false;
  for (let i = 0; i <  array.length; i++){
    // console.log(array[i]);  
    if (array[i] === value){
      flag = i;
      foundIt = true;
    }
  }
  if (foundIt){
    return flag;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);