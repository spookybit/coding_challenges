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
