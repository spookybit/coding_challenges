function phoneNumWords(numString){
  let keypad = {
    1: ['1'],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r', 's'],
    8: ['t','u','v'],
    9: ['w','x','y', 'z']
  };

  let res = [];

  numString.split('').forEach(function(x){
    let current = [];
    if (res.length === 0) {
      keypad[x].forEach(letter => current.push(letter));
    } else {
      keypad[x].forEach(function(letter){
        res.forEach(function(entries){
         current.push(entries += letter)
        })
      })
    }
    res = current
  });

  return res;
}
