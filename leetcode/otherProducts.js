// take an array and return an array where every indices is the product of
//  the rest of the array except for the number at that index
// do not use division

// O(n)

function otherProduct(arr) {
  let res = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      res.push(1);
      product *= arr[i]
    } else {
      res.push(product);
      product *= arr[i];
    }
  }

  product = 1;

  for (let i = arr.length - 1; i > - 1; i--) {
    if (i === arr.length - 1) {
      product *= arr[i]
      continue;
    } else {
      res[i] *= product;
      product *= arr[i]
    }
  }

  return res
}
