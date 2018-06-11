function cardGroups(cards, size) {
  cards = cards.sort(sortNumber);

  if (cards.length % size != 0) {
    return false;
  }

  let fullHand = [];
  let currentHand = [];
  let i = 0;

  while (cards.length > 0) {
    console.log(cards)
    console.log(fullHand);
    console.log(currentHand);
    if (i >= cards.length) {
      return false;
    }

    let card = cards[i];
    let lastCardIdx = currentHand.length;
    if (lastCardIdx === 0 || currentHand[lastCardIdx-1] === card-1) {
      currentHand.push(card);
      cards.splice(i, 1)

      if (currentHand.length === size) {
        fullHand.push(currentHand);
        currentHand = [];
        i = 0;
      }
    } else if (currentHand[lastCardIdx - 1] + 1 < card) {
      return false;
    } else {
      i += 1;
    }
  }

  return fullHand;
}

function sortNumber(a,b) {
    return a - b;
}

let cards = [8,8,9,7,7,7,6,7,10,6];
let size = 2;

cardGroups(cards, size)
