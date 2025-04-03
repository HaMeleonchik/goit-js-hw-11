import { getCorrectImages } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.querySelector('input');

form.addEventListener('submit', getCorrectImages);

input.required = false;
