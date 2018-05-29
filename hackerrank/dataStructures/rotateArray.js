function rotateLeft(arr, num) {
  let result = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    result[i] = arr[(i+num)%arr.length];
  }

  return result;
}

rotateLeft([1,2,3,4,5], 7)
