const readline = require('readline') //basic require

const rl = readline.createInterface({
  input: process.stdin, //requiry for input base on readline
  output: process.stdout, //requiry for output base on readline
});

let number = []; //insert number as a string?
let count = 0; //starting from 0

function askNumber(){ //func to ask for numbers
  if (count <5) {
    rl.question('Enter number ${count + 1}: ', (input) => {
      const num = Number(input);
      if (!isNaN(num) {
        number.push(num);
        count++;
        askNumber();
      } else {
          console.log('Please enter a valid number:');
        console.log('The maximum number among the list is: ${max}');
        rl.close();
      }
  }
}
askNumber();
