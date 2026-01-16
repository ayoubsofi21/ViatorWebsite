images = [
  { src: "images/8f.jpg", name: "Paris" },
  { src: "images/15.jpg", name: "Rome " },
  { src: "images/19.jpg", name: "Paris" },
  { src: "images/47.jpg", name: "Paris" },
  { src: "images/b0.jpg", name: "Paris" },
  { src: "images/bd.jpg", name: "Paris" },
  { src: "images/c0.jpg", name: "Paris" },
  { src: "images/cc.jpg", name: "Paris" },
];

const container = document.querySelector(".image-container");
images.forEach((image) => {
  const divClass = document.createElement("div");
  const imgElement = document.createElement("img");
  const PName = document.createElement("p");
  imgElement.src = image.src;
  imgElement.alt = image.name;
  PName.textContent = image.name;
  divClass.appendChild(imgElement);
  divClass.appendChild(PName);
  container.appendChild(divClass);
});
