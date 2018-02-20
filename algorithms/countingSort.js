function countingSort(arr) {
  let arrMap = [];
  let ansArr = [];

  arr.forEach(function(x){
    if (arrMap[x]) {
      arrMap[x] += 1;
    } else {
      arrMap[x] = 1;
    }
  });

  let newMap = [];
  let counter = 0;

  arrMap.forEach(function(x, idx) {
    if(x){
      counter += arrMap[idx];
      newMap[idx] = counter;
    }
  });

  arr.forEach((x) => {
    newMap[x] -= 1;
    let idx = newMap[x];
    ansArr[idx] = x;
  })

  return ansArr;
}
