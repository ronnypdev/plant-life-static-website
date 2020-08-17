const navToggle = document.querySelector('.toggle-nav');
const mainTag = document.querySelector('main');

navToggle.addEventListener(
  'click',
  function (event) {
    mainTag.classList.toggle('open');
  },
  false
);
