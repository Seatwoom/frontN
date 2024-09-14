function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const imageStack = [];

function getSpecialElements() {
  const tenthElement = document.getElementById("10el");
  const eleventhElement = document.querySelector("ol > li:nth-of-type(2)");
  return {
    tenthElement,
    eleventhElement,
  };
}

const { tenthElement, eleventhElement } = getSpecialElements();

document.addEventListener("click", function (event) {
  const target = event.target;

  if (target === tenthElement) {
    target.style.backgroundColor = getRandomColor();
    target.style.color = getRandomColor();
  } else if (target === eleventhElement) {
    target.style.backgroundColor = getRandomColor();
    target.style.color = getRandomColor();
  }
});

document.getElementById("addButton").addEventListener("click", function () {
  const newImage = document.createElement("img");
  newImage.src = document.getElementById("image").src;
  newImage.alt = "Вроцлав";
  document.body.appendChild(newImage);
  imageStack.push(newImage);
});

document
  .getElementById("increaseButton")
  .addEventListener("click", function () {
    const image = document.getElementById("image");
    const width = image.offsetWidth;
    image.style.width = width + 50 + "px";
  });

document
  .getElementById("decreaseButton")
  .addEventListener("click", function () {
    const image = document.getElementById("image");
    const width = image.offsetWidth;
    if (width > 50) {
      image.style.width = width - 50 + "px";
    }
  });

document.getElementById("removeButton").addEventListener("click", function () {
  if (imageStack.length > 0) {
    const lastImage = imageStack.pop();
    lastImage.parentNode.removeChild(lastImage);
  }
});
