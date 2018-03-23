function oddOneOutLinear(arr){
  let lookedUpNums = {};

  for (let i = 0, len = arr.length; i < len; i++) {
    let num = arr[i];

    if (lookedUpNums[num]){
      delete lookedUpNums[num];
    } else {
      lookedUpNums[num] = true;
    }
  }

  return Object.keys(lookedUpNums)[0]
}
