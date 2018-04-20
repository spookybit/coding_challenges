// Trapping Rain Water
// You are given an array of n non-negative integers, where each number represents a ground elevation. Each point of elevation has a width of 1. For example, given an array [5, 2, 4, 3, 1, 4], the elevation map would look something like this:
//
//  ___
// |   |    ___         ___
// |   |   |   |___    |   |
// |   |___|       |   |   |
// |               |___|   |
// | 5   2   4   3   1   4 |
// Our goal is to compute how much water our elevation map would be able to trap if it rained. Referring to the above example, it would look like this if it rained:
//
//  ___
// |   |,,, ___ ,,,,,,, ___
// |   |///|   |///////|   |
// |   |///|       |///|   |
// |               |///|   |
// | 5   2   4   3   1   4 |
// Thus, for an input of [5, 2, 4, 3, 1, 4], the total sum of water that would be trapped is 6 units.
//
// Write a method, trappedWater, that calculates this for you.

function catchRainWater(arr) {
  let collectedWater = 0;
  let leftMaxHeights = [];
  let rightMaxHeights = [];
  let leftPeak = arr[0];
  let rightPeak = arr[arr.length-1];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (leftPeak < arr[i]) {
      leftPeak = arr[i]
    }
    leftMaxHeights.push(leftPeak)
  }

  for (let i = arr.length - 1; i > - 1; i--) {
    if (rightPeak < arr[i]) {
      rightPeak = arr[i]
    }
    rightMaxHeights.push(rightPeak)
  }

  for (let i = 0, len = arr.length; i < len; i++) {
    collectedWater += Math.min(leftMaxHeights, rightMaxHeights) - arr[i]
  }

  return collectedWater;
}
