let isHide = true;

function changePasswordState() {
  if (isHide) {
    passIcon.setAttribute('src', '../img/pass-show.png');
    inputState.setAttribute('type', 'text');
    isHide = false;
  } else {
    passIcon.setAttribute('src', '../img/pass-hide.png');
    inputState.setAttribute('type', 'password');
    isHide = true;
  }
}

const inputState = document.querySelector('.password-input-state');
const passIcon = document.querySelector('.pass-icon');
passIcon.addEventListener('click', changePasswordState);
