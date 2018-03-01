function interpolationSearch(arr, target){
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos = low + Math.floor(((high - low)/(arr[high] - arr[low])) * (target-arr[low]))

    // console.log(low + " " + high + " " + pos)

    if(arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }
  return false;
}
