// how many orders can we make with inventory available

function numOrders(recipe, inventory){
  let ingredients = Object.keys(recipe);
  let bottleneck;


  for (let i = 0, len = ingredients.length; i < len; i++) {
    let item = ingredients[i];
    let batches = Math.floor(inventory[item]/recipe[item]);
    if (batches === 0) {
      return 0;
    } else if (!bottleneck) {
      bottleneck = batches;
    } else if(bottleneck > batches) {
      bottleneck = batches;
    }
  }

  return bottleneck;

}


let fries = {oil: 100, potatoes: 40, salt: 4};
let inventory = {oil: 200000, potatoes: 80000, salt: 1000};
numOrders(fries, inventory);
