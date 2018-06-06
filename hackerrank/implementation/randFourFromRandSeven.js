function randSeven() {
  return Math.floor(Math.random() * 7) + 1
}

function randFour() {
  let num = 0;

  for (let i = 0; i < 4; i++) {
    num += randSeven();
  }

  return (num % 4)+1;
}

function countRandFour() {
  let counter = {1: 0, 2: 0, 3: 0, 4: 0}

  for (let i = 0; i < 1000; i++) {
    let num = randFour();
    counter[num] += 1
  }

  return counter;
}

countRandFour()
