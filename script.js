function getGif() {}

function getWord() {}

let catImage = document.getElementById("cat-img");

let catButton = document.getElementById("btn-cat");

catButton.addEventListener("click", fetchCatImage);

function fetchCatImage() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((data) => {
      catImage.innerHTML = `<img src="${data.file}"/>`;
    });
}
