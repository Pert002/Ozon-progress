const progressBarElement = document.getElementById('progressBar');
const progressValue = document.getElementById('progressBarValue');
const animateButton = document.getElementById('animateButton');
const hideButton = document.getElementById('hideButton');
const hideElementsArray = document.querySelectorAll('.hide-element');

class ProgressBar {
    constructor(element) {
        this.element = element;
        this.progress = 0;
    }

    setProgress(value) {
        this.progress = Math.min(100, Math.max(0, value)); // ограничиваем от 0 до 100
        this.element.style.backgroundImage = `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(rgb(0, 0, 255, 90%) ${this.progress}%, rgb(0, 0, 255, 10%) 0%)`;
    }

    getProgress() {
        return this.progress;
    }

    startRotation() {
        this.element.classList.add('rotate');
    }

    stopRotation() {
        this.element.classList.remove('rotate');
    }

    resetProgress() {
        this.setProgress(0);
    }
}

const progressBar = new ProgressBar(progressBarElement);

progressBar.setProgress(progressValue.value);
progressValue.oninput = function() {
    progressValue.value > 100 ? progressValue.value = 100 : null;
    progressBar.setProgress(progressValue.value);
}

animateButton.onclick = function () {
    if (animateButton.checked) {
        progressBar.startRotation();
    } else {
        progressBar.stopRotation();
    }
}

hideButton.onclick = function () {
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
