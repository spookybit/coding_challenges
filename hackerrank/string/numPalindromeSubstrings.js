//substring count of all palindromes

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

//first occurence index of substring

function firstOccurrence(s, x) {
    for (let i = 0; i < s.length; i++) {
        let counter = i;
        let j = 0;
        while (s[counter] === x[j] || x[j] === '*') {
            counter += 1;
            j += 1;
            if (j === x.length - 1) {
                return i
            }
        }
    }
    return false
}
