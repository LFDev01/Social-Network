function signInBox() {
  return `
  <span class="exit-button">←</span>
  <section class="sign-in-section">
    <div class="sign-in-item">
      <span class="sign-in-text">Username</span>
      <input type="text" class="input-style">
    </div>

    <div class="sign-in-item">
      <span class="sign-in-text">Password</span>
      <input type="password" class="input-style">
    </div>

    <button class="button" id="confirm-sign-in">Sign In</button>
  </section>
  `;
}

function signInExit() {
  const signInSection = document.querySelector('.sign-in-section');
  signInSection.style.animationName = 'hide-element';

  setTimeout(() => {
    const Items = document.querySelector('.items');
    signInSection.style.opacity = 0.0;

    Items.style.width = '10px';
    Items.style.height = '10px';
    Items.style.opacity = 0.0;
  }, 100);

  setTimeout(() => {
    location.reload();
  }, 500);
}

function signIn() {
  const Items = document.querySelector('.items');
  Items.style.animationName = 'hide-element';

  setTimeout(() => {
    Items.innerHTML = signInBox();
    Items.style.backgroundColor = '#fff';
    Items.style.borderRadius = '5px';
    Items.style.width = '10px';
    Items.style.height = '10px';
    Items.style.position = 'relative';
  }, 500);

  setTimeout(() => {
    const exitBtn = document.querySelector('.exit-button');
    exitBtn.addEventListener('click', signInExit);
    Items.style.width = '450px';
    Items.style.height = '300px';
  }, 600);

  setTimeout(() => {
    const signInSection = document.querySelector('.sign-in-section');
    signInSection.style.animationName = 'show-element';

    setTimeout(() => {
      signInSection.style.opacity = 1.0;
    }, 250);
  }, 1000);
}

function signUp() {
  const lightEffect = document.querySelector('.light-effect');
  lightEffect.style.display = 'block';
  lightEffect.style.animationName = 'show-element';

  setTimeout(() => {
    lightEffect.style.opacity = 1.0;
    lightEffect.style.animationName = 'none';
    location.href = '../sign-up/index.html';
  }, 2000);
}

function pageLoad() {
  const Items = document.querySelector('.items');
  Items.style.animationName = 'show-element';

  setTimeout(() => {
    Items.style.opacity = 1.0;
  }, 500);
}

window.onload = pageLoad;

const signUpButton = document.querySelector('#sign-up');
signUpButton.addEventListener('click', signUp);

const signInButton = document.querySelector('#sign-in');
signInButton.addEventListener('click', signIn);
