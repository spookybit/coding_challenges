let likeMain = document.querySelector('.likeMain');
// let buttons = document.querySelectorAll('[data-button="button"]');
let buttons = document,querySelector('.likeBox');

function like() {
  let url = this.dataset.status;
  let currentLike = document.querySelector('.currentLike');

  currentLike.innerHTML = `<div class="trimImg currentLike">
                              <img src="${url}" />
                            </div>${this.dataset.text}`
  // too big brain:
  // likeMain.setAttribute('data-status', this.innerHTML);
  // likeMain.setAttribute('data-status', '<img src="./assets/profile.png" />');
}

// buttons.forEach(function(button) {
//   button.addEventListener('click', like)
// })
