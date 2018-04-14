function makeBetterChange(amount, coins, cache = {0:[]}){
  if (cache[amount]) {
    return cache[amount];
  }

  if (amount < coins[0]) {
    return null;
  }
  let minimumCoins;
  for (let i = 0, len = coins.length ; i < len ; i++) {
    if (coins[i] > amount) {
      continue;
    }

    let coinCase = makeBetterChange(amount - coins[i], coins, cache);

    if (coinCase) {
      coinCase = coinCase.concat(coins[i])
      if (minimumCoins === undefined || coinCase.length < minimumCoins.length) {
        minimumCoins = coinCase;
      }
    }

  }

  if (minimumCoins) {
    cache[amount] = minimumCoins;
    return minimumCoins;
  } else {
    return null;
  }
}

makeBetterChange(18, [1,7,10])
