// remove duplicates from a sorted array O(1) extra memory

function removeDuplicates(arr){
  let lastVisitedNum = arr[0];
  let uniqueIndex = 1;

  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] !== lastVisitedNum) {
      lastVisitedNum = arr[i];
      arr[uniqueIndex] = lastVisitedNum;
      uniqueIndex += 1;
    } else if (i !== uniqueIndex) {
      arr[i] = null;

    }
  }

  return arr.splice(0,uniqueIndex);
}
