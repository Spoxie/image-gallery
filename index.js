const image = document.getElementById("image-wrapper");
const switchButton = document.getElementById("imageswitch");
const smallImage = document.getElementById("small-image");
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
var index = 0;

//galleriaimagen määrittelyt
var img = document.createElement("img");
function onImageLoad() {
  img.setAttribute("src", images[index]);
  image.appendChild(img);
}

//näppäinten määrittely
var buttonRight = document.createElement("button");
var buttonLeft = document.createElement("button");

buttonRight.appendChild(document.createTextNode("right"));
buttonLeft.appendChild(document.createTextNode("left"));

switchButton.appendChild(buttonLeft);
switchButton.appendChild(buttonRight);

//funktiot ja event listeners

buttonRight.addEventListener("click", (event) => {
  event.preventDefault();

  index++;
  console.log(index);
  if (index > images.length - 1) {
    index = 0;
  }
  img.setAttribute("src", images[index]);
});
buttonLeft.addEventListener("click", (event) => {
  event.preventDefault();

  index--;
  console.log(index);
  if (index < 0) {
    index = images.length;
    console.log("meni i");
  }
  img.setAttribute("src", images[index]);
});
