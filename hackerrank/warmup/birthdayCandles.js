// https://www.hackerrank.com/challenges/birthday-cake-candles?h_r=next-challenge&h_v=zen

function birthdayCakeCandles(arr) {
  // let max = arr.reduce(function(a,b) {
  //   return Math.max(a,b);
  // })
  let max = arr[0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      count = 1
    } else if (arr[i] === max) {
      count += 1;
    }
  }
  return count;
}
