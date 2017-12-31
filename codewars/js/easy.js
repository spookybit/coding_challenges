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

// Write a method, digital_root(num). It should sum the digits of a positive
// integer. If it is greater than or equal to 10, sum the digits of the
// resulting number. Keep repeating until there is only one digit in the result,
// called the "digital root". Do not use string conversion within your method.

function digitalRoot(num) {
  while (num >= 10) {
    addDigits(num)
  }
  return num;
}

function addDigits(num) {
  let total = 0;
  while (num >= 10) {
    total += num % 10;
    num = num/10;
  }
  return total;
}

//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr)
{
  for (let i = 0, len = arr.length-1; i < len; i++) {
    let leftArr = arr.slice(0,i);
    let rightArr = arr.slice(i+1);

    let left = leftArr[0] ? leftArr.reduce((sum, num) =>sum + num) : 0;
    let right = rightArr[0] ? rightArr.reduce((sum, num) =>sum + num) : 0;

    if (left === right) {return i}
  }
  return -1
}

// function findEvenIndex(arr)
// {
//   for(var i=1; i<arr.length-1; i++) {
//     if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
//       return i;
//     }
//   }
//   return -1;
// }


// let song = 'SOMEWUBWUBWUBSTUFF' === 'SOME STUFF'
function songDecoder(song){
  let res = song.replace(/WUB/g, " ").trim().replace(/ +/g, " ");


  return res;
}
