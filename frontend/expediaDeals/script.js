const flightItems = document.querySelectorAll('.flightItem');

flightItems.forEach(function(item){
  let newEl = document.createElement('div');
  let newElText = document.createElement('span');
  newElText.innerHTML = 'ROUNDTRIP FROM';
  newEl.appendChild(newElText);
  newEl.className = 'tripDescription';
  let priceEl = item.querySelector('.price');
  item.insertBefore(newEl, priceEl);
})