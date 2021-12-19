//FizzBuzz

//function that takes an integer
//outputs numbers from 1 to integer input
//if multiple of 3, replace with "Fizz"
//if multiple of 5, replace with "Buzz"
//if both, replace with "FizzBuzz"
//else return the current counter

function fizzBuzz(num) {
  let counter = 1;

  while (counter <= num) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log("FizzBuzz");
    } else if (counter % 3 === 0) {
      console.log("Fizz");
    } else if (counter % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(counter);
    }
    counter++;
  }
}

fizzBuzz(16);
