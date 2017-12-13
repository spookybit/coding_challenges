let deck = [1,2,3,4,5,6,7,8,9,10]

function shuffle(deck) {
  for (let i = 0; i < deck.length; i++) {
  let temp = deck[i]
  let j = [((Date.now()+i)**3)%deck.length]

  deck[i] = deck[j];
  deck[j] = temp;
  }
  return deck
}

shuffle(deck)

// in ruby, you can use card.object_id on each of the card objects to get a 'randomized' number
// {}.object_id/100 % 52 gives random number

function promiseDotAll(arr) {
  
}
