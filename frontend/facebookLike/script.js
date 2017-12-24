let likeMain = document.querySelector('.likeMain');
let buttons = document.querySelectorAll('[data-button="button"]')

function like() {
  let url = this.dataset.status;

  let newInner = `<div class="likeBox">
                    <div class="trimImg">
                      <div class="like" data-button="button" data-status="./assets/navi.png" data-text="Like"><img src="./assets/navi.png" /></div>
                    </div>
                    <div class="trimImg">
                      <div class="heart" data-button="button" data-status="./assets/heart.png" data-text="Heart"><img src="./assets/heart.png" /></div>
                    </div>
                    <div class="trimImg">
                      <div class="laugh" data-button="button" data-status="./assets/haha.png" data-text="Haha"><img src="./assets/haha.png" /></div>
                    </div>
                    <div class="trimImg">
                      <div class="shock" data-button="button" data-status="./assets/rupee.png" data-text="Wow"><img src="./assets/rupee.png" /></div>
                    </div>
                    <div class="trimImg">
                      <div class="cry" data-button="button" data-status="./assets/majora.png" data-text="Sad"><img src="./assets/majora.png" /></div>
                    </div>
                    <div class="trimImg">
                      <div class="angry" data-button="button" data-status="./assets/cucco.png" data-text="Angry"><img src="./assets/cucco.png" /></div>
                    </div>
                  </div>
                  <div class="trimImg">
                  <img src="${url}"/>
                  </div>${this.dataset.text}`

    likeMain.innerHTML = newInner;

    // need to do this again because the old button elements are overridden
    let buttons = document.querySelectorAll('[data-button="button"]')
    buttons.forEach(function(button) {
      button.addEventListener('click', like)
    })

  // too big brain:
  // likeMain.setAttribute('data-status', this.innerHTML);
  // likeMain.setAttribute('data-status', '<img src="./assets/profile.png" />');
}

buttons.forEach(function(button) {
  button.addEventListener('click', like)
})
