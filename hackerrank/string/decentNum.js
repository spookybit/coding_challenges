// A Decent Number has the following properties:
//
// Its digits can only be 3's and/or 5's.
// The number of 3's it contains is divisible by 5.
// The number of 5's it contains is divisible by 3.
// If there are more than one such number, we pick the largest one.

function decentNum(num){
  if (num%3 === 0 && num!== 0) {
    return '5'.repeat(num);
  } else if (num%3 == 1 && num >= 10) {
    return '5'.repeat(num-10)+'3'.repeat(10);
  } else if (num%3 == 2 && num >= 5) {
    return '5'.repeat(num-5)+'3'.repeat(5);
  } else {
    return false;
  }
}
