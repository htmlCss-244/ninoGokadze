import { fetchRandomDog } from './api.js';
import { updateDogUI, toggleLoader } from './ui.js';

const imgElem = document.getElementById('dog-img');
const loaderElem = document.getElementById('dog-loader');
const btnElem = document.getElementById('new-dog-btn');

const loadMascot = async () => {
    toggleLoader(loaderElem, true);
    imgElem.style.display = 'none';

    try {
        const dogUrl = await fetchRandomDog();
        updateDogUI(dogUrl, imgElem);
    } catch (error) {
        console.error("System Error", error);
        loaderElem.textContent = "Friend not found, try again!";
    } finally {
        toggleLoader(loaderElem, false);
    }
};

if (btnElem) {
    btnElem.addEventListener('click', loadMascot);
}

document.addEventListener('DOMContentLoaded', loadMascot);