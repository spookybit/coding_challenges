const flightItems = document.querySelectorAll('.flightItem');

flightItems.forEach(function(item){
  let newEl = document.createElement('div');
  let newElText = document.createElement('span');
  newElText.innerHTML = 'ROUNDTRIP FROM';
  newEl.appendChild(newElText);
  newEl.className = 'tripDescription';
  let priceEl = item.querySelector('.price');
  item.insertBefore(newEl, priceEl);

  let newEl2 = document.createElement('div');
  let newElText2 = document.createElement('span');
  newElText2.innerHTML = 'per person';
  newEl2.appendChild(newElText2);
  newEl2.className = 'pricePerPerson';
  item.insertBefore(newEl2, priceEl.nextSibling);
})
