// return a number representing the position differences between two strings to make them anagrams
// example : 'ab' is 2 positions away from 'da' because b is two letters away from d while a is the same

function stepsToAnagram(str1, str2) {
  let charCode1 = 0;
  let charCode2 = 0;

  for (let i = 0, len = str1.length; i < len ; i++) {
    charCode1 += str1.charCodeAt(i);
  }


  for (let i = 0, len = str1.length; i < len ; i++) {
    charCode2 += str2.charCodeAt(i);
  }

  return Math.abs(charCode2 - charCode1);
}

stepsToAnagram('abc', 'def')
