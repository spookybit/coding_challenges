let likeMain = document.querySelector('.likeMain');
let buttons = document.querySelectorAll('[data-button="button"]')

function like() {
  console.log(this)
  let url = this.dataset.status;
  console.log(url);

  let newInner = `<div class="likeBox">
                    <div class="like" data-button="button" data-status="./assets/profile.png">Like</div>
                    <div class="heart" data-button="button" data-status="./assets/heart.png">Heart</div>
                    <div class="laugh" data-button="button" data-status="./assets/heart.png">Laugh</div>
                    <div class="shock" data-button="button" data-status="./assets/heart.png">Shock</div>
                    <div class="cry" data-button="button" data-status="./assets/heart.png">Cry</div>
                    <div class="angry" data-button="button" data-status="./assets/heart.png">Angry</div>
                  </div>
                  <img src="${url}"/>`

    console.log(newInner);
    likeMain.innerHTML = newInner;

    let buttons = document.querySelectorAll('[data-button="button"]')
    buttons.forEach(function(button) {
      button.addEventListener('click', like)
    })

  // console.log(likeMain.innerHTML);
  // console.log(this.innerHTML);
  // likeMain.setAttribute('data-status', this.innerHTML);
  // likeMain.setAttribute('data-status', '<img src="./assets/profile.png" />');
  // likeMain.setAttribute('data-status', '<img src="./assets/profile.png" />');
}

buttons.forEach(function(button) {
  button.addEventListener('click', like)
})
