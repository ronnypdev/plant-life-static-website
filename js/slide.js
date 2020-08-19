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

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  z = z + 1;

  // remove the animation from the style for every image
  images.forEach((image) => {
    image.style.animation = '';
  });

  // pick the right image
  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = 'fade 0.5s';
});

// When input my mouse over the slide area, put all of the images
// in a random place
slideArea.addEventListener('mouseover', () => {
  images.forEach((image) => {
    const x = 25 * Math.floor(Math.random() * 5) - 50;
    const y = 25 * Math.floor(Math.random() * 5) - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// when i move my mouse away, put the images back
slideArea.addEventListener('mouseout', () => {
  images.forEach((image) => {
    image.style.transform = '';
  });
});
