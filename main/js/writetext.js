const wordList = ['Simplified technology.', 'More Tech, more possibilities.', 'Disconnect to reconnect.', 'Adapting the future.', 'Building better networks.', 'Making challenges possible.', 'The future of connections.', 'Working to make it work.', 'We integrate. You communicate.'];
let selectedWord = wordList[Math.trunc(Math.random() * wordList.length)];
let i = 0;

function writeText() {
  const wordOutput = document.querySelector('.slogan-text');
  wordOutput.textContent += selectedWord[i];
  i++;

  if (i === selectedWord.length) {
    selectedWord = wordList[Math.trunc(Math.random() * wordList.length)];
    clearInterval(writeInterval)
    i = 0;

    setTimeout(() => {
      wordOutput.style.animationName = 'hide-element';
    }, 2500);

    setTimeout(() => {
      wordOutput.textContent = '';
      wordOutput.style.animationName = 'none';
      writeInterval = setInterval(writeText, 100);
    }, 3400);
  }
}

let writeInterval = setInterval(writeText, 100);
