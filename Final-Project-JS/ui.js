export const updateDogUI = (imgUrl, imgElem) => {
    imgElem.src = imgUrl;
    imgElem.style.display = 'block';
};

export const toggleLoader = (loaderElem, isVisible) => {
    loaderElem.style.display = isVisible ? 'block' : 'none';
};