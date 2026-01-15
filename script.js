window.onload = function () {
  const container = document.querySelector(".image-container");
  const imageFolder = "images/";
  const images = ["8f.jpg", "15.jpg", "19.jpg"];
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = imageFolder + image;
    imgElement.alt = image;
    imgElement.classList.add("image");
    container.appendChild(imgElement);
  });
};
