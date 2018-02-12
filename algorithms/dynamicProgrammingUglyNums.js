// ugly number sequence are numbers only divisible by 2, 3, and 5; find the nth number in the sequence

function uglyNumSeries(n) {
  let hashmap = {1:1};

  let i2 = i3 = i5 = 1;
  let m2 = hashmap[i2] * 2;
  let m3 = hashmap[i3] * 3;
  let m5 = hashmap[i5] * 5;

  for (let i = 2; i < n+1; i++){
    let next = Math.min(m2, m3, m5);
    hashmap[i] = next;

    if (next === m2) {
      i2 += 1;
      m2 = hashmap[i2]*2;
    }

    if (next === m3) {
      i3 += 1;
      m3 = hashmap[i3]*3;
    }

    if (next === m5) {
      i5 += 1;
      m5 = hashmap[i5]*5;
    }
  }

  return hashmap[n]
}
