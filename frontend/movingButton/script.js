let button = document.querySelector('.button');

function moveButton(e) {
  this.classList.toggle('moveButton');
  thisButton = this;
  setTimeout(function() {
    // 'this' refers to Window object in here because it is a different scope
    // button.classList.toggle('moveButton');
    thisButton.classList.remove('moveButton');
  }, 2000);
}

button.addEventListener('click', moveButton)
