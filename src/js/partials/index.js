const Flickity = require('flickity');
const jump = require('jump.js');

const sliderElement = document.querySelector('.carousel') ? document.querySelector('.carousel') : null;
const slider = sliderElement ? new Flickity(sliderElement, {
    pageDots: false,
    wrapAround: true,
    autoPlay: 4000
}) : null;

const initYear = () => {
    const yearElement = document.querySelector('.year');
    const todaysDate = new Date();
    const thisYear = todaysDate.getFullYear();

    yearElement.innerHTML = thisYear;
};

const contactButton = document.getElementById('contactScroll');

// Init functions
document.addEventListener('DOMContentLoaded', () => {
    initYear();

    contactButton.addEventListener('click', () => {
        jump(document.body.scrollHeight);
    });
});

window.onload = () => {
    if (slider) {
        slider.resize();
    }
};