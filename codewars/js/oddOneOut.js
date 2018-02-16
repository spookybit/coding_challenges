function oddOneOut(arr) {
  let hashmap = {
    'oddCount' : 0,
    'evenCount' : 0,
    'oddPosition': 0,
    'evenPosition': 0
  };

  for (let i = 0; i < arr.length; i++) {
    let mod = arr[i]%2;

    if (mod === 0) {
      hashmap['evenCount'] += 1;
      hashmap['evenPosition'] = i;
    } else {
      hashmap['oddCount'] += 1;
      hashmap['oddPosition'] = i;
    }

    if (hashmap['oddCount'] > 1 && hashmap['evenCount'] === 1) {
      return hashmap['evenPosition']
    } else if (hashmap['evenCount'] > 1 && hashmap['oddCount'] === 1) {
      return hashmap['oddPosition']
    }
  }

}
