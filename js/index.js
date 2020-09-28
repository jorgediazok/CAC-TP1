//Toggle button menu

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

//lightslider

$(document).ready(function () {
  $('#autoWidth').lightSlider({
    item: 4,
    autoWidth: true,
    loop: true,
    controls: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    },
  });
});
