//convert string to array
//bubble sort indices array
//whenever that happens, also do same bubble sort to string array

function wordScramble(string, inputArr) {
  let stringArr = string.split("");
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr.length; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        [inputArr[j], inputArr[j + 1]] = [inputArr[j + 1], inputArr[j]];
        [stringArr[j], stringArr[j + 1]] = [stringArr[j + 1], stringArr[j]];
      }
    }
  }
  return stringArr.join("");
}

console.log(wordScramble("odce", [1, 2, 0, 3]));
