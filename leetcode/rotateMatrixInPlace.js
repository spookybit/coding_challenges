let matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

var rotate = function(matrix) {
    let len = matrix.length-1

    for (let x = 0; x <= len/2; x++) {
        for (let y = x; y < len-x; y++) {
            let hold = matrix[x][y];
            matrix[x][y] = matrix[y][len-x];
            matrix[y][len-x] = matrix[len-x][len-y];
            matrix[len-x][len-y] = matrix[len-y][x];
            matrix[len-y][x] = hold;
        }
    }
    return matrix
};
