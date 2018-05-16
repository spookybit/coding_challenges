// Two images A and B are given, represented as binary, square matrices of the same size.  (A binary matrix has only 0s and 1s as values.)
//
// We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.
//
// (Note also that a translation does not include any kind of rotation.)
//
// What is the largest possible overlap?

function overlapMatrices(matrix1, matrix2) {
  let matrix1Map = {};
  let matrix2Map = {};
  let counter = 0;
  let maxMatches = 0;

  for (let i = 0, len = matrix1.length; i < len; i++) {
    for (let j = 0, len = matrix1[0].length; j < len; j++) {
      if (matrix1[i][j] === 1) {
        matrix1Map[[i,j]] = true;
        counter += 1;
      }
    }
  }

  counter = 0;

  for (let i = 0, len = matrix2.length; i < len; i++) {
    for (let j = 0, len = matrix2[0].length; j < len; j++) {
      if (matrix2[i][j] === 1) {
        matrix2Map[[i,j]] = true;
        counter += 1;
      }
    }
  }

  let shortMap = matrix1Map.length <= matrix2Map.length ? matrix1Map : matrix2Map;

  let longMap = matrix1Map.length > matrix2Map.length ? matrix1Map : matrix2Map

  let matches = 0;
  for (let i = -matrix1.length, len = matrix1.length; i < len; i++) {
    for (let j = -matrix1[0].length, len = matrix1[0].length; j < len; j++) {
      Object.keys(shortMap).forEach(function(pos){
        pos = pos.split(',');
        pos = [(parseInt(pos[0])+i).toString(), (parseInt(pos[1])+j).toString()];
        if (longMap[pos]) {
          console.log(pos);
          matches += 1;
        }
      })
      if (matches > maxMatches) {maxMatches = matches}
      matches = 0;
    }
  }

  return maxMatches;
}


let matrix1 = [[1,1,0],
            [0,1,0],
            [0,1,0]];

let matrix2 = [[0,0,0],
            [0,1,1],
            [0,0,1]];
overlapMatrices(matrix1, matrix2);
