function rotatedArrSearch(arr, target){
  let pivot = findPivot(arr, target);
  let start = 0;
  let end  = arr.length - 1;
  let right = false;

  if (target >= arr[pivot] && target <= arr[end]) {
    start = pivot;
    right = true;
  } else if (target >= arr[start] && target <= arr[pivot - 1]){
    end = pivot - 1;
  } else {
    return false;
  }

  let idx = bsearch(arr.slice(start, end+1), target)

  if (idx === false) {
    return false;
  }

  if (right) {
    return pivot + idx;
  } else {
    return idx;
  }
}

function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;

  if (arr[start] <= arr[end]){
    return start;
  }

  while (true) {
    let mid = Math.floor((start+end)/2);

    if (arr[mid] >= arr[mid+1]) {
      return mid+1;
    } else if (arr[mid] >= arr[start]) {
      start = mid + 1;
    } else {
      end = mid - 1
    }
  }
}

function bsearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start+end)/2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
}
