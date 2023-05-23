function disableInspect() {
  document.querySelector('body').removeAttribute('oncontextmenu');
  body.setAttribute('oncontextmenu', 'return false');
}

function enableInspect() {
  document.querySelector('body').removeAttribute('oncontextmenu');
  body.removeAttribute('oncontextmenu');
}

const getVideo = document.querySelector('.video');
getVideo.addEventListener('mouseover', disableInspect);
getVideo.addEventListener('mouseout', enableInspect);
