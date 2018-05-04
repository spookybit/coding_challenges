function runningMedian(arr){
  let result = [arr[0]];



  for (let i = 1, len = arr.length; i < len; i++) {
    let index, median;

    if (i%2 === 0) {
      index = i/2;
      median = arr[index];
    } else {
      index = Math.floor(i/2);
      median = (arr[index] + arr[index+1])/2;
    }
    result.push(median)
  }

  return result;
}
