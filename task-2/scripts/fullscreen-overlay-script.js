const images = [...document.getElementsByClassName('image')];
const overlay = document.getElementById('fullscreen-overlay');
const fullscreenImage = document.getElementById('fullscreen-image');
const exitButton = document.getElementById('exit-button');

images.forEach((img) => {
  img.addEventListener('click', () => {
      fullscreenImage.src = img.src;
      overlay.style.display = 'flex';
  })
})

exitButton.addEventListener('click', () => {
  overlay.style.display = 'none';
})