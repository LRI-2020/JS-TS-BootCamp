"use strict";
getDog();
let newDog = document.querySelector('.newDog');
function isDogTherapy(value) {
    if (!value || typeof value !== 'object') {
        return false;
    }
    const object = value;
    return typeof object.message === 'string' && typeof object.status === 'string';
}
function toDogTherapy(data) {
    if (isDogTherapy(data))
        return data;
    throw new Error("expected dog therapy but model received does not match");
}
function displayDogTherapy(dogT) {
    if (dogT.status === "success") {
        let imgEl = document.querySelector('.dogImg');
        imgEl.setAttribute("src", dogT.message);
    }
    else {
        throw new Error("Oops, something gone wrong and your dog has been found.");
    }
}
function getDog() {
    let api = "https://dog.ceo/api/breeds/image/random";
    fetch(api).then(data => data.json())
        .then(data => toDogTherapy(data))
        .then(dogT => displayDogTherapy(dogT));
}
newDog.addEventListener('click', function () {
    getDog();
});
