// return difference of two arrays [1,2,3,4] - [2,3] = [1,4]

function arrDiff(arr1, arr2){
  let arr2Keys = {};
  for (let i = 0, len = arr2.length ; i < len; i++) {
    arr2Keys[arr2[i]] = true;
  }

  let differenceArray = [];

  for (let i = 0, len = arr1.length; i < len; i++){
    let val = arr1[i];
    if (!arr2Keys[val]){
      differenceArray.push(arr1[i]);
    }
  }

  return differenceArray;
}
