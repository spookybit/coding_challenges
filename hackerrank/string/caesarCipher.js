function caesarCipher(str, k){
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  str = str.toLowerCase().split('');
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let num = alph.indexOf(str[i]);
    if (num != -1) {
      res.push(alph[(num+k)%26])
    } else {
      res.push(' ')
    }
  }
  return res.join('')
}

function caesarCipher(str, k){
  let hashmap = {};
  let res = []
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  alph.forEach(function(x){
    hashmap[x] = alph[(alph.indexOf(x)+k)%26]
  });
  str.split('').forEach(function(letter){
    if (hashmap(letter)) {
      res.push(hashmap(letter));
    } else {
      res.push(letter);
    }
  })

  return res.join('');
}
