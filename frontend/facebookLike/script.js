let likeMain = document.querySelector('.likeMain');
let buttons = document.querySelector('.likeBox');

let currentLike = document.querySelector('.currentLike');

function like(e) {
  let url = e.target.src;
  let text = e.target.dataset.text;

  if (url) {
  currentLike.innerHTML = `<div class="trimImg">
                              <img src="${url}" />
                            </div>${text}`;
  }
}

buttons.addEventListener('click', like)
