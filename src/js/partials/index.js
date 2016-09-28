import {lory} from 'lory.js';

if (document.querySelector('.js_slider')) {
    document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelector('.js_slider');

        lory(slider, {
            rewind: true
        });
    });
}
