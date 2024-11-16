import {ProgressBar} from './progressBarClass.js'

const progressBarElement = document.getElementById('progressBar');
const progressValue = document.getElementById('progressBarValue');
const animateButton = document.getElementById('animateButton');
const hideButton = document.getElementById('hideButton');
const hideElementsArray = document.querySelectorAll('.hide-element');

const progressBar = new ProgressBar(progressBarElement);
progressBar.setProgress(progressValue.value);

function onAnimateToggleClick() {
    if (animateButton.checked) {
        progressBar.startRotation();
    } else {
        progressBar.stopRotation();
    }
}

function onHideToggleClick() {
    if (hideButton.checked) {
        for (let elem of hideElementsArray) {
            elem.style.display = 'none';
        }
    } else {
        for (let elem of hideElementsArray) {
            elem.style.display = '';
        }
    }
}

function onInputChange() {
    let value = parseInt(progressValue.value, 10);
    isNaN(value) ? value = 0 : null;
    value > 100 ? value = 100 : null;
    progressValue.value = value;
    progressBar.setProgress(progressValue.value);
}


progressValue.addEventListener('input', onInputChange);
animateButton.addEventListener('click', onAnimateToggleClick);
hideButton.addEventListener('click', onHideToggleClick);