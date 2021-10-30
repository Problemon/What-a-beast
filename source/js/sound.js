const audio = new Audio();

const backgroundMusic = {
  play () {
    audio.src = '../music/morning.mp3';
    audio.volume = 0.3;
    audio.loop = true;
    window.addEventListener('click', () => audio.play());
  }
}

const playSoundBubble = () => {
  audio.src = './music/bubble.mp3';
  audio.volume = 0.1;
  audio.play();
}

export { backgroundMusic, playSoundBubble};
