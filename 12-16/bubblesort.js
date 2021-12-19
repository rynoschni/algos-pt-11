//Bubble Sort

let arr1 = [3, 1, 4, 2];

function bubbleSort(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr.length; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        [inputArr[j], inputArr[j + 1]] = [inputArr[j + 1], inputArr[j]];
      }
    }
  }
  return arr1;
}

console.log(bubbleSort(arr1));
