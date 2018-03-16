// Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
//

function pairSum(arr, target){
  let checkedNumPositions = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    let otherNum = target - arr[i];
    if (checkedNumPositions[otherNum]) {
      return [checkedNumPositions[otherNum], i]
    } else {
      checkedNumPositions[arr[i]] = i;
    }
  }
  return false;
}

// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function longestUniqueSubstring(str){
  let charPos = {};
  let subStrStart = 0;
  let maxLength = 0;
  for (let i = 0, len = str.length; i < len; i++){
    let letter = str[i];

    if (charPos[letter]){
      if (i - subStrStart > maxLength) {maxLength = i - subStrStart}
      let updatePos = charPos[letter] + 1;
      subStrStart = updatePos;
      charPos[letter] = i;
    } else if (i === len - 1) {
      maxLength = i - subStrStart + 1
    } else {
      charPos[letter] = i;
    }
  }
  return maxLength;
}
