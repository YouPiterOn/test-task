const getNumberOfImages = () => {
  const images = document.getElementsByClassName("image");
  return images.length;
}

const getDateTimeStr = () => {
  const datetime = new Date();
  return datetime.toLocaleString();
}

const updateClock = (clock) => {
  if (!(clock instanceof HTMLElement)) {
    throw new Error("Clock has to be dom element");
  }
  clock.textContent = getDateTimeStr();
};

const imagesCounter = document.getElementById("images-counter");
imagesCounter.innerText = `${getNumberOfImages()} Images`;

const clock = document.getElementById("clock");
updateClock(clock);
setInterval(() => updateClock(clock), 1000);