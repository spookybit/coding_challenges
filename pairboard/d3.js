
Array.prototype.myMap = function(fn) {
  const arr = [];
  this.forEach((el) => arr.push(fn(el)));
  return arr;
};

// capitals only right now, lol
function foldingCypher(string) {
  const alph = function() {
    let arr = [];
    for (let i = 0; i < 26; i++) {
      arr.push(String.fromCharCode(i+65))
    }
    return arr;
  }();


  const revAlph = function() {
    let arr = [];
    for (let i = 0; i < 26; i++) {
      arr.push(String.fromCharCode(i+65))
    }
    return arr.reverse();
  }();

  return (string.split("").map ( (letter) => {
    console.log(alph);
    console.log(alph.indexOf(letter));
    return revAlph[alph.indexOf(letter)]
    }
  ).join())
};
