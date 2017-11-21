// takes a sentence and reverses words 5 chars or longer

function spinWords(words){
  let arr = words.split(" ")
  return arr.map(function(word) {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  }).join(" ")
}

// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }

// function spinWords(string){
//   return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// }

function tribonacci(signature,n){
  while (signature.length < n) {
    signature.push((signature[signature.length - 3] + signature[signature.length - 2] + signature[signature.length - 1]))
  }
  return signature;
}

//find parity outlier; returns the only even or odd number of an array of at least 3 numbers
function findOutlier(integers){
  //your code here
  let evenCount = 0;
  let oddCount = 0;
  let evenNum, oddNum;
  for (let num of integers) {
    if (num % 2 === 0) {
      evenCount += 1;
      evenNum = num;

      if (evenCount>= 1 && oddCount >= 1 && evenCount + oddCount >= 3) {
        if (evenCount > oddCount) {return oddNum}
        else {return evenNum}
      }
    } else {
      oddCount += 1;
      oddNum = num;
      if (evenCount>= 1 && oddCount >= 1 && evenCount + oddCount >= 3) {
        if (evenCount > oddCount) {return oddNum}
        else {return evenNum}
      }
    }
  }
}

// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }

function isTriangle(a,b,c)
{
  let arr = [a,b,c]
  // let max = Math.max(...arr);
  // let index = arr.indexOf(max);
  // arr.splice(index, 1);

  arr.sort(function(x,y) {x-y});

  if (arr[0] + arr[1] > arr[2]) {return true}
  else {return false}
}
