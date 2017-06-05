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
const mobileNavToggle = document.getElementById('mobileNavToggle');

// Init functions
document.addEventListener('DOMContentLoaded', () => {
    initYear();

    contactButton.addEventListener('click', () => {
        document.getElementById('pageHeader').classList.remove('mobileNavActive');
        jump(document.body.scrollHeight);
    });

    mobileNavToggle.addEventListener('click', () => {
        document.getElementById('pageHeader').classList.toggle('mobileNavActive');
    });
});

window.onload = () => {
    if (slider) {
        slider.resize();
    }
};