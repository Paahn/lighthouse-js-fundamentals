// Write a program that prints the numbers from 100 to 200 to the console, 
// with three exceptions: - If the number is a multiple of 3, print the String "Loopy".
// - If the number is a multiple of 4, print the String "Lighthouse".
// - If the number is a multiple of both 3 and 4, print the String "LoopyLighthouse".
for (let i = 100; i < 200; i++){
  let output = "";
  if (i % 3 === 0){
    output += "loopy";
  }
  if (i % 2 === 0){
    output += "lighthouse";
  }
  console.log(output === "" ? i : output)
}