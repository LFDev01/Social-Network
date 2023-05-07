function disableInspect() {
  body.setAttribute('oncontextmenu', 'return false');
}

function enableInspect() {
  body.removeAttribute('oncontextmenu');
}

const body = document.querySelector('body');
const getVideo = document.querySelector('.video');
getVideo.addEventListener('mouseover', disableInspect);
getVideo.addEventListener('mouseout', enableInspect);
