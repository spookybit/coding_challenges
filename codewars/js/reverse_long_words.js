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
