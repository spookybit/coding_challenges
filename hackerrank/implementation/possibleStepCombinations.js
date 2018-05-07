//someone can move up a flight of stairs either 1,2,3 steps at a time. find all possible step combinations to reach the height of num stairs

function stepWays(num, cache={}) {
  if (cache[num]) {
    return cache[num];
  }

  if (num <= 0) {
    return [[]];
  }

  let arr = [];

  for (let i = 3; i > 0; i--) {
    let res = stepWays(num - i, cache);
    res.forEach(function(x) {
      let way1 = x.concat(i)
      let way2 = [i].concat(x)

      arr.push(way1);
      arr.push(way2);

    })
  }

  arr = makeUniqueArr(arr);

  cache[num] = arr;

  return cache[num];
}

function makeUniqueArr(arr) {
  let records = {};
  let newArr = [];
  arr.forEach(function(el){
    if (!records[el]){
      records[el] = true;
      newArr.push(el);
    }
  })
  return newArr;
}

let cache = {
  1: [[1]],
  2: [[1,1], [2]],
  3: [[1,1,1], [2,1], [1,2], [3]]
}

stepWays(4, cache);
