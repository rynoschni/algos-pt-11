// ## Bubble Sort
// Write a program to sort an array of numbers in ascending order, comparing and swapping two numbers at a time.
// Example Output:
//     [3, 1, 4, 2] - input
//     [1, 3, 4, 2] - loop 1
//     [1, 3, 2, 4] - loop 2
//     [1, 3, 2, 4] - loop 3
//     [1, 2, 3, 4] - loop 4

//set array
//for loop within a for loop
//compare i and i+1 index values
//if i>(i+1) then swap 😗
//continue until its in ascending order and then return

let arr = [3, 1, 4, 2];

// function bubbleSort (inputArr){
//   for (let i = 0; i < inputArr.length; i++){
//       console.log("[20]loop1 run #", i)
//     for (let j = 0; j < inputArr.length; j++){
//           console.log("loop2 run #", j)
//             if (inputArr[j] > inputArr[j+1]){
//                 [inputArr[j], inputArr[j+1]] = [inputArr[j+1], inputArr[j]];
//             }

//             console.log(arr, "log of first for [27]");

//         }
//     }
//     return arr;
// }

function bblSort2(newArr) {
  let z = 0;
  console.log("[36]", newArr, z);
  while (z < newArr.length ) {
    for (let k = 0; k < newArr.length; k++) {
      if (newArr[k] > newArr[k + 1]) {
        [newArr[k], newArr[k + 1]] = [newArr[k + 1], newArr[k]];
      }

    }
    z++
    console.log("[42]", newArr, z);
    
  }
  console.log("[46] before return",newArr,z)
  return newArr;
}

//console.log(bubbleSort(arr));
console.log("final output", bblSort2(arr));
