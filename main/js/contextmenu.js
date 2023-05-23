function disableInspect() {
  document.querySelector('body').removeAttribute('oncontextmenu');
}

function enableInspect() {
  document.querySelector('body').removeAttribute('oncontextmenu');
}

const getVideo = document.querySelector('.video');
getVideo.addEventListener('mouseover', disableInspect);
getVideo.addEventListener('mouseout', enableInspect);
