function longestSubstringWithKUniques(str, k) {
  let longest = "";
  let strArr = str.split("");
  let current = "";
  let currentLetters = {};
  let start = 0;
  let end = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i]
    if (Object.keys(currentLetters).length === k && currentLetters[letter] === undefined) {
      end = i;
      longest = current;
      break;
    }
    current += str[i];
    currentLetters[letter] = true;
  }

  for (let j = end; j < str.length; j++) {
    current = str.slice(start, j)
    console.log(start)
    console.log(j)
    console.log(current)
    if (invalidUniq(current, k)) {

    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      start += 1;
    }
  }

  return longest;
}

function invalidUniq(arr, k) {
  let set = new Set(arr).size
  return set !== k;
}
