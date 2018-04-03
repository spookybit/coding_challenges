// // An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
// //
// // You have to write the function findMissing(list), list will always be at least 3 numbers. The missing term will never be the first or last one.
//
// function missingNumber(arr) {
//   let differenceCounter = {};
//   let lastNum = arr[0];
//
//   for (let i = 1, len = arr.length; i < len; i++) {
//     let difference = arr[i] - lastNum;
//     differenceCounter[difference] = differenceCounter[difference] ? differenceCounter[difference]+1 : 1;
//     lastNum = arr[i];
//   }
//
//
//   let progressionValue;
//   let differences = Object.keys(differenceCounter);
//   if (differenceCounter[differences[0]] > 1) {
//     progressionValue = differences[0];
//   } else {
//     progressionValue = differences[1];
//   }
//
//   for (let i = 0, len = arr.length; i < len; i++) {
//     let nextNum = parseInt(arr[i]) + parseInt(progressionValue);
//     if (arr[i+1] !== nextNum) {
//       return nextNum;
//     }
//   }
// }
//
// missingNumber([3,6,9,12,18,21])

function missingNumber(arr) {
  let difference;
  let lastNum = arr[0];

  for (let i = 1, len = arr.length; i < len; i++) {
    let thisDiff = arr[i] - lastNum;
    if (difference && difference !== thisDiff) {
      if (thisDiff < 0) {
        difference = -Math.min(Math.abs(thisDiff), Math.abs(difference));
      } else {
        difference = Math.min(Math.abs(thisDiff), Math.abs(difference));
      }
      break;
    }
    difference = thisDiff;
    lastNum = arr[i];
  }

  for (let i = 0, len = arr.length; i < len; i++) {
    let nextNum = arr[i] + difference;
    if (arr[i+1] !== nextNum) {
      return nextNum;
    }
  }
}
