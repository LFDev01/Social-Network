function fadeLightEffect() {
  const formField = document.querySelector('.sign-up-form');
  const getLightElement = document.querySelector('.light-effect');
  getLightElement.style.animationName = 'remove-light-effect';

  setTimeout(() => {
    getLightElement.animationName = 'none';
    getLightElement.style.display = 'none';
    formField.style.animationName = 'form-animation';

    setTimeout(() => {
      formField.style.opacity = 1.0;
    }, 1000);
  }, 2000);

}

window.onload = fadeLightEffect;
