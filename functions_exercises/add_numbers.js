const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Give me a number!", function (answer) {
      sum += parseInt(answer);
      console.log(sum);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback); 
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

function sumNums(first, second) {
  return first + second;
}

addNumbers(10, 5, sum => console.log(`Total Sum: ${sum}`));