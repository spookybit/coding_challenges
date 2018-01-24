// abc == 2 letters away from palindrome aba

function lettersAwayFromPalindrome(str){
  let difference = 0;
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    // difference += Math.abs(str[i].charCodeAt(0) - str[j].charCodeAt(0));
    difference += Math.abs(str.charCodeAt(i) - str.charCodeAt(i));
  }
  return difference;
}
