const Flickity = require('flickity');

const slider = new Flickity('.carousel', {
    pageDots: false,
    wrapAround: true,
    autoPlay: 4000
});

const initYear = () => {
    const yearElement = document.querySelector('.year');
    const todaysDate = new Date();
    const thisYear = todaysDate.getFullYear();

    yearElement.innerHTML = thisYear;
};

// Init functions
document.addEventListener('DOMContentLoaded', () => {
  initYear();
});
