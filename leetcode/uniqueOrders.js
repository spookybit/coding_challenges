// given a list of items, return all unique possible combinations of items

function uniqueOrders(arr, size){
  if (arr.length == size) {
    return [arr];
  }

  if (size == 1) {
    let result = [];
    arr.forEach(item => result.push([item]));
    return result;
  }

  let combinations = [];

  for (let i = 0, times = arr.length - size+1; i < times; i++){
    let head = arr.slice(i, i+1);
    let tail = arr.slice(i+1);
    let tailCombinations = uniqueOrders(tail, size - 1);

    tailCombinations.forEach(function(item){
      combinations.push(head.concat(item));
    })
  }

  return combinations;

}

uniqueOrders(['fries', 'milkshake', 'burger', 'soda', 'mcnuggets'], 3)
