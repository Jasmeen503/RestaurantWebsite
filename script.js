let navOpenClick = document.querySelector('.nav-slider');
let navCloseClick = document.querySelector('.nav-close');
let navSliderSection = document.querySelector('.nav-slider-section');
let navLinks = document.querySelectorAll('.nav-links');

navOpenClick.onclick = function() {
    navSliderSection.classList.remove('closeNav');
    navSliderSection.classList.add('openNav');
}

navCloseClick.onclick = closeNavSlider;

navLinks.forEach((link, i) => {
   link.onclick = closeNavSlider;
});

function closeNavSlider() {
  navSliderSection.classList.remove('openNav');
  navSliderSection.classList.add('closeNav');
}
