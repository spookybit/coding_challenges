// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
//
// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
//
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

function simpleFlips(matrix) {
  let invertMap = {1: 0, 0:1};

  matrix.forEach(function(row){
    for (let i = 0, len = Math.ceil(row.length/2); i < len; i++) {
      let invertPos = row.length - i - 1;
      let storeVal = row[i];
      row[i] = invertMap[row[invertPos]];
      row[invertPos] = invertMap[storeVal];
    }
  })

  return matrix;
}

let matrix = [[1,1,0],[1,0,1],[0,0,0]];

simpleFlips(matrix);
