function radixSort(arr) {
    let indexMap = [];
    let res = [];

    let max = Math.max.apply(Math, arr);
    let digits = max.toString().split('').length;

    for (let i = 1; i < digits + 1; i++){
        
        arr.forEach(function(x) {
          let num = x.toString().split('')
          num = num[num.length - i] || 0;

          if (indexMap[num]) {
            indexMap[num] += 1;
          } else {
            indexMap[num] = 1;
          };
        })


        let total = 0;

        for (let i = 0; i < indexMap.length; i++) {
          if (indexMap[i]) {
            let val = indexMap[i];
            indexMap[i] = total;
            total += val;
          }
        }

        arr.forEach(function(x) {
          let num = x.toString().split('')
          num = num[num.length - i] || 0;

          res[indexMap[num]] = x
          indexMap[num] += 1;
        })

        arr = res;
        res = [];
        indexMap = [];
    }
    return arr;
}
