// pick all of the images and layer them based on z-index
const slideArea = document.querySelector('.slides');

// select all the images from the DOM
const images = Array.prototype.slice.call(slideArea.querySelectorAll('img'));
console.log(images);

// we want to keep track of two things
let currentSlide = 0;
let z = 1;

// when i lick the slide area, change the slide base on z-index
slideArea.addEventListener('click', function () {
  currentSlide = currentSlide + 1;
  z = z + 1;

  // pick the right image
  images[currentSlide].style.zIndex = z;
});
