const navToggle = document.querySelector('.toggle-nav');
const mainTag = document.querySelector('main');

navToggle.addEventListener(
  'click',
  function (event) {
    mainTag.classList.toggle('open');

    if (mainTag.classList.contains('open')) {
      navToggle.innerHTML = `<img src="./images/close.svg" alt="hamburger menu button icon"> Close`;
    } else {
      navToggle.innerHTML = `<img src="./images/menu.svg" alt="hamburger menu button icon"> Menu`;
    }
  },
  false
);
