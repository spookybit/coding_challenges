//sorted array

function onlyOneDuplicate(arr) {
  let count = 2;

  if (arr.length <= 2) {
    count = arr.length;
    return count;
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] != arr[i-2]) {
      count += 1;
    }
  }

  return count;
}
