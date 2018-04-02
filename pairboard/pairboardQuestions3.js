//given a matrix preresenting a city block with each element being the height of a building, return the difference in height you could raise all the buildings without changing the 'skyline'. No buildings raised should go higher than the shortest building on its x and y axis or else that would change the 'skyline'

function evenSkyline(matrix){
  let counter = 0;
  let xSkylineMax = [];
  let ySkylineMax = [];

  for (let i = 0, len = matrix.length; i < len; i++){
    ySkylineMax.push(Math.max(...matrix[i]))

    let columnValues = [];
    for (let j = 0, jlen = matrix[0].length; j < jlen ; j++){
      let building = matrix[j][i]
      columnValues.push(building);
    }
    xSkylineMax.push(Math.max(...columnValues));
  }

  for (let i = 0, len = matrix.length; i < len; i++){
    for (let j = 0, jlen = matrix[0].length; j < jlen ; j++){
      let lowerBuilding = Math.min(ySkylineMax[i], xSkylineMax[j]);
      counter += lowerBuilding - matrix[i][j];
    }
  }

  return counter;

}

let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]];

evenSkyline(matrix);
