//
// Part 1: Say that I gave you an array of length n, containing the numbers 1..n in jumbled order. "Sort" this array in O(n) time. You should be able to do this without looking at the input.
//

function nonComparisonSort(arr) {
  let sortedArr = [];

  for (let i = 1, len = arr.length; i < len; i++) {
    sortedArr[i] = arr[i]
  }

  return sortedArr;
}

// Part 2: Say that I give you an array of length n with numbers in the range 1..N (N >= n). Sort this array in O(n + N) time. You may use O(N) memory.
//

function nonComparisonSort2(arr, maxVal){
  let counterArr = new Array(maxVal+1).fill(0);
  let sortedArr = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    counterArr[arr[i]] += 1;
  }

  for (let i = 0, len = counterArr.length; i < len; i++) {
    let times = counterArr[i];

    for (let j = 0; j < times; j++) {
      sortedArr.push(i)
    }
  }

  return sortedArr;
}


// Part 3: Say I give you an array of n strings, each of length k. I claim that, using merge sort, you can sort this in O(knlog(n)), since comparing a pair of strings takes O(k) time.
//
// I want you to beat that. Sort the strings in O(kn). Hint: do not compare any two strings. You may assume all strings contain only lowercase letters a..z without whitespace or punctuation.

function nonComparisonSortStrings(arr){
  let sortedArr = arr.slice();

  for (let i = arr.length - 1; i > - 1; i-- ){
    let buckets = new Array(26).fill(0).map(() => new Array());

    sortedArr.forEach(function(word) {
      let letter = word[i];
      let letterNum = letter.charCodeAt(0) - 97
      buckets[letterNum].push(word);
    })

    let updatingArr = []

    buckets.forEach(function(bucket) {
      bucket.forEach(function(word) {
        updatingArr.push(word)
      })
    })

    sortedArr = updatingArr;
  }

  return sortedArr;
}
