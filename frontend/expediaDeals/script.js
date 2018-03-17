const flightItems = document.querySelectorAll('.flightItem');

flightItems.forEach(function(item){
  let newEl = document.createElement('div');
  newEl.innerHTML = 'ROUNDTRIP FROM'
  let priceEl = item.querySelector('.price');
  item.insertBefore(newEl, priceEl);
})