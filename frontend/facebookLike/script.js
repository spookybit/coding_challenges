let likeMain = document.querySelector('.likeMain');
let buttons = document.querySelector('.likeBox');


function like(e) {
  let currentLike = document.querySelector('.currentLike');
  let url = e.target.src;
  let text = e.target.dataset.text;
  // console.log(e.target.dataset.text)

  currentLike.innerHTML = `<div class="trimImg">
                              <img src="${url}" />
                            </div>${text}`;

                          console.log(currentLike.innerHTML);

}

buttons.addEventListener('click', like)

// let buttons = document.querySelectorAll('[data-button="button"]');

// function like() {
//   let url = this.dataset.status;
//   let currentLike = document.querySelector('.currentLike');
//
//   currentLike.innerHTML = `<div class="trimImg currentLike">
//                               <img src="${url}" />
//                             </div>${this.dataset.text}`
//   // too big brain:
//   // likeMain.setAttribute('data-status', this.innerHTML);
//   // likeMain.setAttribute('data-status', '<img src="./assets/profile.png" />');
// }

// buttons.forEach(function(button) {
//   button.addEventListener('click', like)
// })
