function quickSort(arr){
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let pivot = arr[mid];
  let left = [];
  let right = [];
  
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i === mid) {
      continue;
    }

    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));
}
