let input = document.querySelector('input');
let pass = document.querySelector('p');
let password = "";
function steal(e) {
  password += e.key
  pass.innerHTML += e.key;
}

input.addEventListener('keydown', steal)
