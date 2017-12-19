function palindrome(s) {
  let hashMap = {};
  let counter = 0;

  for (let window = 1 ; window < s.length + 1; window ++) {
      for (let i = 0; i < s.length - window + 1; i++) {
        let windowEnd = i + window
        let substr = s.slice(i, windowEnd)

        if (!hashMap[substr] && s[i] === s[windowEnd - 1]) {
          let pal = isPalindrome(substr);
          hashMap[substr] = pal
          if (pal) {counter += 1}
        }
      }
  }
  return counter
}

function isPalindrome(s) {
    let reverse = s.split("").reverse().join("")
    return s === reverse ? true : false
}
